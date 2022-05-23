// Components
import { Page, Column, Article, LogIn, Account } from "src/components";
// Config
import config from "columnist.config";

export default function AccountPage() {
  // User placeholder
  const user = true;

  return (
    <Page header="bar">
      {user ? (
        // Account page
        <Column style="default">
          <Article
            content={{
              title: "Account",
              summary: "You've been a subscriber since 2020",
            }}
          />
          <Account />
        </Column>
      ) : config.logIn ? (
        // Login page
        <Column style="default">
          <Article content={config.logIn} />
          <LogIn />
        </Column>
      ) : null}
    </Page>
  );
}
