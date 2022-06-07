import { useConfig } from "@columnist/core";
import LogInForm from "./LogIn";

export default function Gate() {
  const config = useConfig();

  console;

  return config.gate ? (
    <div className="article-gate pt-3">
      <div
        className={`${
          config.gate.popUp ? "container-fluid fixed-bottom pb-3" : null
        } border-top bg-white pt-4`}
      >
        <div className="row justify-content-center">
          <div
            className={
              config.gate.popUp
                ? "col-md-7 col-lg-6 col-xl-5"
                : "col-md-10"
            }
          >
            {
              // Display gate heading if heading in config
              config.gate.heading ? (
                <h2 className="gate-heading h3">{config.gate.heading}</h2>
              ) : null
            }
            <div className="d-grid gap-2">
              {
                // Gate lead
                config.gate.lead ? (
                  <p className="gate-lead lead text-muted mb-0">
                    {config.gate.lead}
                  </p>
                ) : null
              }
              {
                // Gate log in form
                <LogInForm />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
