import "../styles/home.scss";
import { Cards } from "./cards";

export function Home() {
  const urlBase = window.location.href.indexOf('localhost') != -1 ? './src/assets/' : 'https://github.com/GgvGomes/login_forms/blob/master/src/assets/';

  const Cards_Infos = [
    {
      // src: "https://github.com/GgvGomes/login_forms/src/assets/Purple_login.png",
      src: window.location.href.indexOf('localhost') != -1 ? `${urlBase}Purple_login.png` : `${urlBase}Purple_login.png?raw=true`,
      title: "Purple Form",
      to: "/purple",
    },
  ];

  return (
    <div className="all_home">
      <div className="grid-title">
        <h1>Home</h1>
        <h2>Logins Forms</h2>
      </div>

      <div className="grid-cards">
        {Cards_Infos.map((cards) => [
          <Cards title={cards.title} to={cards.to} src={cards.src} />,
        ])}
      </div>
    </div>
  );
}
