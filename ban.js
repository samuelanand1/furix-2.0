const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder().setName("ban").setDescription("Ban a member from this server.")
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(o => o.setName("member").setDescription("Member to ban").setRequired(true))
    .addStringOption(o => o.setName("reason").setDescription("Reason").setRequired(false)),
  async execute(interaction) {
    const target = interaction.options.getMember("member");
    const user = interaction.options.getUser("member");
    const reason = interaction.options.getString("reason") || `Action by ${interaction.user.tag}`;
    if (!interaction.memberPermissions.has(PermissionFlagsBits.BanMembers))
      return interaction.reply({ content: "You need Ban Members permission.", ephemeral: true });
    if (target && !target.bannable) return interaction.reply({ content: "I cannot ban that member. Check role hierarchy and my permissions.", ephemeral: true });
    await interaction.guild.members.ban(user.id, { reason });
    await interaction.reply({ content: `Banned **${user.tag}**. Reason: ${reason}` });
  }
};