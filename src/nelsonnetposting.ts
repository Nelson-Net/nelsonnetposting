import { Client, GatewayIntentBits } from 'discord.js'
import * as dotenv from 'dotenv'
import interactionCreate from './events/interactionCreate'
import onMessage from './events/message'
import ready from './events/ready'

dotenv.config()

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers],
})

ready(client)
interactionCreate(client)
onMessage(client)

client.login(process.env.nelsonnetpostingtoken)
