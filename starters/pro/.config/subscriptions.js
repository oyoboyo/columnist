export const subscriptions = [
  {
    name: "Free",
    key: "free",
    description:
      "Receive our free weekly newsletter and limited access to premium content.",
    signUp: {
      text: "Sign Up For Free",
      url: "",
    },
    price: 0,
  },
  {
    name: "Premium",
    key: "premium",
    description:
      "Get the benefits of subscribing plus unlimited access to premium content.",
    purchase: {
      text: "Upgrade To Premium",
      action: "",
    },
    cancel: {
      text: "Cancel",
      action: "",
    },
    price: 4.99,
  },
];

export default subscriptions;
