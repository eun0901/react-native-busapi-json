import React, { useState } from 'react';
import {View, StyleSheet, Text, ListViewBase} from 'react-native';
import SearchBox from './components/SearchBox';
import { DOMParser } from 'xmldom';

const App = () => {
    const [word, setWord] = useState('');
    const [station, setStation] = useState([]);

    const _handleTextChange = text => {
        setWord(text);
    };

    const _addStation = async(e)=>{
          try{
            var xhr = new XMLHttpRequest();
            const API_KEY = 'UkgvlYP2LDE6M%2Blz55Fb0XVdmswp%2Fh8uAUZEzUbby3OYNo80KGGV1wtqyFG5IY0uwwF0LtSDR%2FIwPGVRJCnPyw%3D%3D';
            const url = 'http://apis.data.go.kr/6410000/busstationservice/getBusStationList'; /*URL*/
            var queryParams = `${url}?serviceKey=${API_KEY}&keyword=${word}`;
            xhr.open('GET', queryParams);
            xhr.onreadystatechange = function () {
              if (this.readyState == 4) {
                const parseString = require('xml2js').parseString;
                parseString(this.responseText, (err, result) => {
                  if(err !== null) {
                    console.log("Error : ", err)
                    return
                  }
                  console.log(JSON.stringify(result.response.msgBody[0]));
                  result = JSON.stringify(result.response.msgBody[0]);
                  setStation(JSON.parse(result));
                  console.log("station: ", station);
                  return station;
                })
              }
            }
          xhr.send(station);
          }
          catch(err){
            alert(err);
          }
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
            <Text>{station}</Text>
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