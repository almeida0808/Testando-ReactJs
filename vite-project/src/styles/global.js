import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
:root{
font-size: 62.5%;


}
*{
font-family: "Roboto Slab", sans-serif;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
  
} 

body{
background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
color: ${({ theme }) => theme.COLORS.WHITE}; ;
height: 100vh;

button:hover{
filter: brightness(0.8);
cursor: pointer;
}
}

 `;

// font-family: "Sedgwick Ave Display", cursive;
