import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SearchBox from './components/SearchBox';

const App = () => {
    const [word, setWord] = useState('');
    const [station, setStation] = useState('');
    const primekey = 'UkgvlYP2LDE6M%2Blz55Fb0XVdmswp%2Fh8uAUZEzUbby3OYNo80KGGV1wtqyFG5IY0uwwF0LtSDR%2FIwPGVRJCnPyw%3D%3D';

    const _handleTextChange = text => {
        setWord(text);
    };
    const _addStation = () => {
        fetch(`http://apis.data.go.kr/6410000/busstationservice/getBusStationList?serviceKey=${primekey}&keyword=${word}`)
        .then(r => r.json()).then(r => {
            console.log(r);
            setStation(r.results);
            setWord('');
        }).catch(e => console.log('error when search station'));
    };

    const _onBlur = () => {
        setWord('');
    };



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bus api</Text>
            <SearchBox 
            placeholder="정류장 이름을 입력하세요"
            value={word}
            onChangeText={_handleTextChange}
            onSubmitEditing={_addStation}
            onBlur={_onBlur}
            />    
            <Text style={styles.title}>{word}</Text>
            <Text style={styles.title}>{station}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 25,
        margin: 10,
    },
});

export default App;