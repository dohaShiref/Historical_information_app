import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Header({navigation}) {
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        backgroundColor: '#008',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 4,
        position: 'relative',
      }}>
       <Icon.Button
              name="home"
              backgroundColor="#008"
              size={30}
              >
            </Icon.Button>
      <Text style={{ fontSize: 28,color:'white'}}>News</Text>
         <Icon.Button
              name="google"
              backgroundColor="#008"
              size={30}
              onPress={() =>  navigation.navigate('Google')}>
            </Icon.Button>
    
    </View>
  );
}
