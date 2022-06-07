import brand from "./brand";
export const subscribe = {
  title: "Subscribe today",
  summary:
    "Gain unlimited access to all the best " + brand.name + " content.",
  disclaimer: (
    <div>
      By continuing, you agree to the{" "}
      <a href="/privacy">Privacy Policy.</a>
    </div>
  ),
};
export default subscribe;
