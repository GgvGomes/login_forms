import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export function Arrow_Back() {
  return (
    <Link to={"/"} className="Arrow_Back">
      <AiOutlineArrowLeft size={28} />
    </Link>
  );
}
