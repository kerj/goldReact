import React from 'react'
import useGlobalHook from "use-global-hook"

import * as actions from "../actions"

const initialState = {
    name: '',
    rules: false,
    game: false,
    playerGold: 0,
    tilesCleared: false,
    playerWin: false,
    playerLose: false,
    gameSize: 100,
    gameBoard: [],
}

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;