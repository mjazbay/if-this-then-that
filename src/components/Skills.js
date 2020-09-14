import React, {Component} from 'react';
import { FlatList, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import styled from 'styled-components';
import Card from './Card';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  
  
class Skills extends Component {
    state = {
        data: [
            {
                id: '0',
                title: '',
              },
        ],
        initialScrollIndex: 0,
    }

    changeNavigationTitleTo = (title) => {
        this.props.navigation.setOptions({title});
    };

    onSave = (dataObj) => {
        let sentence = 'If I ';
        const arrVal = Object.values(dataObj);
        const lastId = [...this.state.data].pop().id * 1;
        console.log('debug lastId --> ', lastId, lastId + 1);
        arrVal.map((val, idx) => {
            if (idx !== 1) sentence += val + ' ';
            else {
                sentence += `, then I will ${val} `;
            } 
        });
        this.setState(prevState => ({
            data: [...prevState.data, {id: `${lastId + 1}`, title: sentence}],
            initialScrollIndex: lastId,//FIX ME: need to lastId + 1
        }));
        this.props.navigation.popToTop();
    }

    renderItem = ({ item }) => {
        const text = item.title || '+';
        const textStyle = !item.title ? {
            color: '#05BDC5',
            fontSize: 96,
            lineHeight: 110, 
        } : null;
        const containerStyle = item.title ? {backgroundColor: '#05BDC5'} : null;
        
        return <Card 
            onPress={() => {
                this.props.navigation.navigate('SelectionPage', {name: 'Select Trigger', onSave: this.onSave});
                // this.props.navigation.setOptions({onSave: this.onSave});
            }} 
            containerStyle={containerStyle}
            textStyle={textStyle}
            text={text}
            />
    };

    render() {
        return (
            <SafeContainer>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                horizontal
                initialScrollIndex={this.state.initialScrollIndex}
              />
            </SafeContainer>
          );
    }
}

const SafeContainer = styled.SafeAreaView`
    flex: 1;
    margin-top: ${StatusBar.currentHeight || 0}px;
`;

export default Skills;