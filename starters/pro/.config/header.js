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
    url: "/login",
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

export default header;
