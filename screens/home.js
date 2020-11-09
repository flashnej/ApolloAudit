import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, TextInput, TouchableOpacity, Image } from 'react-native';
import { projectStore } from './../ProjectStore';
import { observer, action } from "mobx"
import SelectPicker from 'react-native-form-select-picker'
import Logo from '../assets/Logo.jpg'

function Home({ route, navigation, navigation: { setParams } }) {
  const [email, setEmail] = useState('')

  const emailOptions = ['max.flashner@apollolightandsupply.com', 'david.flashner@apollolightandsupply.com', 'jason.flashner@apollolightandsupply.com']


    const pressHandler = ()=> {
      navigation.navigate('NewProject')
      projectStore.auditDetails.useremail = email
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
         <Text>Start a Project</Text>
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