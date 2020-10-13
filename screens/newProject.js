import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import {projectStore} from './../ProjectStore'

function NewProject({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('ProjectIndex')
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
            keyboardType='number-pad'
            onChangeText={(val) => projectStore.auditDetails.phoneNumber = val} />
        </View>
        <View style={styles.field}>
          <Text>Address</Text>
          <TextInput
            style={styles.input}
            defaultValue={projectStore.auditDetails.address}
            onChangeText={(val) => projectStore.auditDetails.address = val} />
        </View>
        <View style={styles.field}>
          <Text>City, Zip:</Text>
          <TextInput
            style={styles.input}
            defaultValue={projectStore.auditDetails.city}
            onChangeText={(val) => projectStore.auditDetails.city = val} />
        </View>
        <View style={styles.field}>
          <Text>Square Feet</Text>
          <TextInput
            style={styles.input}
            defaultValue={projectStore.auditDetails.sfFt}
            onChangeText={(val) => projectStore.auditDetails.sqFt = val}
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