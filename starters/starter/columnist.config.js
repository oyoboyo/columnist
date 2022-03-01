// config.head
export const head = {
  GoogleAnalytics: "UA-XXXXX-Y",
};

// config.brand
export const brand = {
  name: "Columnist",
  tagline: "The best content from the world of design",
  logo: "/graphics/logo.svg",
  domain: "www.oyoboyo.com",
  contact: "info@oyoboyo.com",
};

// config.header
export const header = {
  logo: true,
  name: true,
  tagline: true,
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

// config.article
export const article = {
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
};

// Pages
// config.home
export const home = {
  limit: 10,
  sorts: [
    (array) => {
      array.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      return array;
    },
  ],
  filters: [
    (array) => {
      array.filter((item) => item.type !== "article");
      return array;
    },
  ],
};

// config.all
const sortByDate = (array) => {
  array.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return array;
};

// config.all
const sortByOrder = (array) => {
  array.sort((a, b) => {
    return b.order - new a.order();
  });
  return array;
};

export const all = {
  limit: 10,
  sorts: [sortByDate],
  filters: [
    (array) => {
      array.filter((item) => item.type === "article");
      return array;
    },
  ],
};

// config.

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
  head,
  brand,
  header,
  home,
  all,
  article,
  footer,
};
