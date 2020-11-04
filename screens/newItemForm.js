import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, TextInput, ScrollView } from 'react-native';
import { projectStore } from './../ProjectStore';
import { observable, action } from "mobx"
import SelectPicker from 'react-native-form-select-picker'

function NewItemForm({ route, navigation, navigation: { setParams } }) {
    const [ location, setLocation ] = useState("")
    const [ hours, setHours ] = useState("")
    const [ existingCode, setExistingCode ] = useState("")
    const [ proposedCode, setProposedCode ] = useState("")
    const [ existingQty, setExistingQty ] = useState(0)
    const [ proposedQty, setProposedQty ] = useState(0)
    const [ volt, setVolt ] = useState()
    const [ comments, setComments ] = useState("")

    const existingOptions = ["Recessed", "2x2", "2x4", "4' Strip", "8' Strip", "4' Linear", "8' Linear", "Highbay", "Decorative"]
    let proposedOptions = []
    if (existingCode === "Recessed") {
      proposedOptions = ["recessed option 1", "recessed option 2"]
    } else if (existingCode === "2x2") {
      proposedOptions = ["2x2 option 1", "2x2 option 2"]
    } else if (existingCode === "2x4") {
      proposedOptions = ["2x4 option 1", "2x4 option 2"]
    } else if (existingCode === "4' Strip") {
      proposedOptions = ["4' Strip option 1", "4' Strip option 2"]
    } else if (existingCode === "8' Strip") {
      proposedOptions = ["8' Strip option 1", "8' Strip option 2"]
    } else if (existingCode === "4' Linear") {
      proposedOptions = ["4' Linear option 1", "4' Linear option 2"]
    } else if (existingCode === "8' Linear") {
      proposedOptions = ["8' Linear option 1", "8' Linear option 2"]
    } else if (existingCode === "Highbay") {
      proposedOptions = ["Highbay option 1", "Highbay option 2"]
    } else if (existingCode === "Decorative") {
      proposedOptions = ["Decorative option 1", "Decorative option 2"]
    }

    const voltOptions = ["120 / 277", "480"]

    const pressHandler = ()=> {
      if (location != "" || existingCode != "" || proposedCode != "") {
        projectStore.auditDetails.lineItems.push([location, hours, existingCode, existingQty, proposedCode,proposedQty, volt, comments])
      }
      navigation.navigate('ProjectIndex')
    }

  return (
    <View style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView verticle={true}>
      <View style={styles.container}>
        <View style={styles.field}>
          <Text>Location:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setLocation(val)}
          />
        </View>
        <View style={styles.field}>
          <Text>Existing Fixture: </Text>
          <View style={styles.input}>
            <SelectPicker
              onValueChange={(value) => {
                setExistingCode(value)
              }}
              selected={existingCode}
              >
              {Object.values(existingOptions).map((val, index) => (
                  <SelectPicker.Item label={val} value={val} key={index} />
              ))}
            </SelectPicker>
          </View>
        </View>
          <View style={styles.field}>
            <Text>Hrs/Yr:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(val) => setHours(val)}
              />
        </View>
        <View style={styles.field}>
          <Text>Existing Qty:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setExistingQty(val)}
            keyboardType='number-pad'
          />
        </View>
        <View style={styles.field}>
        <Text>Proposed: </Text>
          <View style={styles.input}>
            <SelectPicker
              onValueChange={(value) => {
                setProposedCode(value)
              }}
              selected={proposedCode}
              >
              {Object.values(proposedOptions).map((val, index) => (
                  <SelectPicker.Item label={val} value={val} key={index} />
              ))}
            </SelectPicker>
          </View>
        </View>
        <View style={styles.field}>
          <Text>Proposed Qty:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setProposedQty(val)}
            keyboardType='number-pad'
          />
        </View>
        <View style={styles.field}>
          <Text>Voltage: </Text>
          <View style={styles.input}>
            <SelectPicker
              onValueChange={(value) => {
                setVolt(value)
              }}
              selected={volt}
              >
              {Object.values(voltOptions).map((val, index) => (
                  <SelectPicker.Item label={val} value={val} key={index} />
              ))}
            </SelectPicker>
          </View>
        </View>
        <View style={styles.field}>
          <Text>Notes: </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setComments(val)}
            />
        </View>
        <View style={styles.button}>
         <Button title='Add Item' onPress={pressHandler}/>
        </View>
      </View>
      </ScrollView>
    </TouchableWithoutFeedback>
    </View>
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