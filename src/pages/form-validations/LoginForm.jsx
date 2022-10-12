import React from "react";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  return (
    <>
      <form
        className="login__Form-Box"
        action="#"
        method="POST"
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="login__Form-Input">
          <div>
            <label htmlFor="email-address" className="login__Form-Input--Label">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="login__Form-Input--Email"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="login__Form-Input--Label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="login__Form-Input--Password"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="login__Checkbox-Container">
          <div className="login__Checkbox-Container--Box">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="login__Checkbox-Container--InputBox"
            />
            <label
              htmlFor="remember-me"
              className="login__Checkbox-Container--Label"
            >
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group login__Button--Container-Btn"
          >
            <span className="login__Button--Container-BtnSpan"></span>
            Sign in
          </button>
        </div>

        <div className="login__Divider--Box">
          <p className="login__Divider--Text">Or</p>
        </div>

        <div>
          <button
            type="submit"
            className="group login__Social--Btn"
          >
            <span className="login__Social--Span">
              <FaGoogle
                className="login__Social--Span-Icon"
                aria-hidden="true"
              />
            </span>
            Sign in with Google
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
