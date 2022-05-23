import { Page, Article, Column, Subscription } from "src/components";
import config from "columnist.config";

export default function SubscribePage() {
  return (
    <Page>
      {
        // Page content
        <Column style="default">
          <Article content={config.subscribe} style="detail" />
        </Column>
      }
      {
        // Subscriptions
        config.subscriptions.map((subscription, index) => (
          <Column key={index} style="half">
            <Subscription style="card" content={subscription} />
          </Column>
        ))
      }
      {
        // Disclaimer
        <Column style="default">{config.subscribe.disclaimer}</Column>
      }
    </Page>
  );
}
