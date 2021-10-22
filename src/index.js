import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create({
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
    buttonStart: {
      marginTop: 30,
      top: 20
    }
});

function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <Image style={styles.centerImage} source={ require('./assets/person.png') }/>
        <Text style={styles.mainText}>
            Hey, guy!
        </Text>

        <Text style={styles.subText}>
            Let's start your treatment? :)
        </Text>

        <Button 
          style={styles.buttonStart}
          onPress={() => {
                alert('You tapped the button!');
          }}

          title="Start" />
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

function Menu(){
  return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
        }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Image style={styles.icon} source={ require('./assets/icons/botao-home.png') } />
                ),
                }}
            />

            <Tab.Screen
                name="Exercices"
                component={Exercices}
                options={{
                tabBarLabel: 'Exercices',
                tabBarIcon: () => (
                   <Image style={styles.icon} source={ require('./assets/icons/faixas-de-exercicio.png') } />
                ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                tabBarLabel: 'Profile',
                tabBarIcon: () => (
                    <Image style={styles.icon} source={ require('./assets/icons/user.png') } />
                ),
                }}
            />
            
        </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Menu />
    </NavigationContainer>
  );
}
