import React from 'react';
import 'react-native-gesture-handler';
import styled from 'styled-components';


const Card = ({disabled=false, onPress, containerStyle, text, textStyle}) => {
    return (
        <MainTouchableContainer disabled={disabled} onPress={onPress} style={containerStyle}>
            <CardText style={textStyle}>{text}</CardText>
      </MainTouchableContainer>
    )
}

const MainTouchableContainer = styled.TouchableOpacity`
    width: 204px;
    height: 285px;
    align-self: center;
    border-radius: 18px;
    border-width: 3px;
    border-color: #05BDC5;
    padding: 20px;
    margin-vertical: 8px;
    margin-horizontal: 16px;
    justify-content: center;
    align-items: center;
`;

const CardText = styled.Text`
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`;

export default Card;