import React from 'react';
import {View} from 'react-native';
import { WebView } from 'react-native-webview';

export default function Google({navigation}){
    return (
        <View style={{flex:1}}>
      <WebView
        source={{
          uri: 'https://www.google.com/'
        }}
        style={{ marginTop: 20 }}
      />
      </View>
    )
  };
