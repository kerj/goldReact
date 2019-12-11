import React, { useEffect } from 'react';
import { Winner } from './Winner';
import { TntEnd } from './TntEnd';
import { Cleared } from './Cleared';
import useGlobal from '../store';
import * as Styled from '../styles/Game.styles';


export const Game = () => {
  const [globalState, globalActions] = useGlobal();

  useEffect(() => {
    if (!globalState.game) {
      return
    }
    globalActions.createGame()
  }, [])

  useEffect(() => {
    //TODO: Add gold find, tnt and transitions so page isnt built off of conditionals
  }, [globalState.playerLose, globalState.playerWin, globalState.tilesCleared, globalState.playerGold])

  const createTable = () => {
    let tempArray = []
    for (let i = 0; i < 10; i++) {
      tempArray.push(globalState.gameBoard.slice(`${i}0`, `${i + 1}0`))
    }
    return tempArray.map(c => c.map((curr, key) => <span key={key} >{curr}</span>))
  }

  return (
    <>
      <h1>Gold Collected: {globalState.playerGold}</h1>
      <Styled.Grid>
        {
          globalState.gameBoard.length === 100 &&
            !globalState.playerLose &&
            !globalState.playerWin ? createTable() : null
        }
      </Styled.Grid>
      {
        globalState.playerLose ? <TntEnd /> : null
      }
      {
        globalState.playerWin ? <Winner /> : null
      }
      {
        globalState.tilesCleared && !globalState.playerWin && !globalState.playerLose ? <Cleared /> : null
      }
    </>

  )
}
