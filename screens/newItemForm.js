import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import { projectStore } from './../ProjectStore';

function NewItemForm({ route, navigation, navigation: { setParams } }) {
    const [ location, setLocation ] = useState("")
    const [ existingCode, setExistingCode ] = useState("")

    const pressHandler = () => {
        let id = projectStore.auditDetails.lineItems.length
        projectStore.auditDetails.lineItems.push({key: id, location: location, existingCode: existingCode})
        navigation.navigate('ProjectIndex')
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.field}>
          <Text>Location:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setLocation(val)} />
        </View>
        <View style={styles.field}>
        <Text>Existing Code:</Text>
          <TextInput
              style={styles.input}
              onChangeText={(val) => setExistingCode(val)} />
        </View>
        <View style={styles.button}>
         <Button title='Add Item' onPress={pressHandler}/>
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
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
  },
  field: {
    flexDirection:'row',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    width: 200,
  }
});
export default NewItemForm