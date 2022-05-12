import * as React from 'react';
import { View, Image,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './resourses/HomeScreen';
import Google from './resourses/Google';
import Singlepage from './resourses/Singlepage';
import Info from './resourses/Info';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SplashScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#fff'}}>
      <Image source={require('./resourses/image/logo.jpg')} style={{borderRadius:50}} />
      <ActivityIndicator size={'large'}/>
      {
        goToHome(navigation)
      }
    </View>
  );
  
}
function goToHome(navigation){
  AsyncStorage.getItem('visit').then((value)=>{
    if(value){
      setTimeout(()=>{
        navigation.navigate('HomeScrren',navigation)
      },1000)
    }
    else{
      setTimeout(()=>{
        navigation.navigate('info',navigation)
      },1000)
    }
  })
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="HomeScrren" component={HomeScreen} />
        <Stack.Screen name="Google" component={Google} />
        <Stack.Screen name="singlepage" component={Singlepage} />
        <Stack.Screen name="info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;