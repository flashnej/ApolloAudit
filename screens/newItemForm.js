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
    const [ volt, setVolt ] = useState("")
    const [ comments, setComments ] = useState("")

    const existingOptions = projectStore.existingOptions

    let proposedOptions = []
    if (existingCode === "") {
      proposedOptions = [""]
    } else if (existingCode === "A-Line, 40/60W equivalent"){
      proposedOptions = ["A-Line LED"]
    } else if (existingCode === "A-Line 75/100W equivalent") {
      proposedOptions = ["A-Line LED"]
    } else if (existingCode === "PAR16 or MR16 (pin or GU10 base type)") {
      proposedOptions = ["PAR16 or MR16 LED"]
    } else if (existingCode === "PAR20/R20") {
      proposedOptions = ["PAR20/R20 LED"]
    } else if (existingCode === "PAR30 or BR30 or R30") {
      proposedOptions = ["PAR30 or BR30 or R30 LED"]
    } else if (existingCode === "PAR38 or BR40 or R40") {
      proposedOptions = ["PAR38 option 1 LED"]
    } else if (existingCode === "G24") {
      proposedOptions = ["G24 LED"]
    } else if (existingCode === "G23") {
      proposedOptions = ["G23 LED"] 
    } else if (existingCode === "Decorative (Globe, Candle, B-shapes)") {
      proposedOptions = ["Decorative (Globe, Candle, B-shapes) LED"]
    } else if (existingCode === "T8 4', 3' & 2' (UL Type A replacement ONLY)") {
      proposedOptions = ["T8 LED 4', 3' & 2' (UL Type A replacement ONLY)"]
    } else if (existingCode === "T8 8' (UL Type A replacement ONLY)") {
      proposedOptions = ["T8 LED 8' (UL Type A replacement ONLY)"]
    } else if (existingCode === "T5 4' (UL Type A replacement ONLY)") {
      proposedOptions = ["T5 LED 4' (UL Type A replacement ONLY)"]
    } else if (existingCode === "U-Bend 4' (UL Type A replacement ONLY") {
      proposedOptions = ["U-Bend LED 4' (Type A replacement ONLY"]
    } else if (existingCode === "Down-light kit") {
      proposedOptions = ["Down-light kit less than 25W", "Down-light kit greater than 25W"]
    } else if (existingCode === "1x4, 2x2, 2x4 Troffer") {
      proposedOptions = ["1x4, 2x2, 2x4 LED Troffer", "1x4, 2x2, 2x4 LED Troffer w/ Controls", "1x4, 2x2, 2x4 LED Troffer w/ Controls Retrofit", "1x4, 2x2, 2x4 LED Troffer Retrofit"]
    } else if (existingCode === "High/Low Bay") {
      proposedOptions = ["High/Low Bay LED 20-99W", "High/Low Bay LED 20-99W w/ Controls","High/Low Bay LED 100-199W","High/Low Bay LED 100-199W w/ Controls","High/Low Bay LED greater than 200W","High/Low Bay LED greater than 200W w/ Controls"]
    } else if (existingCode === "Stairwell Fixture") {
      proposedOptions = ["Low Output LED Stairwell w/ Sensor less than 55W", "Mid Output LED Stairwell w/ Sensor more than 55W"]
    } else if (existingCode === "Parking Garage & Canopy") {
      proposedOptions = ["Parking Garage & Canopy LED 20-99W", "Parking Garage & Canopy LED 100-199W", "Parking Garage & Canopy LED greater than 200W", "Parking Garage & Canopy LED 20-99W w/ Control", "Parking Garage & Canopy LED 100-199W w/ Control", "Parking Garage & Canopy LED greater than 200W w/ Control"]
    } else if (existingCode === "Exterior") {
      proposedOptions = ["Exterior LED 20-99W", "Exterior LED 100-199W", "Exterior LED greater than 200W", "Exterior LED 20-99W w/ Control", "Exterior LED 100-199W w/ Control", "Exterior LED greater than 200W w/ Control", "Mogul Exterior 175W", "Mogul Exterior 250W", "Mogul Exterior 400W"]
    } else if (existingCode === "Strip/Wrap") {
      proposedOptions = ["LED Strip/Wrap", "TLED/Balast Replacement"]
    } else if (existingCode === "Mogul Interior High Bay") {
      proposedOptions = ["LED HID Replacement", "LED High Bay Replacement Fixture"]
    } else if (existingCode === "Mogul Interior Low Bay") {
      proposedOptions = ["LED Mogul Low Bay", "LED Mogul 175W Equivalent", "LED Mogul 250W Equivalent", "LED Mogul 400W Equivalent", "LED Low Bay New Fixture"]
    } else if (existingCode === "Mogul Exterior") {
      proposedOptions = ["Mogul Exterior 175W", "Mogul Exterior 250W", "Mogul Exterior 400W"]
    } else if (existingCode === "Custom") {
      proposedOptions = ["See Notes"]
    }

    const voltOptions = ["120 / 277", "480"]

    const pressHandler = ()=> {
      if (location != "" || existingCode != "" || proposedCode != "") {
        projectStore.auditDetails.lineItems.push([location, hours, existingCode, existingQty, proposedCode,proposedQty, volt, comments, ""])
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
            onChangeText={(val) => setExistingQty(parseInt(val))}
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
            onChangeText={(val) => setProposedQty(parseInt(val))}
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