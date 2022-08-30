import { Page, Column, Subscription } from "@columnist/bootstrap";

import { site } from "./config";

export default function SubscribePage() {
  return (
    <Page>
      {
        // Render content
        <Column style="default">
          <Page
            detail
            content={{
              title: "Subscribe today",
              summary:
                "Gain unlimited access to all the best " +
                site.name +
                " content.",
            }}
            style="detail"
          />
        </Column>
      }
      {
        // Render subscriptions
        config.subscriptions.map((subscription, index) => (
          <Column key={index} style="half">
            <Subscription style="card" content={subscription} />
          </Column>
        ))
      }
      {
        // Render disclaimer
        <Column style="default">
          <div>
            <span>By continuing, you agree to the </span>
            <a href="/privacy"> Privacy Policy.</a>
          </div>
        </Column>
      }
    </Page>
  );
}
