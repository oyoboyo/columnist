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
  },
  detail: {
    date: date,
    html: true,
    readTime: true,
  },
};

export default {
  article,
};
