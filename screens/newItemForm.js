import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';

function NewItemForm({ route, navigation, navigation: { setParams } }) {
    const [ location, setLocation ] = useState("")

    const { lineItems } = route.params

    const pressHandler = () => {
        navigation.navigate('ProjectIndex', {oldList: lineItems, newItem: location})
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
        <Text> {lineItems}</Text>
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