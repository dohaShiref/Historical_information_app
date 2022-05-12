import React from 'react';
import {View, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer({navigation}) {
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
        size={40}
        onPress={() =>  navigation.navigate('home')}></Icon.Button>
      <Icon.Button
        name="whatsapp"
        backgroundColor="#008"
        size={40}
        onPress={sendWhatsApp}></Icon.Button>
      <Icon.Button
        name="info"
        backgroundColor="#008"
        size={30}
        onPress={() => {
          navigation.navigate('info');
        }}></Icon.Button>

      {/*  */}
    </View>
  );
}
var phone = 201144427782;
let sendWhatsApp = () => {
  let url = 'whatsapp://send?text=' + 'hello' + '&phone=' + phone;
  Linking.openURL(url)
    .then(data => {
      console.log('WhatsApp Opened');
    })
    .catch(() => {
      alert('Make sure Whatsapp installed on your device');
    });
};
