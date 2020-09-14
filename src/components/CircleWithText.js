import React from 'react';
import 'react-native-gesture-handler';
import {TouchableOpacity, Text} from 'react-native';
import Card from './Card';
import styled from 'styled-components';


const CircleWithText = ({isActive=false, title='AND', onPress}) => {
    const color = !isActive ? '#B0B0B0' : '#3E2866';
    
    return (
        <SmallCircle borderColor={color} onPress={onPress}>
            <SmallText textColor={color}>{title}</SmallText>
        </SmallCircle>
    );
};

const SmallCircle = styled.TouchableOpacity`
    width: 28px;
    height: 28px;
    backgroundColor: #FFFFFF;
    border-width: 2px;
    border-radius: 20px;
    border-color: ${props => props.borderColor};
    justify-content: center;
    align-items: center;
    margin-horizontal: 5px;
`;
const SmallText = styled.Text`
    color: ${props => props.textColor};
    font-size: 8px;
    line-height: 14px;
    text-align: center;
`;

export default CircleWithText;

