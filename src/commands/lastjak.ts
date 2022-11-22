import { Client, TextChannel } from 'discord.js'
import { generateWojak } from '../services/generatewojak'
import { ChatCommand } from '../command'

export const Lastjak: ChatCommand = {
	name: 'lastjak',
	description: 'Generate a wojak from the last message sent',
	options: [],
	run: async (client: Client, interaction) => {
		const chan = interaction.channel as TextChannel
		const messages = await chan.messages.fetch({ limit: 2 })
		await generateWojak(`"${messages.at(1)?.content}"` as string)
		await interaction.followUp({ files: ['./src/images/final.png'] })
	},
}
