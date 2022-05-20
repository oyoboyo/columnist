import { useConfig } from "@columnist/core";
import LogInForm from "../../LogIn";

export default function Gate() {
  const config = useConfig();
  return config.gate ? (
    <div className="article-gate pt-3">
      <div className="fixed-bottom border-top bg-white container-fluid pt-4 pb-3 shadow-lg">
        <div className="row justify-content-center">
          <div class="col-md-7 col-lg-6">
            {
              // Gate heading
              config.gate.heading ? (
                <h2 className="gate-heading h3">{config.gate.heading}</h2>
              ) : null
            }
            <div className="d-grid gap-2">
              {
                // Gate lead
                config.gate.lead ? (
                  <p className="gate-lead lead mb-0">{config.gate.lead}</p>
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
