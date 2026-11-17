const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder().setName("timeout").setDescription("Timeout a member for up to 28 days.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(o => o.setName("member").setDescription("Member to timeout").setRequired(true))
    .addIntegerOption(o => o.setName("minutes").setDescription("Duration in minutes (1–40320)").setMinValue(1).setMaxValue(40320).setRequired(true))
    .addStringOption(o => o.setName("reason").setDescription("Reason").setRequired(false)),
  async execute(interaction) {
    const target = interaction.options.getMember("member");
    const minutes = interaction.options.getInteger("minutes");
    const reason = interaction.options.getString("reason") || `Action by ${interaction.user.tag}`;
    if (!interaction.memberPermissions.has(PermissionFlagsBits.ModerateMembers))
      return interaction.reply({ content: "You need Moderate Members permission.", ephemeral: true });
    if (!target || !target.moderatable) return interaction.reply({ content: "I cannot timeout that member. Check role hierarchy and my permissions.", ephemeral: true });
    await target.timeout(minutes * 60 * 1000, reason);
    await interaction.reply({ content: `Timed out **${target.user.tag}** for **${minutes} minutes**. Reason: ${reason}` });
  }
};