const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder().setName("help").setDescription("Show FURIX 2.0 commands."),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0xE53935)
      .setTitle("🔥 FURIX 2.0 — Command List")
      .setDescription("Your server companion.")
      .addFields(
        { name: "General", value: "`/help` — Show commands\n`/ping` — Check bot latency\n`/server` — Server information\n`/user` — User information" },
        { name: "Moderation", value: "`/clear` — Delete recent messages\n`/kick` — Kick a member\n`/ban` — Ban a member\n`/timeout` — Timeout a member" }
      )
      .setFooter({ text: "FURIX 2.0 • Built for your community" });
    await interaction.reply({ embeds: [embed], ephemeral: true });
  }
};