import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { classNames } from "primereact/utils";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = props => {
  const { switchLoginRegister } = props;
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    date: null,
    country: null,
    accept: false
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({ defaultValues });

  const onSubmit = data => {
    setFormData(data);
    // setShowMessage(true);
    // TODO: After successful login navigate user to overview page
    history.push("/overview");
    reset();
  };

  const getFormErrorMessage = name => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };

  const registerAccount = () => {
    console.log("account registered");
  };

  return (
    <div className="login-form">
      <div className="p-d-flex p-jc-center">
        <div className="card">
          <h2 className="p-text-center">Login to your account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <div className="p-field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address. E.g. example@email.com"
                    }
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      className={classNames({
                        "p-invalid": fieldState.invalid
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="email"
                  className={classNames({ "p-error": !!errors.email })}
                >
                  Email*
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
            <div className="p-field">
              <span className="p-float-label">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Password is required." }}
                  render={({ field, fieldState }) => (
                    <Password
                      id={field.name}
                      {...field}
                      className={classNames({
                        "p-invalid": fieldState.invalid
                      })}
                      feedback={false}
                    />
                  )}
                />
                <label
                  htmlFor="password"
                  className={classNames({ "p-error": errors.password })}
                >
                  Password*
                </label>
              </span>
              {getFormErrorMessage("password")}
            </div>
            <div className="forgot-pass">
              <label>Forget password?</label>
            </div>
            <Button type="submit" label="Login" className="submit-btn p-mt-2" />
            <div className="not-registered">
              <label>Not registered yet? </label>
              <a
                href="#"
                onClick={() => {
                  switchLoginRegister("signup");
                }}
              >
                Create an Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
