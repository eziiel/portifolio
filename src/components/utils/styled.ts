import styled, { css } from "styled-components";

interface Props {
  status?:boolean
}

const Container = styled.div<Props>`
  background: blue;
  width: 20%;
  animation: .5s ease-in-out;
  
  
  
  ${props => props.status && css`
    animation: .5s ease-in-out;
    background: black;
    width: 70%;
    /* flex: 0; */
  `}

`

export {
  Container,

}