const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder().setName("clear").setDescription("Delete 1–100 recent messages.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addIntegerOption(o => o.setName("amount").setDescription("Number of messages").setMinValue(1).setMaxValue(100).setRequired(true)),
  async execute(interaction) {
    if (!interaction.memberPermissions.has(PermissionFlagsBits.ManageMessages))
      return interaction.reply({ content: "You need Manage Messages permission.", ephemeral: true });
    const amount = interaction.options.getInteger("amount");
    const deleted = await interaction.channel.bulkDelete(amount, true);
    await interaction.reply({ content: `Deleted **${deleted.size}** messages.`, ephemeral: true });
  }
};
