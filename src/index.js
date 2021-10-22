import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
//var RNFS = require('react-native-fs');
//import RNFS from 'react-native-fs';

const user = ({
  name: "Drake"
});

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
      backgroundColor: '#5B3FFF',
      paddingTop: 5,
      paddingBottom: 5, 
      paddingLeft: 70, 
      paddingRight: 70,
      borderRadius: 3,
      marginTop: 20
    },
    textButtonStart: {
      color: '#fff',
      fontSize: 20,
    },
    tableData: {
      flexDirection: 'row',
      marginTop: 30
    },
    itemData: {
      marginHorizontal: 20,
      textAlign: 'center',
      alignItems: 'center'
    },
    textItemData: {
      fontSize: 20,
      color: 'gray'
    },
    subTextItemData: {
      fontSize: 20,
      color: '#9E2D8C'
    }
});


const Home = (props) => {
// function Home({navigation}){
      return (
      <View style={{ flex: 1, alignItems: 'center' }}>
          <Image style={styles.centerImage} source={ require('./assets/person.png') }/>
          <Text style={styles.mainText}>
              Hey, { props.name }!
          </Text>

          <Text style={styles.subText}>
              Let's start your treatment? :) 
          </Text>


            {/*<TouchableOpacity
              style={styles.buttonStart}
              onPress={() =>{
                navigation.navigate(Exercices);
              }}
            >
              <Text style={styles.textButtonStart}>Start</Text>
            </TouchableOpacity>*/}
      </View>
    );
}

function Exercices() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <Image style={styles.centerImage} source={ require('./assets/exercices/hand.png') }/>
        <Text style={styles.mainText}>
            Close and open hands
        </Text>


          <TouchableOpacity
            style={styles.buttonStart}
            onPress={() =>{
              navigation.navigate(Exercices);
            }}
          >
            <Text style={styles.textButtonStart}>Done</Text>
          </TouchableOpacity>

          <View style={styles.tableData}>
              { /* Series */}
              <View style={styles.itemData}>
                  <Text style={styles.textItemData}>Series</Text>
                  <Text style={styles.subTextItemData}>3x</Text>
              </View>

              { /* Repetitions */}
              <View style={styles.itemData}>
                  <Text style={styles.textItemData}>Repetitions</Text>
                  <Text style={styles.subTextItemData}>10</Text>
              </View>

              { /* Rest */}
              <View style={styles.itemData}>
                  <Text style={styles.textItemData}>Rest</Text>
                  <Text style={styles.subTextItemData}>20 seg</Text>
              </View>
          </View>
    </View>
  );
}

// function Profile() {
const Profile = (props) => {

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.mainText}>
            Choose your name 
        </Text>

        <TextInput 
          style={styles.changeUsernameField}
          placeholder="Username"
          onChangeText={text => props.setName(text)}
        />


          {/*<TouchableOpacity
            style={styles.buttonStart}
              onPress={() =>{
                props.navigation.navigate(Exercices);
              }
            }

          >
            <Text style={styles.textButtonStart}>Save</Text>
          </TouchableOpacity>*/}
    </View>
  );
}

const Tab = createBottomTabNavigator();

// function Menu({ teste }){
const Menu = (props) => {
  return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
        }}
        >
            <Tab.Screen
                name="Home"
                //component={Home}
                children={() => <Home name={props.nameState} />}
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
                // component={Profile}
                children={() => <Profile setName={props.setNameState} />}
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

  const [name, setName] = React.useState('');

  

  return (
    
    <NavigationContainer>
      <Menu setNameState={setName} nameState={name}/>
    </NavigationContainer>
  );
}
