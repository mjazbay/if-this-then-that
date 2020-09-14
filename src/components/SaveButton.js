import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Card from './Card';


const SaveButton = ({onPress}) => {
    const [textColor, setTextColor] = useState('#7A787E');
    const [containerColor, setContainerColor] = useState('#FAFAFA');
    const textStyle = {
        color: textColor,
        fontSize: 18,
        lineHeight: 21,
    };
    const containerStyle = {
        position: 'absolute',
        backgroundColor: containerColor,
        borderColor: containerColor,
        borderRadius: 30,
        width: 298, 
        height: 44,
        bottom: 60,
    };

    const onClick = () => {
        onPress();
        setTextColor('#FFFFFF');
        setContainerColor('#3E2866');
    };

    return (
            <Card 
                onPress={onClick}
                containerStyle={containerStyle} 
                text="Save" 
                textStyle={textStyle}
            />
    )
};

export default SaveButton;