import { Link } from "react-router-dom";

type Props_Cards = {
    src: string,
    title: string,
    to: string,
}

export function Cards(props : Props_Cards) {
  return (
    <Link to={props.to} className="card">
      <div className="image">
        <img src={props.src} alt="Imagem ilustrativa" />
      </div>
      <div className="infos">
        <span>{props.title}</span>
      </div>
    </Link>
  );
}
