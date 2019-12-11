import React from 'react'
import * as Styled from './../styles/Splash.styles'
import useGlobal from '../store';

export const TntEnd = () => {
    const [globalState, globalActions] = useGlobal();

    return (
        <div>
            <h1>YOU LOSE!!</h1>
            <Styled.Button onClick={()=> {globalActions.createGame()}}>Retry</Styled.Button>
        </div>
    )
}
