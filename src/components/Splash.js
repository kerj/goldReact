import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Rules } from './Rules';
import useGlobal from '../store'
import * as Styled from '../styles/Splash.styles'

export const Splash = () => {
  const [name, setName] = useState('')
  const [globalState, globalActions] = useGlobal();

  const RulesModal = () => {
    const topOfPage = document.body;
    const screenHeight = document.body.clientHeight;
  
   return ReactDOM.createPortal(<Rules overides={screenHeight} />, topOfPage)
  }

  return (
    <Styled.Splash>
      <Styled.H1 id="gold-rush">Gold Rush</Styled.H1>
      <Styled.Label>Enter Name</Styled.Label>
      <br />
      <Styled.Input
        type="text"
        required="required"
        onChange={e => setName(e.target.value)}
      />
      <br />
      <Styled.Button onClick={() => { globalActions.startGame(name) }} type="button">Dig for Gold!</Styled.Button>
      {
        globalState.game && globalState.name &&
        RulesModal()
      }
    </Styled.Splash>
  )
}
