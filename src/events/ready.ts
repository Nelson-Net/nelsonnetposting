import { ActivityType, Client } from 'discord.js'
import { Commands } from '../commands'
export default (client: Client): void => {
	client.on('ready', async () => {
		if (!client.user || !client.application) {
			return
		}
		await client.application.commands.set(Commands)
		client.user.setActivity('the shitposters choice awards', { type: ActivityType.Streaming })
		console.log(`${client.user.username} is ready to shitpost`)
	})
}
