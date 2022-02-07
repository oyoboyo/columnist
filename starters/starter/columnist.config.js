// config.brand
export const brand = {
  name: "Columnist",
  tagline: "The best content from the world of design",
  logo: "/graphics/logo.svg",
  domain: "www.oyoboyo.com",
  contact: "info@oyoboyo.com",
};

// config.head
export const head = {
  GoogleAnalytics: "UA-XXXXX-Y",
};

// config.header
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

// .config.date
const date = {
  locale: "en-US",
  options: {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
};

// config.collections
import { Article } from "src/components";

// Default collection options
export const collection = {
  teaser: {
    date: date,
    limit: 120,
  },
  detail: {
    date: false,
    html: true,
  },
};

export const collections = {
  articles: {
    component: Article,
    teaser: {
      date: date,
      limit: 120,
      readTime: true,
    },
    detail: {
      date: date,
      html: true,
      readTime: true,
    },
  },
};

// .config/column
export const column = {
  limit: null,
  order: "",
};

// .config/home
export const home = {
  limit: 120,
  collections: collections,
  column: column,
};

// config.footer
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

export default {
  brand,
  head,
  header,
  date,
  collections,
  column,
  home,
  footer,
};
