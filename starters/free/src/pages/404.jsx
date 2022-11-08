// Import components
import { Column } from "@columnist/bootstrap";

// Render 404 page
export default function Custom404() {
  return (
    // Return column with content
    <Column>
      <h1>404: Page Not Found</h1>
      <p>I'm sorry the page you're looking for can't be found</p>
    </Column>
  );
}

export async function getStaticProps() {
  // Return page props
  return {
    props: {
      // Include page meta tags
      meta: {
        title: "404 Page Not Found",
        description:
          "I'm sorry the page you're looking for can't be found",
      },
    },
  };
}
