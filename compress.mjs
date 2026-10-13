import sharp from 'sharp'
import fs from 'fs'

const dir = 'public/images/'
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.jpg'))) {
  const width = f === 'hero.jpg' ? 1600 : 1200
  const buf = await sharp(dir + f)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 75, mozjpeg: true })
    .toBuffer()
  fs.writeFileSync(dir + f, buf)
  console.log(f, Math.round(buf.length / 1024) + ' KB')
}