import React, {Component} from 'react';
import { FlatList, View } from 'react-native';
import 'react-native-gesture-handler';
import styled from 'styled-components';
import Bubble from './Bubble';
import { PurpleText } from './helper';
import SaveButton from './SaveButton';
import CircleWithText from './CircleWithText';

const triggerData = ['hear my name', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum'];
const actionData = ['sing a song', 'dance', 'lorem ipsum','lorem ipsum','lorem ipsum'];

class SelectionPage extends Component {
    state = {
        isTriggerSelected: false,
        isActionSelected: false,
        triggerText: '',
        actionTexts: [],
        condition: {},
        isAndActive: false,
        isThenActive: false,
    };

    onTriggerPress = (item, index) => {
        this.setState(prevState => (
            {
            isTriggerSelected: !prevState.isTriggerSelected,
            triggerText: item,
            condition: {
                ...prevState.condition,
                trigger:item,
            },
        }))
    };

    onActionPress = (item, index) => {
        // console.log('action idx --> ',item, index );
        if(Object.keys(this.state.condition).pop().includes('action')) return null;
        // actionData.splice(actionData.indexOf(item), 1);
        this.setState(prevState => ({
            isActionSelected: true,
            actionTexts: [...prevState.actionTexts, item],
            condition: {
                ...prevState.condition,
                [`action_${index}`]:item,
            },
        }))
    };

    onAndPress = (index=null) => {
        if (!null) {
            const length = Object.keys(this.state.condition).length;
            const numer = length === 2 ? 0 : length/2 - 1;
            this.setState(prevState => ({
                condition: {
                    ...prevState.condition,
                    [`operator_${numer}`]: 'and',
                },
            }))
         } //else {
        //     this.setState
        // }
    };

    onThenPress = () => {
        const length = Object.keys(this.state.condition).length;
        const numer = length === 2 ? 0 : length/2 - 1;
        this.setState(prevState => ({
            condition: {
                ...prevState.condition,
                [`operator_${numer}`]: 'then',
            },
        }))
    }


    render() {
        const {isTriggerSelected, triggerText, actionTexts, condition} = this.state;
        // if (isTriggerSelected) this.props.navigation.setOptions({title: 'Select Action'}); //FIX ME: BAD WARNINGS!!
        // console.log('debug params --> ', this.props);
        // console.log('debug 2 ', condition);
        const Words = !isTriggerSelected ? 
            <WordInBubble data={triggerData} condition={condition} onPress={this.onTriggerPress}/> : 
            <WordInBubble color="#FF6B00" data={actionData} condition={condition} onPress={this.onActionPress}/>;
        
        return (
            <>
                <TextAndBubble title="If I" text={triggerText} color="#05BDC5"/>
                <ActionBubble 
                    data={actionTexts} 
                    onAndPress={this.onAndPress}
                    onThenPress={this.onThenPress}
                    condition={condition}
                    />
                {Words}
                <SaveButton onPress={() => this.props.route.params.onSave(condition)}/>
            </>
        );
    }
};

const ActionBubble = ({data, onAndPress, onThenPress, condition}) => {
    if (!data.length) return <TextAndBubble title="Then I will" text={''} color="#FF6B00"/>;
    const isAndActive = Object.values(condition).pop() === 'and';
    const isThenActive = Object.values(condition).pop() === 'then';
    return (
        <>
            {data.map((actionText,idx) => {
                if (!idx) return <TextAndBubble key={`key_${idx}`} title="Then I will" text={actionText} color="#FF6B00"/>
                const isAndActive = condition[`operator_${idx-1}`] === 'and';
                const isThenActive = condition[`operator_${idx-1}`] === 'then';
                {/* console.log('debig is and active ', isAndActive, idx, condition); */}
                return <AndThenBubble 
                        key={`key_${idx}`}
                        text={actionText} 
                        color="#FF6B00"
                        isAndActive={isAndActive} 
                        isThenActive={isThenActive}
                        onAndPress={() => onAndPress(idx)}
                        onThenPress={onThenPress}
                    />
            })}
            <AndThenBubble 
                text={''} 
                color="#FF6B00"
                isAndActive={isAndActive} 
                isThenActive={isThenActive}
                onAndPress={onAndPress}
                onThenPress={onThenPress}
                />
        </>
    )
}

const WordInBubble = ({data, onPress, color, condition}) => {
    const wrapperStyle = {
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 0, 
        bottom: 0, 
        paddingBottom: 0
    }
    const renderItem = ({item,index}) => {
        if (condition[`action_${index}`]) return null;
        return (
            <Bubble color={color} onPress={() => onPress(item,index)} text={item}/>
        )
    };

    return (
        <View>
            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item,idx) => `key_${idx}`}
            numColumns={2}
            columnWrapperStyle={wrapperStyle}
        />
        </View>
    )
}

const AndThenBubble = ({color, text, isAndActive, isThenActive, onAndPress, onThenPress}) => {
    return (
        <Container>
            <Container style={{width: 127}}>
                <CircleWithText isActive={isAndActive} title="AND" onPress={onAndPress}/>
                <CircleWithText isActive={isThenActive} title="THEN" onPress={onThenPress}/>
            </Container>
            <Bubble text={text}  color={color}/>
        </Container>
    )
};

const TextAndBubble = ({title, text, color}) => {
    return (
        <Container>
            <PurpleText style={{width: 127}}>{title}</PurpleText>
            <Bubble text={text} disabled={true} color={color}/>
        </Container>
    )
};

const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export default SelectionPage;