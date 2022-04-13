// config.brand
export const brand = {
  name: "Columnist",
  tagline: "The best content from the world of design",
  logo: "/graphics/logo.svg",
  image: "/graphics/default.jpg",
  domain: "www.oyoboyo.com",
  contact: "info@oyoboyo.com",
};

// config.head
export const head = {
  GoogleAnalytics: "UA-XXXXX-Y",
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

// .config/collection.js
const date = {
  locale: "en-US",
  string: {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Toronto",
  },
};

// config.article
export const article = {
  teaser: {
    date: date,
    limit: 220,
    readTime: true,
    image: {
      width: 960,
      height: 640,
      optimize: true,
    },
  },
  detail: {
    date: date,
    html: true,
    readTime: true,
    image: {
      width: 960,
      height: 640,
      optimize: true,
    },
  },
};

// config.all
const sortByDate = (array) => {
  return array.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
};

// Natural sorting
const sortByOrder = (array) => {
  return array.sort((a, b) => {
    return a.slug.localeCompare(b.slug, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });
};

// Filter articles
const filterArticles = (array) => {
  return array.filter((item) => item.type === "article");
};

// Filter published
const filterDrafts = (array) => {
  return array.filter((item) => !item.draft);
};

// Pages
// config.home
export const home = {
  limit: 10,
  sorts: [sortByDate],
  filters: [filterArticles, filterDrafts],
};

export const all = {
  limit: 10,
  sorts: [sortByDate],
  filters: [filterArticles, filterDrafts],
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
