import React from 'react';
import 'react-native-gesture-handler';
import Card from './Card';


const Bubble = ({disabled=false, color='#05BDC5', text='', textColor='#ffffff', onPress}) => {
    
    const textStyle = {
        color: !text ? color : textColor,
        fontSize: !text ? 24 : 14,
        lineHeight: !text ? 28 : 16, 
    };
    const containerStyle = {
        backgroundColor: text ? color : null,
        borderColor: color,
        width: !text ? 127 : null, 
        height: 38,
    };


    return (
            <Card 
                disabled={disabled}
                onPress={onPress}
                containerStyle={containerStyle} 
                text={text || '+'} 
                textStyle={textStyle}
            />
    )
};

export default Bubble;