import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
:root{
font-size: 62.5%;

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
} 

body{
background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
font-family: "Roboto Slab", sans-serif;
color: ${({ theme }) => theme.COLORS.WHITE}; ;


}

 `;

// font-family: "Sedgwick Ave Display", cursive;
