import { Client } from 'discord.js'
import { generateWojak } from '../services/generatewojak'
import { ChatCommand } from '../command'

export const Wojak: ChatCommand = {
	name: 'wojak',
	description: 'Generate a random wojak from text',
	options: [
		{
			name: 'caption',
			type: 3,
			description: 'The caption for your wojak',
			required: true,
		},
	],
	run: async (client: Client, interaction) => {
		await generateWojak(`"${interaction.options._hoistedOptions[0].value}"`)
		await interaction.followUp({ files: ['./src/images/final.png'] })
	},
}
