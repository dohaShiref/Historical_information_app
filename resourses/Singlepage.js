import {Text, View, Image, TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-web';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
export default class Singlepage extends React.Component {
  state = {navigation: ''};

  render() {
    return (
      <View style={{flex: 3, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Image
            source={{uri: this.props.route.params.imagee}}
            style={{width: 500, height: 200}}></Image>
        </View>
        <View style={{flex: 2, marginTop: 15}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 28,
              textAlign: 'center',
              marginBottom: 10,
            }}>
            {this.props.route.params.title}
          </Text>

          <Text style={{color: 'black',margin:10}}>
            {this.props.route.params.content}
          </Text>
        </View>
        <Footer navigation={this.props.navigation}></Footer>
      </View>
    );
  }
}
