const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder().setName("kick").setDescription("Kick a member from this server.")
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .addUserOption(o => o.setName("member").setDescription("Member to kick").setRequired(true))
    .addStringOption(o => o.setName("reason").setDescription("Reason").setRequired(false)),
  async execute(interaction) {
    const target = interaction.options.getMember("member");
    const reason = interaction.options.getString("reason") || `Action by ${interaction.user.tag}`;
    if (!interaction.memberPermissions.has(PermissionFlagsBits.KickMembers))
      return interaction.reply({ content: "You need Kick Members permission.", ephemeral: true });
    if (!target || !target.kickable) return interaction.reply({ content: "I cannot kick that member. Check role hierarchy and my permissions.", ephemeral: true });
    await target.kick(reason);
    await interaction.reply({ content: `Kicked **${target.user.tag}**. Reason: ${reason}` });
  }
};
