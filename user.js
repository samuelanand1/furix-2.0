const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder().setName("user").setDescription("Show a member's information.")
    .addUserOption(o => o.setName("member").setDescription("Member to inspect").setRequired(false)),
  async execute(interaction) {
    const user = interaction.options.getUser("member") || interaction.user;
    const member = await interaction.guild.members.fetch(user.id).catch(() => null);
    const embed = new EmbedBuilder().setColor(0xE53935).setTitle(user.tag)
      .setThumbnail(user.displayAvatarURL({ size: 256 }))
      .addFields(
        { name: "User ID", value: user.id },
        { name: "Account created", value: `<t:${Math.floor(user.createdTimestamp / 1000)}:F>` },
        { name: "Joined server", value: member ? `<t:${Math.floor(member.joinedTimestamp / 1000)}:F>` : "Not a server member" }
      );
    await interaction.reply({ embeds: [embed] });
  }
};