import { BsFillPersonFill } from "react-icons/bs";

export const header = {
  logo: true,
  name: true,
  tagline: true,
  cta: {
    button: "Subscribe",
    url: "/subscribe",
  },
  logIn: {
    button: <BsFillPersonFill />,
    url: "/account",
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

export default header;
