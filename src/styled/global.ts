import { createGlobalStyle } from "styled-components"


const Global = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,li,a {
  list-style: none;
  text-decoration: none;
}

body{
  height: 100vh;
  background-color: red;
}

#root{
  width: 100%;
  height: 100%;
}

`

export default Global