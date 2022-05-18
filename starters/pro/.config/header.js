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
      title: "Art",
      url: "/art",
    },
    {
      title: "Culture",
      url: "/culture",
    },
    {
      title: "Design",
      url: "/design",
    },
    {
      title: "About",
      url: "/about",
    },
  ],
};

export default header;
