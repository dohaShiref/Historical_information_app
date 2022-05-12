import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity,ActivityIndicator} from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {myposts: [], resready: 0, navigation: ''};
  componentDidMount() {
    fetch('https://egyptian-antiquities.com/wp-json/wp/v2/posts?per_page=9')
      .then(r => r.json())
      .then(res => {
        this.setState({myposts: res, resready: 1}),
          function () {
            console.timeLog(res);
          };
      });
  }
  render() {
    return (
      <View style={{flex:1}}>

     <Header navigation={this.props.navigation}></Header>
      <ScrollView style={{flex: 1, backgroundColor: 'lightgray'}}>
     
        {this.RenderData()}
      </ScrollView>
      <Footer navigation={this.props.navigation}></Footer>
      </View>
    );
  }
  RenderData() {
    if (this.state.resready === 1) {
      return this.state.myposts.map(data => {
        return (
          <TouchableOpacity
            style={{
              flex: 3,
              flexDirection: 'row',
              backgroundColor: 'white',
              margin: 5,
              borderRadius:10,
              shadowColor:'black',
              shadowOpacity:0.8
            }}
            onPress={() => {
              this.props.navigation.navigate('singlepage', {
                imagee: data.better_featured_image.source_url,
                title: data.title.rendered,
                content: data.content.rendered.substring(0, 200),
              });
            }}>
            
            <View style={{padding: 8, flex: 2}}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
              {data.title.rendered}
              </Text>

              <Text style={{color: 'black'}}>
              {data.content.rendered.substring(0,100)}
              </Text>
            </View>
            <View style={{flex: 1, padding: 6, margin: 10}}>
              <Image
               source={{uri:data.better_featured_image.source_url}}
                style={{width: 100, height: 100}}></Image>
            </View>
          </TouchableOpacity>
        );
      });
    }
    else {
      return(
        <ActivityIndicator size={'large'}/>
      )
    }
  }
}
