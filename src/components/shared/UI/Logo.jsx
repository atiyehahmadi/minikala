import { useNavigate } from "react-router";
import LogoPersian from "../../../assets/images/LogoPersian.svg";

export const Logo = ({ click, className }) => {
  const navigate = useNavigate();

  return (
    <img
      className={`cursor-pointer ${className}`}
      src={LogoPersian}
      alt="Logo"
      onClick={() => navigate("/")}
    />
  );
};
