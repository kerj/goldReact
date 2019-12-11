import styled from 'styled-components'
import Background from "../img/gold-stones.jpg"

export const Splash = styled.div`
  background: url(${Background}) no-repeat center center fixed;
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
`

export const Input = styled.input`
align-self:center;
  width: 200px;
  height: 50px;
  font-size: 30px;
  background-color: #FDFED8;
  border: solid #844503;
`

export const Button = styled.button`
align-self:center;
  font: serif;
  margin: 10px;
  width: 200px;
  height: 100px;
  font-size: 30px;
  background-color: #DDB446;
  border: solid #844503;
  color: #844503;
  align-items: center;
  :hover {
    background-color: #844503;
    border: solid #DDB446;
    color: #DDB446;
    }
`

export const H1 = styled.h1`
  font-size: 100px;
`

export const Label = styled.label`
  color: #E5BC5D;
`