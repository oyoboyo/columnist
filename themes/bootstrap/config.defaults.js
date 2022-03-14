// .config.date
const date = {
  locale: "en-US",
  string: {
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
    image: {
      width: 640,
      height: 380,
      optimize: true,
    },
  },
  detail: {
    date: date,
    html: true,
    readTime: true,
    image: {
      width: 640,
      height: 380,
      optimize: true,
    },
  },
};

export default {
  article,
};
