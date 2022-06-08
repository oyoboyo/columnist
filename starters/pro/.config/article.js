import date from "./date";

// config.article

export const teaser = {
  date: date,
  limit: 220,
  readTime: true,
  image: {
    width: 960,
    height: 640,
    optimize: true,
  },
};

export const detail = {
  date: date,
  html: true,
  readTime: true,
  image: {
    width: 960,
    height: 640,
    optimize: true,
  },
};
