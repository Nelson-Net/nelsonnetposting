import mergeImages from 'merge-images'
import { writeFileSync, readdirSync } from 'fs'
import { Canvas, Image } from 'canvas'
import sharp from 'sharp'
import Jimp from 'jimp'

export const generateWojak = async (text: string) => {
	await sharp(`./src/images/wojaks/${pickWojak()}`).resize(512, 512).extend({ top: 100 }).toFile('./src/images/resize.png')
	const base64Image = await mergeImages(
		[{ src: './src/images/background.png', x: 0, y: 0 }, './src/images/resize.png', { src: './src/images/captionbox.png', x: 0, y: 0 }],
		{ Canvas: Canvas, Image: Image },
	)
	const image = base64Image.split(';base64,').pop() as string
	writeFileSync('./src/images/captionedimage.png', image, { encoding: 'base64' })
	const captionedimage = await Jimp.read('./src/images/captionedimage.png')
	const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
	captionedimage.print(
		font,
		0,
		0,
		{
			text,
			alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
			alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
		},
		512,
		100,
	)
	await captionedimage.writeAsync('./src/images/final.png')
}

const pickWojak = (): string => {
	const dir = readdirSync('./src/images/wojaks')
	return dir[Math.floor(Math.random() * dir.length)]
}
