import styled from "styled-components";


export const Main = styled.main`
display: flex;
height: 105vh;
background-image: url("https://c.wallhere.com/photos/ab/58/space_galaxy_spiral_galaxy-120183.jpg!d");
background-repeat: no-repeat;
background-size: cover;

@media screen and (min-width: 300px) and (max-width: 768px) {
    flex-direction: column;
}
`
   
export const BoxProjetos = styled.section`
display: flex;
justify-content: center;
width: 100vw;

#projects {
    width: 100%;
    display: flex;
    flex-direction: column;
}

 h2 {
    text-align: center;
    font-size: 35px;
    color: #fff;
    margin-bottom: 0.2rem;
    margin-top: 1.5rem;
    font-family: "Pixelify Sans", sans-serif;
} `

export const BoxCards = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`
export const Card = styled.div`
    margin: 1rem;
    cursor: pointer;
    padding: 1rem;
    background-image: linear-gradient(to right top, #862994, #713896, #5d4195, #4c4790, #3e4b88, #2a4f85, #165280, #075479, #005874, #005b6c, #005d63, #035e58);
    opacity: 0.8;
    border-radius: 0.3rem;
    height: 40vh;

    &:hover{
    transition: 0.5s;
    box-shadow: 0px 10px 15px -3px #000;
    opacity: 1;
    border: 1px solid var(--color-theme);
}
    h3 {
    font-size: 15px;
    color: #fff;
    margin-bottom: 0;
    text-align: center;
    font-family: "Inknut Antiqua", serif;
}

   p {
    font-size: 15px;
    color: #fff;
    text-align: center;
    font-family: "Dosis", sans-serif;

}

 .image-card {
    width: 18rem;
    height: 8rem;
}`


export const BoxIcons = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 2rem;
 
    
 .icon {
     width: 1.5rem;
 
 }

 @media screen and (min-width: 300px) and (max-width: 768px) {
    .icon {
     width: 1rem;
 }
 }
`

