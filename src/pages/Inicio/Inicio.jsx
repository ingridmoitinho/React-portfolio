import Header from "../../components/Header/Header";
import * as S from "./styled";
import inicio from "../../assets/inicio.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import styled from "../../assets/styled.png";

export default function Inicio() {
  return (
    <S.Main>
      <Header />
      <S.Container>

      <S.BoxInicio>
        
        <span>HELLO, WORLD</span> 
        <h2>Me chamo Ingrid Moitinho</h2> 
        <h3> | ADS | Front-end developer |  </h3>
       
        <div>
        <a href=""> <img className="icons" src={html} alt="icon-html" /></a>
        <a href=""><img className="icons" src={css} alt="icon-css" /></a>
        <a href=""><img className="icons" src={js} alt="icon-js" /></a>
        <a href=""><img className="icons" src={react} alt="icon-react" /></a>
        <a href=""><img className="icons" src={styled} alt="icon-styled-component" /></a>
        </div>

        <p> "Your attitude, not your aptitude, will determine your altitude."</p>
            <p>Zig Ziglar</p>
            
      </S.BoxInicio>

            <div>
              <img className="image-inicio" src={inicio} alt="mulher-notebook" />       
            </div>
       
      </S.Container>
    </S.Main>
  );
} 