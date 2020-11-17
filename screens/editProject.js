import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import {projectStore} from './../ProjectStore'
import SelectPicker from 'react-native-form-select-picker'

function EditProject({ route, navigation }) {
    console.log(route.params.project)
 

  return (
      <View style={styles.container}>
          <Text>hi</Text>
      </View>
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