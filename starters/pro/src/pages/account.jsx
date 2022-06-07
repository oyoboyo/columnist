// Components
import { Page, Column, LogIn, Account } from "@columnist/bootstrap";
// Config
import config from ".config";

export default function AccountPage() {
  // User placeholder
  const user = false;

  return (
    <Page header="bar">
      {
        // Display user account if logged in
        user ? (
          <Column style="default">
            <h1>{config.account.title}</h1>
            <p>{config.account.summary}</p>
            <Account />
          </Column>
        ) : (
          // Display log in if not
          <Column style="default">
            <h1>{config.logIn.title}</h1>
            <p>{config.logIn.summary}</p>
            <LogIn />
          </Column>
        )
      }
    </Page>
  );
}
