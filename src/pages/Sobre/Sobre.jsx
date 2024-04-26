import Header from '../../components/Header/Header'
import * as S from "./styled"
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import styled from "../../assets/styled.png";


export default function Sobre() {
  return (
    <S.Main>
      <Header/>

      <S.BoxSobre>

<S.Texto>

  <h2>Sobre mim</h2>
         
<p>Olá, meu nome é <span className='name'>Ingrid Moitinho</span>, sou graduanda em ADS, atualmente estou me dedicando integralmente ao aprendizado, participando de cursos no <span className='name2'> Vai na Web</span> e <span className='name3'>Descodificadas</span> para me aprimorar como desenvolvedora front-end.
Estou aprimorando minhas habilidades em JS e em ReactJS, com o objetivo de me especializar em Fron-end, até o momento me identifico mais com front-end, mas pretendo explorar os horizontes do back-end também.
Sou nutricionista por formação e, por muito tempo, não imaginava um futuro trabalhando na área da tecnologia! No entanto, bastou eu dar uma chance aos cursos para que me apaixonasse pela área. </p>

</S.Texto>

      <S.Habilidades>

  <h2>Habilidades</h2>
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src= {js} alt="" />
        <img src={react} alt="" />
        <img src={styled} alt="" />
      </S.Habilidades>

</S.BoxSobre>
      
    </S.Main>
  )
}

