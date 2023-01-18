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

export function Form(props: Props_Forms) {
  return (
    <div className="all_page">
      <form className={`grid-form ${props.className}`}>
        <h1>{props.title || "Login"}</h1>

        {props.user?.label ? (
          props.user.inverted ? (
            <div className={`grid-input ${props.user?.className}`}>
              <input type="text" placeholder={props.user.placeholder} />
              <label htmlFor="">{props.user.label}</label>
            </div>
          ) : (
            <div className={`grid-input ${props.user?.className}`}>
              <label htmlFor="">{props.user.label}</label>
              <input type="text" placeholder={props.user.placeholder} />
            </div>
          )
        ) : (
          <input className={props.user?.className} type="text" />
        )}

        {props.password?.label ? (
          props.password.inverted ? (
            <div className={`grid-input ${props.password?.className}`}>
              <input type="text" placeholder={props.password.placeholder} />
              <label htmlFor="">{props.password.label}</label>
            </div>
          ) : (
            <div className={`grid-input ${props.password?.className}`}>
              <label htmlFor="">{props.password.label}</label>
              <input type="text" placeholder={props.password.placeholder} />
            </div>
          )
        ) : (
          <input type="password" className={props.password?.className} />
        )}

        <button className={props.button?.className}>
          <span>Acessar</span>
        </button>
      </form>
    </div>
  );
}
