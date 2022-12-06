import { Client } from 'discord.js'
import { generateWojak } from '../services/generatewojak'

export default (client: Client): void => {
	client.on('messageCreate', async (message) => {
		if (message.reference?.messageId) {
			if (message.content === 'wojak') {
				const repliedMessage = await message.channel.messages.fetch(message.reference?.messageId as string)
				await generateWojak(`"${repliedMessage.content}"`)
				await message.channel.send({ files: ['./src/images/final.png'] })
			}
		}
		if (message.author?.id !== client.user?.id) {
			const random = Math.floor(Math.random() * 500)
			if (random === 1) {
				await generateWojak(`"${message.content}"`)
				await message.channel.send({ files: ['./src/images/final.png'] })
			}
		}
	})
}
