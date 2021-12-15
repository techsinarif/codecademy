import React, { useEffect, useState, } from "react";
import { useDispatch, useSelector } from 'react-redux';
import registerUser from '../../redux/actions/user';
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import PhoneInput from 'react-phone-input-international'
import 'react-phone-input-international/lib/style.css'
import "./Login.css";

const Signup = props => {
  const { setAccountRegister, switchLoginRegister } = props;
  const [countries, setCountries] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [phoneNumber, setPhoneNumber] = useState()
  const dispatch = useDispatch();
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
    dispatch(registerUser(data));
    setShowMessage(true);

    reset();
  };

  const getFormErrorMessage = name => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };

  const dialogFooter = (
    <div className="p-d-flex p-jc-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="p-mt-2">Suggestions</p>
      <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <div className="login-form">
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Registration Successful!</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Your account is registered under name <b>{formData.name}</b> ; it'll
            be valid next 30 days without activation. Please check{" "}
            <b>{formData.email}</b> for activation instructions.
          </p>
        </div>
      </Dialog>

      <div className="p-d-flex p-jc-center">
        <div className="card">
          <h2 className="p-text-center">Create an Account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <div className="p-field">
              <span className="p-float-label">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required." }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      {...field}
                      autoFocus
                      className={classNames({
                        "p-invalid": fieldState.invalid
                      })}
                    />
                  )}
                />
                <label
                  htmlFor="name"
                  className={classNames({ "p-error": errors.name })}
                >
                  Name*
                </label>
              </span>
              {getFormErrorMessage("name")}
            </div>
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
              <span className="p-float-label p-input-icon-right">
                {/* <i className="pi pi-envelope" /> */}
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "Mobile Number is required.",
                    pattern: {
                      value: /^(\+\d{1,3}[- ]?)?\d{10}$/i,
                      message: "Invalid mobile number"
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
                    // <PhoneInput id={field.name} className={classNames({ "p-invalid": fieldState.invalid })} country={'us'} value={phoneNumber} onChange={phone => setPhoneNumber(phone)}/>
                  )}
                />
                <label
                  htmlFor="phone"
                  className={classNames({ "p-error": !!errors.phone })}
                >
                  Mobile Number*
                </label>
              </span>
              {getFormErrorMessage("phone")}
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
                      toggleMask
                      className={classNames({
                        "p-invalid": fieldState.invalid
                      })}
                      header={passwordHeader}
                      footer={passwordFooter}
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
            <div className="p-field">
              <span className="p-float-label">
                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{ required: "Confirm Password is required." }}
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
                  htmlFor="confirmPassword"
                  className={classNames({ "p-error": errors.confirmPassword })}
                >
                  Confirm Password*
                </label>
              </span>
              {getFormErrorMessage("confirmPassword")}
            </div>
            <div className="p-field-checkbox">
              <Controller
                name="accept"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                  <Checkbox
                    inputId={field.name}
                    onChange={e => field.onChange(e.checked)}
                    checked={field.value}
                    className={classNames({ "p-invalid": fieldState.invalid })}
                  />
                )}
              />
              <label
                htmlFor="accept"
                className={classNames({
                  "p-error": errors.accept,
                  "terms-accept": true
                })}
              >
                I agree to the terms and conditions*
              </label>
            </div>

            <Button
              type="submit"
              label="Submit"
              className="p-mt-2 submit-btn"
            />
            <label>Already have an Account? </label>
            <a
              href="#"
              onClick={() => {
                switchLoginRegister("login");
              }}
            >
              Log in
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
