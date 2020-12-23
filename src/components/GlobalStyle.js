import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

h2,
h4 {
  color: rgb(43, 44, 44);
}


`;

export default GlobalStyle;
