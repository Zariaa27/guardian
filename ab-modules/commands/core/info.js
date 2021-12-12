/*
 * Attention!
 * Avant de modifier ce fichier, merci de lire cette notice:
 * https://github.com/Artivain/artibot#licence
*/

const { MessageEmbed } = require("discord.js");
const contributors = require("../../../contributors.json");

module.exports = {
	name: "info",
	description: "Donne plein d'informations sur le bot.",
	aliases: ["infos", "about"],
	cooldown: 5,

	execute(message, args, config) {

		var devs = "", donators = "";
		contributors.devs.forEach(dev => {
			if (dev.discordTag) {
				devs += `[${dev.name}](${dev.github}) (${dev.discordTag})\n`;
			} else {
				devs += `[${dev.name}](${dev.github})\n`;
			}
		});
		contributors.donators.forEach(donator => {
			if (donator.discordTag) {
				donators += `[${donator.name}](${donator.github}) (${donator.discordTag})\n`;
			} else {
				donators += `[${donator.name}](${donator.github})\n`;
			}
		});

		if (config.botName == "Artibot" || config.botName == "Artibot [dev]") {
			var description = "Artibot est un bot Discord moderne open-source maintenu par Artivain et la communauté.\n" +
				"[GitHub](https://github.com/Artivain/artibot)"
		} else {
			var description = config.botName + " est basé sur Artibot, un bot Discord moderne open-source maintenu par Artivain et la communauté.\n" +
				"[GitHub](https://github.com/Artivain/artibot)"
		}

		let embed = new MessageEmbed()
			.setColor(config.embedColor)
			.setFooter(config.botName, config.botIcon)
			.setTimestamp()
			.setTitle("À propos de " + config.botName)
			.setDescription(description)
			.addField("Version", process.env.npm_package_version)
			.addField("Développeurs", devs, true)
			.addField("Donateurs", donators, true);

		message.channel.send({
			embeds: [embed]
		});
	},
};