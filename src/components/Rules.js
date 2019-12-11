import React from 'react'
import useGlobal from '../store'
import * as Styled from '../styles/Rules.styles'

export const Rules = () => {
    const [globalState, globalActions] = useGlobal();
    return (
        <Styled.Rules>
            <Styled.H1>It's a Gold Rush!</Styled.H1>
            <Styled.P>Hello Prospector {globalState.name}! You have decided to leave your home in the midwest to resurrect the 1849 Gold Rush, 170 years later. Your friends think you have lost it! You are determined to prove them wrong. You head out to California to seek your fortune. You must find the plots of gold amongst the Silicon Valley tech buildings. You must be careful to avoid blowing up buildings with your prospecting TNT. The Bureau of Land Management must be placated as well. Your plan to unearth unimagined riches is as follows:</Styled.P>
            <Styled.Ul>
                <li>Click on land plots to determine if they contain gold</li>
                <li>The BLM has placed a limit of 5 prospecting expeditions per city block, so you must not exceed this limit</li>
                <li>Finding Gold will give you extra attempts!</li>
                <li>Beware of setting off lost TNT placed by previous prospectors!</li>
                <li>Collect gold!!</li>
            </Styled.Ul>
            <Styled.Button onClick={() => globalActions.viewedRules()} type="button">Gold or Bust</Styled.Button>
        </Styled.Rules>
    )
}
