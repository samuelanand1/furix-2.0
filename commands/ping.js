const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Check FURIX 2.0 response time."),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0xE53935)
      .setTitle("FURIX 2.0")
      .setDescription(`Pong! 🏓\nBot latency: **${interaction.client.ws.ping}ms**`)
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
