import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const style = StyleSheet.create({
    icon: {
        width: 30,
        height: 30, 
    },  
    mainText: {
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
     },
    subText: {
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerImage: {

    },
});

function Feed() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <Image style={style.centerImage} source={ require('../assets/person.png') }/>
        <Text style={style.mainText}>
            Hey, guy!
        </Text>

        <Text style={style.subText}>
            Let's start your treatment? :)
        </Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Exercices() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function Icon() {
    return (
        <Text>T</Text>
    );
}

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
        <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
        }}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Image style={style.icon} source={ require('../assets/icons/botao-home.png') } />
                ),
                }}
            />

            <Tab.Screen
                name="Exercices"
                component={Exercices}
                options={{
                tabBarLabel: 'Exercices',
                tabBarIcon: () => (
                   <Image style={style.icon} source={ require('../assets/icons/faixas-de-exercicio.png') } />
                ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                tabBarLabel: 'Profile',
                tabBarIcon: () => (
                    <Image style={style.icon} source={ require('../assets/icons/user.png') } />
                ),
                }}
            />
            
        </Tab.Navigator>
  );
}

export default BottomNavigator;
