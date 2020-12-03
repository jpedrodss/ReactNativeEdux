import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Pages
import Turmas from './pages/Turmas';
import Login from './pages/Login';
import Home from './pages/Home';
import Alunos from './pages/Alunos';
import postagens from './pages/postagens';
import imagemCamera from './pages/imagemCamera';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'Alunos') {
            iconName = focused ? 'ios-contacts' : 'ios-contacts';
          } else if (route.name === 'Turmas') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#00D65F',
          borderStyle: 'solid',
        },
        activeTintColor: 'white',
        inactiveTintColor: '#333',
        fontFamily: 'Titillium Web'
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Turmas" component={Turmas} />
      <Tab.Screen name="Alunos" component={Alunos} />
      <Tab.Screen name="postagens" component={postagens} />
      <Tab.Screen name="imagemCamera" component={imagemCamera} />
    </Tab.Navigator>
  )
}

const Hidden = () => {
  return null;
}

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerShown: true,
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
      }} >
        <Drawer.Screen name="Login" component={Login} options={{ headerShown: false, drawerLabel: Hidden }} />
        <Drawer.Screen name="BottomNavigator" component={BottomNavigator} options={{ drawerLabel: "Ranking" }} />
        <Drawer.Screen name="postagens" component={postagens} options={{ drawerLabel: "Postagens" }} />
      </Drawer.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
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
