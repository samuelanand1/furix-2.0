const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder().setName("server").setDescription("Show this server's information."),
  async execute(interaction) {
    const g = interaction.guild;
    const embed = new EmbedBuilder().setColor(0xE53935).setTitle(g.name)
      .setThumbnail(g.iconURL({ size: 256 }))
      .addFields(
        { name: "Members", value: `${g.memberCount}`, inline: true },
        { name: "Created", value: `<t:${Math.floor(g.createdTimestamp / 1000)}:D>`, inline: true },
        { name: "Server ID", value: g.id }
      );
    await interaction.reply({ embeds: [embed] });
  }
};