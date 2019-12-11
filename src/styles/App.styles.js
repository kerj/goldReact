import styled from 'styled-components';
import backie from '../img/game.jpg'

export const App = styled.div`
  text-align: center;  
`

export const Game = styled.div`
  background: url(${backie}) no-repeat center center fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  align-items: center;
  justify-items: center;
`