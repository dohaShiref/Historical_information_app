import React, {Component} from 'react';
import {Text, ScrollView, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from './Header';
export default class Info extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {navigation: ''};
  componentDidMount() {
    AsyncStorage.setItem('visit','true')
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <Header></Header>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'green'}}>
            About Us
          </Text>
          <Text style={{marginBottom: 180, color: 'green'}}>
            Pain was born and I will give you a complete account of the system,
            and expound the actual teachings of the great explorer of the truth,
            the master-builder of human happiness. No one rejects, dislikes, or
            avoids pleasure itself, because it is pleasure, but because those
            who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone
            who loves or pursues or desires to obtain pain of itself, because it
            is pain, but because occasionally circumstances occur in which toil
            and pain can procure him some great pleasure. To take a trivial
            example, which of us ever undertakes laborious physical exercise,
            except to obtain some advantage from it? But who has any right to
            find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no
            resultant pleasure?"
          </Text>
        </View>
      </ScrollView>
    );
  }
}
