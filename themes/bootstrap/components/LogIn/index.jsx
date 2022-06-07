import { useConfig } from "@columnist/core";

export default function LogInForm() {
  const config = useConfig();
  return (
    <div className="d-grid gap-2">
      <div>
        <label
          htmlFor="formGroupExampleInput"
          className="form-label small"
        >
          Log in using email
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Email address"
        />
      </div>
      <button class="btn btn-dark" type="button">
        Continue with email
      </button>
      <hr className="mt-2 mb-2" />
      <button className="btn btn-outline-dark" type="button">
        Continue with Facebook
      </button>
      <button className="btn btn-outline-dark" type="button">
        Continue with Google
      </button>
      <hr className="mt-2 mb-2" />
      <small>{config.logIn.disclaimer}</small>
    </div>
  );
}
