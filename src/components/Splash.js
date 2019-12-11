import React, { useState } from 'react';
import useGlobal from '../store'
import * as Styled from '../styles/Splash.styles'

export const Splash = () => {
  const [name, setName] = useState('')
  const [globalState, globalActions] = useGlobal();
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
    </Styled.Splash>
  )
}
