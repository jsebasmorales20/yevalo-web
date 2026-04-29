// scripts/build-shopify.js
// Compila el proyecto Vite y genera un ZIP listo para subir a Shopify como tema.

import { execSync }                                          from 'child_process'
import { readFileSync, writeFileSync, mkdirSync,
         copyFileSync, readdirSync, existsSync, rmSync,
         createWriteStream }                                 from 'fs'
import { join }                                              from 'path'
import archiver                                              from 'archiver'

const ROOT  = process.cwd()
const DIST  = join(ROOT, 'dist')
const THEME = join(ROOT, 'shopify-theme')
const ZIP   = join(ROOT, 'yevalo-theme.zip')

// ── 1. Compilar ───────────────────────────────────────────
console.log('\n▸ Compilando con Vite...')
execSync('npm run build', { stdio: 'inherit', env: { ...process.env, PATH: `C:\\Program Files\\nodejs\\;${process.env.PATH}` } })

// ── 2. Limpiar carpeta de tema anterior ───────────────────
if (existsSync(THEME)) rmSync(THEME, { recursive: true, force: true })
;['assets','config','layout','sections','templates','locales'].forEach(d =>
  mkdirSync(join(THEME, d), { recursive: true })
)

// ── 3. Copiar assets compilados ───────────────────────────
console.log('▸ Copiando assets...')
const assetsDir = join(DIST, 'assets')
readdirSync(assetsDir).forEach(file =>
  copyFileSync(join(assetsDir, file), join(THEME, 'assets', file))
)

// ── 4. Transformar index.html → layout/theme.liquid ───────
console.log('▸ Generando layout/theme.liquid...')
let html = readFileSync(join(DIST, 'index.html'), 'utf-8')

// Rutas de assets → filtro asset_url de Shopify
html = html.replace(/src="\/assets\/([^"]+)"/g,  (_, f) => `src="{{ '${f}' | asset_url }}"`)
html = html.replace(/href="\/assets\/([^"]+)"/g, (_, f) => `href="{{ '${f}' | asset_url }}"`)

// Inyectar content_for_header (obligatorio en Shopify) justo antes de </head>
html = html.replace('</head>', '  {{ content_for_header }}\n  </head>')

// Inyectar content_for_layout (obligatorio) justo antes de </body>
html = html.replace('</body>', '  {{ content_for_layout }}\n  </body>')

writeFileSync(join(THEME, 'layout', 'theme.liquid'), html)

// ── 5. Archivos mínimos requeridos por Shopify ─────────────
writeFileSync(join(THEME, 'templates', 'index.json'), JSON.stringify({
  sections: { main: { type: 'main-index', settings: {} } },
  order: ['main']
}, null, 2))

writeFileSync(join(THEME, 'sections', 'main-index.liquid'), `{% schema %}
{
  "name": "Main",
  "settings": []
}
{% endschema %}`)

writeFileSync(join(THEME, 'config', 'settings_schema.json'), JSON.stringify([{
  "name": "theme_info",
  "theme_name": "Yevalo",
  "theme_version": "1.0.0",
  "theme_author": "Yevalo",
  "theme_documentation_url": "",
  "theme_support_url": ""
}], null, 2))

writeFileSync(join(THEME, 'locales', 'es.default.json'), '{}')

// ── 6. Empaquetar como ZIP con rutas unix (/) ──────────────
console.log('▸ Creando ZIP...')
if (existsSync(ZIP)) rmSync(ZIP)

await new Promise((resolve, reject) => {
  const output  = createWriteStream(ZIP)
  const archive = archiver('zip', { zlib: { level: 9 } })

  output.on('close', resolve)
  archive.on('error', reject)
  archive.pipe(output)

  // Agrega el contenido de shopify-theme/ con rutas relativas (/ no \)
  archive.directory(THEME + '/', false)
  archive.finalize()
})

console.log(`\n✓ Listo → yevalo-theme.zip\n`)
console.log('Pasos para subir a Shopify:')
console.log('  1. Ve a tu admin de Shopify → Tienda en línea → Temas')
console.log('  2. Clic en "Agregar tema" → "Subir archivo ZIP"')
console.log('  3. Selecciona yevalo-theme.zip')
console.log('  4. Una vez subido, clic en "Publicar"\n')
