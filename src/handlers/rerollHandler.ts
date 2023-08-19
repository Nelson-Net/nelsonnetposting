import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Message } from "discord.js";
import { generateWojak } from "../services/generatewojak";

export const rerollWojak = async (message: Message) => {
    const repliedMessage = await message.channel.messages.fetch(message.reference?.messageId as string)
    await generateWojak(`"${repliedMessage.content}"`)
    await repliedMessage.reply({ files: ['./src/images/final.png'] })
    await message.delete()

}