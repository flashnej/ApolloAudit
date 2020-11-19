import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import {projectStore} from './../ProjectStore'
import SelectPicker from 'react-native-form-select-picker'

function EditProject({ route, navigation }) {
  const [ utility, setUtility ] = useState(projectStore.auditDetails.utility)

  const pressHandler = () => { navigation.navigate('ProjectIndex') }

  let projectName
  let nextPageButton

  if (projectStore.auditDetails.newProject === false) {
    projectName = <View style={styles.field}>
                    <Text>Project Name: </Text>
                    <Text>{projectStore.auditDetails.project_name}</Text>
                  </View>

    nextPageButton =  <View style={styles.button}>
                        <TouchableOpacity style={styles.button} onPress={pressHandler}>
                        <Text style={styles.buttonText}>Edit Project</Text>
                        </TouchableOpacity>
                      </View>
  } else {
    projectName = <View style={styles.field}>
                    <Text>Project Name:</Text>
                    <TextInput
                      style={styles.input}
                      defaultValue={projectStore.auditDetails.project_name}
                      onChangeText={(val) => projectStore.auditDetails.project_name= val} />
                  </View>

    nextPageButton =  <View style={styles.button}>
                        <TouchableOpacity style={styles.button} onPress={pressHandler}>
                        <Text style={styles.buttonText}>Start Project</Text>
                        </TouchableOpacity>
                      </View>
  }

  const utilityOptions = ["Eversource", "National Grid", "Other"]

    let inputUtility
    if (utility === "Other") {
      inputUtility =  <View style={styles.field}>
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
      {projectName}
      <View style={styles.field}>
        <Text>Contact Name: </Text>
        <TextInput
          style={styles.input}
          defaultValue={projectStore.auditDetails.contact_name}
          onChangeText={(val) => projectStore.auditDetails.contact_name= val} />
      </View>
      <View style={styles.field}>
        <Text>Phone Number: </Text>
        <TextInput
          style={styles.input}
          defaultValue={projectStore.auditDetails.phone_number}
          keyboardType='phone-pad'
          onChangeText={(val) => projectStore.auditDetails.phone_number = val} />
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
          defaultValue={projectStore.auditDetails.sq_ft}
          onChangeText={(val) => projectStore.auditDetails.sq_ft = val}
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
          defaultValue={projectStore.auditDetails.account_number}
          onChangeText={(val) => projectStore.auditDetails.account_number = val}
        />
      </View>
      {nextPageButton}
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

export default EditProject