import React from 'react';
import * as Styled from '../styles/Button.styles';

export const Button = ({ onClick, disabled, id }) => {
    return (
        <Styled.ButtonContainer>
            <Styled.Button
                onClick={onClick}
                disabled={disabled}
                id={id}
            >
            </Styled.Button>
        </Styled.ButtonContainer>
    )
}
