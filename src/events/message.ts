import { Client } from 'discord.js'
import { generateWojak } from '../services/generatewojak'

export default (client: Client): void => {
	client.on('messageCreate', async (message) => {
		if (message.author?.id !== client.user?.id) {
			const random = Math.floor(Math.random() * 100)
			if (random === 1) {
				await generateWojak(`"${message.content}"`)
				await message.channel.send({ files: ['./src/images/final.png'] })
			}
		}
	})
}
