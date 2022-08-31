// Import components
import { Column, LogIn, Account } from "../components";
// Import config
import { site } from ".config";

// # Account page
export default function AccountPage() {
  // Get user (to do)
  const user = true;
  // Render account page
  return (
    <>
      {
        // If user, render user account
        user ? (
          <Column style="default">
            <h1>Account</h1>
            <p>Manage your account details and subscription</p>
            <Account />
          </Column>
        ) : (
          // If no user, render Login
          <Column style="default">
            <h1>Log in</h1>
            <p>Log in to enjoy more free articles from {site.name}</p>
            <LogIn />
          </Column>
        )
      }
    </>
  );
}

export async function getStaticProps() {
  // Return static props
  return {
    props: {
      // Include meta
      meta: {
        title: "Account & Login",
        description:
          "Enjoy free articles & more with your " +
          site.name +
          " account.",
      },
    },
  };
}
