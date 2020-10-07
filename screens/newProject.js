import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';

function NewProject({ navigation }) {
  const [ projectName, setProjectName ] = useState("")
  const [ contactName, setContactName ] = useState("")
  const [ phoneNumber, setPhoneNumber ] = useState()
  const [ address, setAddress ] = useState("")
  const [ city, setCity ] = useState("")
  const [ sqFt, setSqFt ] = useState()

  const pressHandler = () => {
    navigation.navigate('ProjectIndex', {
        projectName: projectName,
        contactName: contactName,
        phoneNumber: phoneNumber,
        address: address,
        city: city,
        sqFt: sqFt,
        newItem: null
    })
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.field}>
          <Text>Project Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setProjectName(val)} />
        </View>
        <View style={styles.field}>
          <Text>Contact Name: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setContactName(val)} />
        </View>
        <View style={styles.field}>
          <Text>Phone Number: </Text>
          <TextInput
            style={styles.input}
            keyboardType='number-pad'
            onChangeText={(val) => setPhoneNumber(val)} />
        </View>
        <View style={styles.field}>
          <Text>Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setAddress(val)} />
        </View>
        <View style={styles.field}>
          <Text>City, Zip:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setCity(val)} />
        </View>
        <View style={styles.field}>
          <Text>Square Feet</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setCity(val)}
            keyboardType='number-pad' />
        </View>
        <View style={styles.button}>
         <Button title='Start Audit' onPress={pressHandler}/>
      </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  field: {
    flexDirection:'row',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    width: 200,
  },
  button: {
    backgroundColor: 'blue',
  }
});

export default NewProject