import styled, { css } from "styled-components";


const center = css`
display: flex;
justify-content: center;
align-items: center;
`

export const Main = styled.main`
background-image: url("https://c.wallhere.com/photos/ab/58/space_galaxy_spiral_galaxy-120183.jpg!d");
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
display: flex;


@media screen and (min-width: 300px) and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
}
`
export const Container = styled.section`
width: 100%;
${center}
margin: 2rem;

.image-inicio {
   width: 20vw;
}
`
export const BoxInicio = styled.section`
    text-align: center;
     width: 50vw;

span {
    color: #a0d4e0;
    font-size: 2rem; 
    font-family: "Pixelify Sans", sans-serif;
}

h2 {
    color: #ffffff;
    font-size: 2rem; 
    margin-top: 2rem;
    font-family: "Inknut Antiqua", serif;
}

h3 {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 1rem;
    font-family: "Inknut Antiqua", serif;
}

.icons {
    margin: 1rem;
    width: 3rem;
}

p {
    font-size: 1.5rem;
    margin: 2rem;
    color: #ffffff;
    text-shadow: black 0.1em 0.1em 0.2em;
    font-family: "Dosis", sans-serif;
}


@media screen and (min-width: 300px) and (max-width: 768px) {

    h2 {
    font-size: 1rem; 
    margin-top: 2rem;
}

h3 {
    color: #ffffff;
    font-size: 1rem;
    margin: 1rem;
}

.icons {
    width: 1rem;
}
p {
    font-size: 1rem;
}
}
`


