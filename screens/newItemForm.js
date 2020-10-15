import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, TextInput } from 'react-native';
import { projectStore } from './../ProjectStore';
import { observable, action } from "mobx"

function NewItemForm({ route, navigation, navigation: { setParams } }) {
    const [ location, setLocation ] = useState("")
    const [ hours, setHours ] = useState("")
    const [ existingCode, setExistingCode ] = useState("")
    const [ proposedCode, setProposedCode ] = useState("")
    const [ existingQty, setExistingQty ] = useState(0)
    const [ proposedQty, setProposedQty ] = useState(0)
    const [ volt, setVolt ] = useState(12)

    const pressHandler = ()=> {
      if (location != "" || existingCode != "" || proposedCode != "") {
        projectStore.auditDetails.lineItems.push([location, hours, existingCode, existingQty, proposedCode,proposedQty, volt])
      }
      navigation.navigate('ProjectIndex')
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.field}>
          <Text>Location:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setLocation(val)}
          />
        </View>
        <View style={styles.field}>
          <Text>Existing Code:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setExistingCode(val)}
          />
          </View>
          <View style={styles.field}>
            <Text>Hrs/Yr:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(val) => setHours(val)}
              />
        </View>
        <View style={styles.field}>
          <Text>Proposed Code:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setProposedCode(val)}
          />
        </View>
        <View style={styles.field}>
          <Text>Voltage:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setVolt(val)}
          />
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
  },
  qtyInput: {
    width: 10
  },
  qtyArea: {
    width: 50
  }
});
export default NewItemForm