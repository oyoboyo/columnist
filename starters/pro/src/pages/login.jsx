import { Page, Column, LogIn } from "src/components";
import config from "columnist.config";

export default function LogInPage() {
  return (
    <>
      <Page>
        <Column style="narrow">
          <LogIn />
        </Column>
      </Page>
    </>
  );
}
