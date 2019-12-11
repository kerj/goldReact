import React from 'react';
import * as Styled from './../styles/Splash.styles';
import useGlobal from '../store';

export const Cleared = () => {
    const [globalState, globalActions] = useGlobal();
    return (
        <div>
            <h1>Not Enough Gold in these hills!</h1>
            <Styled.Button
            onCLick={() => globalActions.createBoard()}
            >
                Try Again!
            </Styled.Button>
        </div>
    )
}
