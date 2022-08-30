// Import components
import { Column, LogIn, Account } from "../components";
// Import config
import { site } from ".config";

// Declare strings
const logIn = {
  title: "Log In",
  text: "Log in to enjoy more free articles from " + site.name,
};

export default function AccountPage() {
  // User placeholder
  const user = false;

  return (
    <>
      {
        // Render user account
        user ? (
          <Column style="default">
            <h1>Account</h1>
            <Account />
          </Column>
        ) : (
          // Render Login
          <Column style="default">
            <h1>Log in</h1>
            <p>{logIn.text}</p>
            <LogIn />
          </Column>
        )
      }
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: logIn.title,
        description: logIn.text,
      },
    },
  };
}
