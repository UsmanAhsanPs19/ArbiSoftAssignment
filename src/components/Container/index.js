import React from 'react';
import styled from 'styled-components';

const SafeAreaStyled = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${props => props.backgroundColor ? props.backgroundColor : "white"};
    
`;

export default function Container({ children, backgroundColor }){
    return(<SafeAreaStyled backgroundColor={backgroundColor}>{children}</SafeAreaStyled>);
}