import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from './pages/Login'
import Home from './pages/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Autenticado = () => {
  return (
    <Tab.Navigator initialRouteName="Home" >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Autenticado" component={Autenticado} options={{
          headerTitle: "Edux",
          headerTitleStyle: {
            fontSize: 36,
            fontWeight: "900",
            color: 'white',
            fontFamily: 'Titillium Web'
          },
          headerStyle: {
            backgroundColor: '#8404D9',
            borderBottomWidth: 0
          },
          headerLeft: null,
          headerRight: () => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  AsyncStorage.removeItem('@jwt');
                  navigation.push('Login');
                }}
                style={{ marginRight: 20 }}
                underlayColor={"#8404D9"}
              >
                <MaterialCommunityIcons name="logout" color={"white"} size={30} />
              </TouchableOpacity>
            </View>
          )
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3b3b3b',
    width: '50%',
    padding: 10,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eduxtitulo: {
    fontSize: 36,
    fontWeight: "700",
    color: 'white',
    fontFamily: 'Titillium Web',
    marginLeft: '1em',
  },
  textHeader: {
    fontWeight: "700",
    color: 'white',
    fontSize: 36,
    fontFamily: 'Titillium Web'
  },
  cabecalho: {
    width: '100%',
    height: 70,
    color: '#3b3b3b'
  }
});
