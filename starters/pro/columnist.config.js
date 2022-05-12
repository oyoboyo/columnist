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

const gate = {
  heading: "Thank you for reading " + brand.name,
  lead: "Create your free account or log in to continue reading this article.",
};

const logIn = {
  lead: "Log in to enjoy more free articles from " + brand.name,
  disclaimer: (
    <div>
      By continuing, you agree to the <a href="/terms">Terms of Service</a> and
      acknowledge our <a href="/privacy">Privacy Policy.</a>
    </div>
  ),
};

export default {
  head,
  brand,
  header,
  home,
  gate,
  logIn,
  all,
  article,
  footer,
};
