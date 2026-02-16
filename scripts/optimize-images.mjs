#!/usr/bin/env node
import sharp from 'sharp'
import { readdir, readFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const MAX_WIDTH = 1024
const WEBP_QUALITY = 82
const PNG_QUALITY = 85

async function optimize() {
  for (const name of ['hero.png', 'mechanisch_veredelt.png']) {
    const inputPath = join(publicDir, name)
    const baseName = name.replace(/\.png$/i, '')
    const webpPath = join(publicDir, `${baseName}.webp`)
    try {
      const buf = await readFile(inputPath)
      const meta = await sharp(buf).metadata()
      const w = Math.min(meta.width || MAX_WIDTH, MAX_WIDTH)
      const pipeline = sharp(buf).resize(w, null, { withoutEnlargement: true })
      await pipeline.webp({ quality: WEBP_QUALITY }).toFile(webpPath)
      const optPngPath = join(publicDir, `${baseName}-compressed.png`)
      await sharp(buf)
        .resize(w, null, { withoutEnlargement: true })
        .png({ quality: PNG_QUALITY, compressionLevel: 9 })
        .toFile(optPngPath)
      const origKb = ((await readFile(inputPath)).length / 1024).toFixed(1)
      const webpKb = ((await readFile(webpPath)).length / 1024).toFixed(1)
      const pngKb = ((await readFile(optPngPath)).length / 1024).toFixed(1)
      console.log(`${name}: orig ${origKb} KB -> WebP ${webpKb} KB, PNG ${pngKb} KB`)
    } catch (err) {
      console.error(name, err)
    }
  }
}

optimize()
