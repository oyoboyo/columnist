import { Page, Column, LogIn } from "src/components";
import config from "columnist.config";

export default function LogInPage() {
  return (
    <>
      <Page>
        <Column style="narrow">
          <h1>{config.logIn.title}</h1>
          <LogIn lead={config.logIn.lead} />
        </Column>
      </Page>
    </>
  );
}
