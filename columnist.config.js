export const brand = {
  name: "Columnist",
  tagline: "The best content from the world of design",
  logo: "/graphics/logo.svg",
  domain: "www.oyoboyo.com",
  contact: "info@oyoboyo.com",
};

export const head = {
  GoogleAnalytics: "UA-XXXXX-Y",
};

export const header = {
  options: {
    logo: true,
    name: true,
    tagline: true,
    cta: true,
  },
  cta: {
    button: "Subscribe",
    url: "/subscribe",
  },
  menu: [
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Articles",
      url: "/articles",
    },
  ],
};

import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

export const footer = {
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
  menu: [
    {
      title: "Privacy",
      url: "/privacy",
    },
  ],
};

export const home = {
  limit: 10,
};
