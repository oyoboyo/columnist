import brand from "./brand";

export const logIn = {
  title: "Log in",
  summary: "Log in to enjoy more free articles from " + brand.name,
  disclaimer: (
    <div>
      <span>By continuing, you agree to the </span>
      <a href="/privacy"> Privacy Policy.</a>
    </div>
  ),
};
export default logIn;
