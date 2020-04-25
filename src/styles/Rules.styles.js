import styled from 'styled-components'
import Background from "../img/gold-bars.jpg"

export const containerRules = styled.div`
  background-color: black;
`

export const Rules = styled.div`
  position: absolute;
  z-index: 10000;
  background: url(${Background}) no-repeat center center fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin-top: -${props => props.overides}px; 
  padding: 0rem 5rem;
`
export const Button = styled.button`
    font: serif;
    margin: 10px;
    width: 200px;
    height: 100px;
    font-size: 30px;
    background-color: #773B02;
    border: solid #FCFFB2;
    color: #FCFFB2;
    text-align: center;
    margin: 0 auto;
    display: block;
    :hover {
        background-color: #FCFFB2;
        border: solid #773B02;
        color: #773B02;
    }
`

export const Ul = styled.ul`
  color: #FCFFB2;
	text-align: left;
`
export const H1 = styled.h1`
  color: #FCFFB2;
	text-align: left;
`
export const P = styled.p`
  color: #FCFFB2;
	text-align: left;
`