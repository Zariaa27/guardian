module.exports = {
	async execute(interaction) {
		await interaction.reply({
			content: "Il y a eu une erreur avec ce bouton!",
			ephemeral: true,
		});
		return
	}
};
