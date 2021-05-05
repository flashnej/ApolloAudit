import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import {projectStore} from './../ProjectStore'
import SelectPicker from 'react-native-form-select-picker'

function NewProject({ route, navigation }) {
  const [ utility, setUtility ] = useState('')

  const utilityOptions = ["Eversource", "National Grid", "Other"]

  if (route.params.project.NewProject) {
    projectStore.auditDetails.id = -1
    projectStore.auditDetails.projectName = ""
    projectStore.auditDetails.clientName = ""
    projectStore.auditDetails.contactName = ""
    projectStore.auditDetails.phoneNumber = ""
    projectStore.auditDetails.address = ""
    projectStore.auditDetails.city = ""
    projectStore.auditDetails.sqFt = ""
    projectStore.auditDetails.utility = ""
    projectStore.auditDetails.acctNum = ""
  } else {
    projectStore.auditDetails.id = route.params.project["id"]
    projectStore.auditDetails.projectName = route.params.project["name"]
    projectStore.auditDetails.clientName = route.params.project[""]
    projectStore.auditDetails.contactName = route.params.project["contact_name"]
    projectStore.auditDetails.phoneNumber = route.params.project["phone_number"]
    projectStore.auditDetails.address = route.params.project["address"]
    projectStore.auditDetails.city = route.params.project["city"]
    projectStore.auditDetails.sqFt = route.params.project["sq_ft"]
    projectStore.auditDetails.utility = route.params.project["utility"]
    projectStore.auditDetails.acctNum = route.params.project["account_number"]
  }

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
        <Text>{projectStore.auditDetails.projectName}</Text>
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