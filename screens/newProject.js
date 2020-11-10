import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import {projectStore} from './../ProjectStore'
import SelectPicker from 'react-native-form-select-picker'

function NewProject({ navigation }) {
  const [ utility, setUtility ] = useState('')

  const utilityOptions = ["Eversource", "National Grid", "Other"]

  const pressHandler = () => {
    navigation.navigate('ProjectIndex')
  }

  let inputUtility
  if (utility === "Other") {
    inputUtility = <View style={styles.field}>
    <Text>Utility Name:</Text>
    <TextInput
      style={styles.input}
      defaultValue= {projectStore.auditDetails.utility}
      onChangeText={(val) => projectStore.auditDetails.utility= val} />
  </View>
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text>{projectStore.projectName}</Text>
        <View style={styles.field}>
          <Text>Project Name:</Text>
          <TextInput
            style={styles.input}
            defaultValue={projectStore.auditDetails.projectName}
            onChangeText={(val) => projectStore.auditDetails.projectName= val} />
        </View>
        <View style={styles.field}>
          <Text>Contact Name: </Text>
          <TextInput
            style={styles.input}
            defaultValue={projectStore.auditDetails.contactName}
            onChangeText={(val) => projectStore.auditDetails.contactName= val} />
        </View>
        <View style={styles.field}>
          <Text>Phone Number: </Text>
          <TextInput
            style={styles.input}
            defaultValue={projectStore.auditDetails.phoneNumber}
            keyboardType='phone-pad'
            onChangeText={(val) => projectStore.auditDetails.phoneNumber = val} />
        </View>
        <View style={styles.field}>
          <Text>Address: </Text>
          <TextInput
            style={styles.input}
            defaultValue={projectStore.auditDetails.address}
            onChangeText={(val) => projectStore.auditDetails.address = val} />
        </View>
        <View style={styles.field}>
          <Text>City, Zip: </Text>
          <TextInput
            style={styles.input}
            defaultValue={projectStore.auditDetails.city}
            onChangeText={(val) => projectStore.auditDetails.city = val} />
        </View>
        <View style={styles.field}>
          <Text>Square Feet: </Text>
          <TextInput
            style={styles.input}
            defaultValue={projectStore.auditDetails.sfFt}
            onChangeText={(val) => projectStore.auditDetails.sqFt = val}
            keyboardType='number-pad' />
        </View>
        <View style={styles.field}>
          <Text>Utility Provider: </Text>
          <View style={styles.input}>
            <SelectPicker
              onValueChange={(value) => {
                setUtility(value)
                projectStore.auditDetails.utility = value
              }}
              selected={utility}
              >
              
              {Object.values(utilityOptions).map((val, index) => (
                  <SelectPicker.Item label={val} value={val} key={index} />
              ))}
            </SelectPicker>
          </View>
        </View>
        <View>
          {inputUtility}
        </View>
        <View style={styles.field}>
          <Text>Account Number: </Text>
          <TextInput
            style={styles.input}
            defaultValue={projectStore.auditDetails.acctNum}
            onChangeText={(val) => projectStore.auditDetails.acctNum = val}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.button} onPress={pressHandler}>
           <Text style={styles.buttonText}>Start a Project</Text>
          </TouchableOpacity>
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
    color: 'black',
    padding: 1,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '900',
  },
});

export default NewProject