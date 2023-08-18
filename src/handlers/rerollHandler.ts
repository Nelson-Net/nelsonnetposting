import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Message } from "discord.js";
import { generateWojak } from "../services/generatewojak";

export const rerollWojak = async (message: Message) => {
    const repliedMessage = await message.channel.messages.fetch(message.reference?.messageId as string)
    await generateWojak(`"${repliedMessage.content}"`)
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId('reroll').setLabel("Reroll!").setStyle(ButtonStyle.Success)
    )
    await repliedMessage.reply({ files: ['./src/images/final.png'], components: [row] })
    await message.delete()

}