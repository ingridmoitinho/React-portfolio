import { Link } from "react-router-dom";
import * as S from "./styled";
import linkedin from "../../assets/link.png";
import git from "../../assets/git.png";
import face from "../../assets/face.png";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <S.Header>
      <S.BoxLogo>
      <img src={logo} alt="logo-menina" />
      
     
      </S.BoxLogo>
      <S.BoxMenu>
        <ul>
          <S.Lista>
            <Link to="/">Inicio</Link>
          </S.Lista>
          <S.Lista>
            <Link to="/sobre">Sobre</Link>
          </S.Lista>
          <S.Lista>
            <Link to="/projetos">Projetos</Link>
          </S.Lista>
        </ul>
      </S.BoxMenu>
      <S.BoxIcon>
        <a href="https://www.linkedin.com/in/ingridmoitinho/"target="_blank">
          <img className="icon" src={linkedin} alt="icon-linkedin" />
        </a>
        <a href="https://github.com/ingridmoitinho" target="_blank">
          <img className="icon" src={git} alt="icon-git" />
        </a>
        <a href="https://www.facebook.com/ingrid.moitinho/"target="_blank">
          <img className="icon" src={face} alt="icon-facebook" />
        </a>
      </S.BoxIcon>
    </S.Header>
  );
}