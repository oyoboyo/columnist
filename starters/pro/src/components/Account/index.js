// Core
import Subscription from "../Subscription";
// Local component
import Item from "./Item";

export default function Account() {
  const subscriptions = [
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

  const account = {
    items: [
      {
        label: "Email",
        text: "info@oyoboyo.com",
        button: {
          text: "Change",
        },
      },
      {
        label: "Password",
        text: "********",
        button: {
          text: "Change",
        },
      },

      {
        label: "Connected accounts",
        text: "Google, Apple",
        button: {
          text: "Manage",
        },
      },
    ],
  };

  const current = "free";

  return (
    <>
      <div className="account-profile mb-4">
        <h2>Profile</h2>
        {account.items.map((item, index) => (
          <Item key={index} content={item} />
        ))}
      </div>
      <div className="account-subscription">
        <h2>Subscription</h2>
        <div className="small text-muted">Current</div>

        {
          // Filter current subscription
          subscriptions
            .filter((subscription) => subscription.key === current)
            .map((subscription) => (
              <Subscription
                key={subscription.key}
                content={subscription}
                current={true}
                style="item"
              />
            ))
        }

        <div className="small text-muted">Options</div>
        {
          // Filter other options
          subscriptions
            .filter((subscription) => subscription.key !== current)
            .map((subscription) => (
              <Subscription
                key={subscription.key}
                content={subscription}
                current={false}
                style="item"
              />
            ))
        }
        {
          // Render delete option
          <>
            <div className="mb-2 small">
              No longer interested in the benefits of subscription?
            </div>
            <div class="d-grid gap-2">
              <button className="btn btn-dark">Delete account</button>
            </div>
          </>
        }

        {/* <div className="alert alert-danger">Warning. All account data will be deleted.</div>*/}
      </div>
    </>
  );
}
