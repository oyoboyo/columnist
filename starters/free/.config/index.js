// Import icons
import { BsFillPersonFill } from "react-icons/bs";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

// # Configuration
// Configure site
const site = {
	// Configure details
	name: "Columnist",
	tagline: "The best content from the world of design",
	logo: "/graphics/logo.svg",
	image: "/graphics/default.jpg",
	domain: "www.oyoboyo.com",
	contact: "info@oyoboyo.com",
	GoogleAnalytics: "UA-XXXXX-Y",
	// Configure location
	locale: "en-US",
	dateStringFormat: {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "America/Toronto",
	},
};

// Configure header
const header = {
	// Configure header options
	logo: true,
	name: true,
	tagline: true,
	// Configure header navigation content
	callToAction: {
		button: "Subscribe",
		url: "/subscribe",
	},
	menu: [
		{
			title: "Art",
			url: "/art",
		},
		{
			title: "Mind",
			url: "/mind",
		},
		{
			title: "Work",
			url: "/work",
		},
		{
			title: "About",
			url: "/about",
		},
	],
};

// Configure footer
const footer = {
	// Configure social menu
	social: [
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/company/example",
			Icon: FiLinkedin,
		},
		{
			name: "Instagram",
			url: "https://www.instagram.com/example",
			Icon: FiInstagram,
		},
		{
			name: "Github",
			url: "https://www.github.com",
			Icon: FiGithub,
		},
	],
	// Configure menu
	menu: [
		{
			title: "Privacy",
			url: "/privacy",
		},
	],
};

export { site, header, footer };
