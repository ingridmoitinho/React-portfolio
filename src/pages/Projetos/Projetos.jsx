import React from 'react'
import Header from '../../components/Header/Header'
import * as S from "./styled"
import mc from "../../assets/mc.png";
import one from "../../assets/onepiece.png";
import self from "../../assets/self.png";
import ritmo from "../../assets/ritmo.png";
import prime from "../../assets/prime.png";
import papelaria from "../../assets/papelaria.png";
import git from "../../assets/git.png";
import mundo from "../../assets/mundo.png";

export default function Projetos() {
  return (
     <S.Main>
      <Header/>
      <S.BoxProjetos>
      <section id="projects">

          <h2>Projetos - Vai na Web</h2>
                    
                
                <S.BoxCards>
                      <S.Card>
                      <h3>Desafio MCDonald's</h3>
                        <p>Projeto feito com HTML,CSS e React</p>
                        <img className='image-card' src={mc} alt="img-site-mcdonald"/>
                        <S.BoxIcons>
                        <a href="https://github.com/ingridmoitinho/Desafio3-McDonald" target="_blank"> 
                        <img className='icon' src={git} alt="icon-git" /></a>
                        <a href="https://desafio3-mc-donald.vercel.app/" target="_blank"> 
                        <img className='icon' src={mundo} alt="icon-mundo" /></a>
                          </S.BoxIcons>
                    </S.Card>


                    <S.Card>
                    <h3>Desafio React</h3>
                        <p>Criando um projeto simples em React</p>
                        <img className='image-card' src={one} alt="img-site-onepiece"/>
                        <S.BoxIcons>
                        <a href="https://github.com/ingridmoitinho/Desafio2-VnW" target="_blank"> 
                        <img className='icon' src={git} alt="icon-git" /></a>
                        <a href="https://desafio2-green.vercel.app/" target="_blank"> 
                        <img className='icon' src={mundo} alt="icon-mundo" /></a>
                          </S.BoxIcons>
                    </S.Card>

                                       
                      <S.Card>
                      <h3>Desafio 3</h3>
                        <p>Projeto feito com HTML e CSS</p>
                        <img className='image-card' src={self} alt="img-site-selfcare"/>
                        <S.BoxIcons>
                        <a href="https://github.com/ingridmoitinho/DesafioFinal-SelfCare" target="_blank"> 
                        <img className='icon' src={git} alt="icon-git" /></a>
                        <a href="https://ingridmoitinho.github.io/DesafioFinal-SelfCare" target="_blank"> 
                        <img className='icon' src={mundo} alt="icon-mundo" /></a>
                          </S.BoxIcons>
                    </S.Card>

                    <S.Card>
                    <h3>Desafio 2</h3>
                        <p>Projeto feito com HTML e CSS</p>
                        <img className='image-card' src={ritmo} alt="img-site-ritmo"/>
                        <S.BoxIcons>
                        <a href="https://github.com/ingridmoitinho/Desafio3-RitmoDaBatida" target="_blank"> 
                        <img className='icon' src={git} alt="icon-git" /></a>
                        <a href="https://ingridmoitinho.github.io/Desafio3-RitmoDaBatida/" target="_blank"> 
                        <img className='icon' src={mundo} alt="icon-mundo" /></a>
                          </S.BoxIcons>
                    </S.Card>

                    <S.Card>
                    <h3>Desafio 1</h3>
                        <p>Projeto feito com HTML e CSS</p>
                        <img className='image-card' src={prime} alt="img-site-primevideo"/>
                        <S.BoxIcons>
                        <a href="https://github.com/ingridmoitinho/Desafio2-PrimeVideo" target="_blank"> 
                        <img className='icon' src={git} alt="icon-git" /></a>
                        <a href="https://ingridmoitinho.github.io/Desafio2-PrimeVideo/" target="_blank"> 
                        <img className='icon' src={mundo} alt="icon-mundo" /></a>
                          </S.BoxIcons>
                    </S.Card>

                    <S.Card>
                         <h3>Papelaria VnW</h3>
                        <p>Projeto feito com HTML e CSS</p>
                        <img className='image-card' src={papelaria} alt="img-papelaria"/>
                        <S.BoxIcons>
                        <a href="https://github.com/ingridmoitinho/Papelaria" target="_blank"> 
                        <img className='icon' src={git} alt="icon-git" /></a>
                        <a href="https://ingridmoitinho.github.io/Papelaria/" target="_blank"> 
                        <img className='icon' src={mundo} alt="icon-mundo" /></a>
                          </S.BoxIcons>
                    </S.Card>
                                                                          
                    </S.BoxCards>
          
                 </section>        
            </S.BoxProjetos>
    </S.Main>
  )
}
