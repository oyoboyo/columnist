import brand from ".config/brand";
import head from ".config/head";
import header from ".config/header";
import footer from ".config/footer";
import article from ".config/article";
import home from ".config/home";
import all from ".config/all";

/* 
Use this file to:

- Add your own config 
- or override configuration

*/

import { FiTwitter } from "react-icons/fi";

const authors = {
  sean: {
    name: "Sarah Wong",
    role: "Writer",
    bio: "I've spent the last decade designing, building, and managing brands and products online. As editor and contributor to Becomist I've made it my mission to empower creative entrepreneurs with professional product and brand strategy.",
    email: "sean@becomist.com",
    image: {
      src: "/images/sarah-wong.jpg",
      alt: "photo of Sarah Wong",
    },
    social: [
      {
        name: "Twitter",
        Icon: FiTwitter,
        url: "https://twitter.com/sarahwong$",
      },
    ],
  },
};

const gate = {
  heading: "Thank you for reading " + brand.name,
  lead: "Create your free account or log in to continue reading this article.",
};

const logIn = {
  title: "Log in",
  summary: "Log in to enjoy more free articles from " + brand.name,
  disclaimer: (
    <div>
      By continuing, you agree to the <a href="/terms">Terms of Service</a>{" "}
      and acknowledge our <a href="/privacy">Privacy Policy.</a>
    </div>
  ),
};

const subscribe = {
  title: "Subscribe today",
  summary:
    "Gain unlimited access to all the best " + brand.name + " content.",
  disclaimer: (
    <div>
      By continuing, you agree to the <a href="/terms">Terms of Service</a>{" "}
      and acknowledge our <a href="/privacy">Privacy Policy.</a>
    </div>
  ),
};

const subscriptions = [
  {
    name: "Subscriber",
    description:
      "Subscribe to our free weekly newsletter and get limited access to premium content.",
    button: {
      text: "Subscribe",
      url: "",
    },
    price: 0,
  },
  {
    name: "Premium",
    description:
      "Get all the benefits of subscribing plus unlimited access and subscriber exclusives.",
    url: "",
    button: {
      text: "Buy now",
      url: "",
    },
    price: 4.99,
  },
];

export default {
  head,
  brand,
  header,
  authors,
  home,
  gate,
  logIn,
  subscribe,
  subscriptions,
  all,
  article,
  footer,
};
