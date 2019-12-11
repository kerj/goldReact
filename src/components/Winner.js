import React from 'react'
import * as Styled from './../styles/Splash.styles'
import useGlobal from '../store'

export const Winner = () => {
    const [globalState, globalActions] = useGlobal();
    return (
        <>
            <h1>WINNER!!!!</h1>
            <Styled.Button
                onClick={() => { globalActions.createGame() }}
            >
                Keep Digging!
            </Styled.Button>
        </>
    )
}
