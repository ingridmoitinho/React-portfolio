import styled from "styled-components";


export const Main = styled.main`
height: 100vh;
display: flex;
background-image: url("https://c.wallhere.com/photos/ab/58/space_galaxy_spiral_galaxy-120183.jpg!d");
background-repeat: no-repeat;
background-size: cover;

@media screen and (min-width: 300px) and (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}`

export const BoxSobre = styled.section`
  width: 60vw;
  height: 90vh;
  border-radius: 10%;
  margin: 1rem;
  margin-left: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: #ffffff;
  background-image: linear-gradient(to right top, #862994, #713896, #5d4195, #4c4790, #3e4b88, #2a4f85, #165280, #075479, #005874, #005b6c, #005d63, #035e58);
  opacity: 0.9;

  &:hover {
    transition: 0.5s;
    box-shadow: 0px 10px 15px -3px #000;
    border: 1px solid var(--color-theme);
  }

  @media screen and (min-width: 300px) and (max-width: 768px) {
   width: 95%;
   height: 100%;
   margin: 0;
  } 
`

export const Texto = styled.div`
  font-family: "Dosis", sans-serif;
  width: 90%;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

 p {  
  line-height: 2rem;
  font-size: 1.2rem;
}

.name {
  color: #a0d4e0;
  font-size: 1.3rem;
  font-family: "Dosis", sans-serif;
}

.name2 {
  color: #850a7a;
  font-size: 1.3rem;
  font-weight: 800;
}

.name3 {
  color: #f800e3;
  font-size: 1.3rem;
  font-weight: 600;
}

 h2 {
  text-align: center;
  font-family: "Pixelify Sans", sans-serif;
  font-size: 2.5rem;
}
  
@media screen and (min-width: 300px) and (max-width: 768px) {
   width: 90%;
   
 p {
  font-size: 0.7rem;
 }

 h2 {
  font-size: 1.5rem;;
 }
}

`

export const Habilidades = styled.div`
  height: 20vh;
  width: 23vw;
   
h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-family: "Pixelify Sans", sans-serif;
 }

 img {
  width: 3.5rem; 
}

@media screen and (min-width: 300px) and (max-width: 768px) {
   width: 50%;
   height: 5rem;

 h2 {
  font-size: 1.5rem;;
 }

 img {
  width: 2rem;
 }
}


`
