// Components
import { Page, Column, Article, LogIn } from "src/components";
// Config
import config from "columnist.config";

export default function AccountPage() {
  // User placeholder
  const user = false;

  return (
    <Page header="bar">
      {user ? (
        // Account page
        <div>Account page placeholder</div>
      ) : (
        <Column style="narrow">
          {
            // Login page
            config.logIn ? <Article content={config.logIn} /> : null
          }
          <LogIn />
        </Column>
      )}
    </Page>
  );
}
