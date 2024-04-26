import styled,{createGlobalStyle, css} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
  const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Header = styled.header`
width: 15vw;
background-image: linear-gradient(to right top, #862994, #713896, #5d4195, #4c4790, #3e4b88, #2a4f85, #165280, #075479, #005874, #005b6c, #005d63, #035e58);
opacity: 0.8;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (min-width: 300px) and (max-width: 768px) {
    width: 100%;
    height: 30vh;
}

`

export const BoxLogo = styled.div`
height: 50vh;
width: 100%;

img{
    width: 15vw;
}
@media screen and (min-width: 300px) and (max-width: 768px) {
    flex-direction: row;
    padding-left: 20px;

img {
    width: 4.5rem;
}
}
`
export const BoxMenu = styled.nav`
height: 38vh;
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;

  ul{
      width: 100%;
    }

a{
 color: white;  
 text-decoration: none;
 font-family: "Inknut Antiqua", serif;

 @media screen and (min-width: 300px) and (max-width: 768px) {
  
 display: flex;
 justify-content: space-evenly;
    
 ul{
      width: 100%;
    }
 
 a{
 color: white;  
 text-decoration: none;
}
}
}
`
export const Lista = styled.li`
    list-style: none;
    height: 12.5vh;
    width: 100%;
    ${center}
    
 @media screen and (min-width: 300px) and (max-width: 768px) {
    height: 5vh;
 }
`

export const BoxIcon = styled.div`
width: 100%;
height: 30vh;
${center}
justify-content: space-evenly;
text-align: center;

.icon {
    width: 1.5rem;
}

@media screen and (min-width: 300px) and (max-width: 768px) {
 .icon {
    width: 1rem;
 }
 }

`