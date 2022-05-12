import { useConfig } from "@columnist/core";
import LogInForm from "../../LogIn";

export default function Gate() {
  const config = useConfig();
  return (
    <div className="pt-3">
      <div className="fixed-bottom border-top bg-white container-fluid pt-4 pb-3 shadow-lg">
        <div className="row justify-content-center">
          <div class="col-md-7 col-lg-6">
            <h2 className="h3">{config.gate.heading}</h2>
            <p className="lead text-muted">{config.gate.lead}</p>
            <div className="d-grid gap-2">
              <LogInForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
