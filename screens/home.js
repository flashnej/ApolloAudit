import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Image } from 'react-native';
import { projectStore } from './../ProjectStore';
import { observer, action } from "mobx"
import SelectPicker from 'react-native-form-select-picker'
import Logo from '../assets/Logo.jpg'

function Home({ route, navigation, navigation: { setParams } }) {
  const [email, setEmail] = useState('')

  const emailOptions = ['Max Flashner', 'David Flashner', 'Jason Flashner', 'Irvin Toon']

    const pressHandler = ()=> {
      if (email === 'Max Flashner') {
        projectStore.auditDetails.useremail = 'max.flashner@apollolightandsupply.com'
      } else if ( email === 'David Flashner') {
        projectStore.auditDetails.useremail = 'david.flashner@apollolightandsupply.com'
      } else if ( email === 'Jason Flashner') {
        projectStore.auditDetails.useremail = 'jason.flashner@apollolightandsupply.com'
      } else if ( email === 'Irvin Toon') {
        projectStore.auditDetails.useremail = 'irvin.toon@apollolightandsupply.com'
      }
      navigation.navigate('NewProject')
    }


    return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={Logo} scale/>
      </View>
      <View style={styles.field}>
        <Text>Email: </Text>
        <View style={styles.input}>
          <SelectPicker
            onValueChange={(value) => {
              setEmail(value)
            }}
            selected={email}
            >
            {Object.values(emailOptions).map((val, index) => (
                <SelectPicker.Item label={val} value={val} key={index} />
            ))}
          </SelectPicker>
        </View>
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.button} onPress={pressHandler}>
         <Text style={styles.buttonText}>Start a Project</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    color: 'black',
    padding: 1,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '900',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    width: 200,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home