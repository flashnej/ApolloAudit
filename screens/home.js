import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import {projectStore} from './../ProjectStore'
import SelectPicker from 'react-native-form-select-picker'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../assets/Logo.jpg'

function Home ({ navigation }) {

  const pressHandler = () => {
      navigation.navigate('NewProject')
  }
  return (
    <View style={styles.container}>
      <View style={styles.image}>
       <Image source={Logo} scale/>
      </View>
      <Text>User Email:</Text>
      <TextInput
        style={styles.input}
        defaultValue= {projectStore.auditDetails.useremail}
        onChangeText={(val) => projectStore.auditDetails.useremail= val} />
        <View style={styles.button}>
         <TouchableOpacity style={styles.button} onPress={pressHandler}>
           <Text>Start a Project</Text>
           </TouchableOpacity>
      </View>
    </View>
  );
};

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
export default observer(Home)