// Core
import { useConfig } from "@columnist/core";
import Subscription from "../Subscription";
// Local component
import Item from "./Item";

export default function Account() {
  const config = useConfig();

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
          config.subscriptions
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
          config.subscriptions
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
        <div className="mb-2 small">{config.del.text}</div>
        <div class="d-grid gap-2">
          <button className="btn btn-dark">{config.del.button}</button>
        </div>
        {/* <div className="alert alert-danger">{config.del.disclaimer}</div>*/}
      </div>
    </>
  );
}
