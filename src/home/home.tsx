import "../styles/home.scss";
import { Cards } from "./cards";

export function Home() {
  const Cards_Infos = [
    {
      // src: "/src/assets/Purple_login.png",
      src: "./src/assets/Purple_login.png",
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
