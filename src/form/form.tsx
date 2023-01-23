type component = {
  className?: string;
  label?: string;
  placeholder?: string;
  inverted?: boolean;
};

type Props_Forms = {
  user?: component;
  password?: component;
  button?: component;

  title?: string;
  className?: string;
};

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Arrow_Back } from "../back/arrow_back";

export function Form(props: Props_Forms) {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmal] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="all_page">
      <Arrow_Back />

      <form className={`grid-form ${props.className}`}>
        <h1>{props.title || "Login"}</h1>

        {props.user?.label ? (
          props.user.inverted ? (
            <div className={`grid-input ${props.user?.className}`}>
              <input
                className={`${props.user?.className}  ${
                  email ? "input_filled" : ""
                }`}
                type="text"
                onChange={(e) => setEmal(e.target.value)}
                placeholder={props.user.placeholder}
              />
              <label htmlFor="">{props.user.label}</label>
            </div>
          ) : (
            <div className={`grid-input ${props.user?.className}`}>
              <label htmlFor="">{props.user.label}</label>
              <input
                className={`${props.user?.className}  ${
                  email ? "input_filled" : ""
                }`}
                type="text"
                onChange={(e) => setEmal(e.target.value)}
                placeholder={props.user.placeholder}
              />
            </div>
          )
        ) : (
          <input
            className={`${props.user?.className}  ${
              email ? "input_filled" : ""
            }`}
            onChange={(e) => setEmal(e.target.value)}
            type="text"
            placeholder={props.user?.placeholder}
          />
        )}

        {props.password?.label ? (
          props.password.inverted ? (
            <div className={`grid-input ${props.password?.className}`}>
              <input
                className={`${props.password?.className}  ${
                  password ? "input_filled" : ""
                }`}
                type={showPassword ? "text" : "password"}
                placeholder={props.password.placeholder}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="">{props.password.label}</label>
            </div>
          ) : (
            <div className={`grid-input ${props.password?.className}`}>
              <label htmlFor="">{props.password.label}</label>
              <input
                className={`${props.password?.className}  ${
                  password ? "input_filled" : ""
                }`}
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={props.password.placeholder}
              />
            </div>
          )
        ) : (
          <input
            className={`${props.password?.className}  ${
              password ? "input_filled" : ""
            }`}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder={props.password?.placeholder}
          />
        )}

        {showPassword ? (
          <AiFillEyeInvisible
            className="pass_icon"
            size={20}
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <AiFillEye
            className="pass_icon"
            size={20}
            onClick={() => setShowPassword(!showPassword)}
          />
        )}

        <button className={props.button?.className}>
          <span>Acessar</span>
        </button>
      </form>
    </div>
  );
}
