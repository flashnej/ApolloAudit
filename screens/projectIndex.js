import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { observer } from 'mobx-react';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import {projectStore} from './../ProjectStore'
import Logo from '../assets/Logo.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler';

function ProjectIndex({ route, navigation, navigation: { setParams } }) {

  let widthArr = [200, 40, 100, 110, 100, 110, 60, 300]

    const pressHandler = () => {
        navigation.navigate('NewItemForm')
    }

    if (!projectStore.auditDetails.lineItems) {
      projectStore.auditDetails.tableHeaders = ["Location", "Hrs/Yr", "Existing Code", "Qty", "Proposed Code", "Qty", "Volt", "Notes"]
      projectStore.auditDetails.lineItems = []
    }

    const incrementExistingQty = (data, lineNumber, cellIndex) => (
      <View style={styles.qty}>
      <TouchableOpacity onPress={() => decrease(lineNumber, cellIndex)}>
          <Text style={styles.downIncrement}>-  </Text>
      </TouchableOpacity>
      <Text>{data}</Text>
      <TouchableOpacity onPress={() => increase(lineNumber, cellIndex)}>
        <Text style={styles.upIncrement}>  +</Text>
      </TouchableOpacity>
      </View>
    )

    const incrementSuggestedQty = (data, lineNumber, cellIndex) => (
      <View style={styles.qty}>
      <TouchableOpacity onPress={() => decrease(lineNumber, cellIndex)}>
          <Text style={styles.downIncrement}>-  </Text>
      </TouchableOpacity>
      <Text>{data}</Text>
      <TouchableOpacity onPress={() => increase(lineNumber, cellIndex)}>
        <Text style={styles.upIncrement}>  +</Text>
      </TouchableOpacity>
      </View>
    )

    const increase = (lineNumber, cellIndex) => {
      projectStore.auditDetails.lineItems[lineNumber][cellIndex]++
    }

    const decrease = (lineNumber, cellIndex) => {
      projectStore.auditDetails.lineItems[lineNumber][cellIndex]--
    }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
       <Image source={Logo}/>
      </View>
      <Text>{projectStore.auditDetails.utility}</Text>
      <Text> {projectStore.auditDetails.projectName}</Text>
      <ScrollView horizontal={true}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
          <Row data={projectStore.auditDetails.tableHeaders} widthArr={widthArr} style={styles.header} textStyle={styles.text}/>
          <ScrollView verticle={true}>
            {
              projectStore.auditDetails.lineItems.map((lineItem, lineNumber) => (
                <TableWrapper key={lineNumber} style={lineNumber%2 ? styles.lightRow : styles.row}>
                  {
                    lineItem.map((cellData, cellIndex) => (
                      <Cell key={cellIndex} data={ cellIndex === 3 ? incrementExistingQty(cellData, lineNumber, cellIndex) : cellIndex === 5 ? incrementSuggestedQty(cellData, lineNumber, cellIndex) : cellData} width={widthArr[cellIndex] }/>
                    ))
                  }
                </TableWrapper>
              ))
            }
          </ScrollView>
        </Table>
      </ScrollView>
      <View style={styles.button}>
      <Button title='Add item' onPress={pressHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'blue',
  },
  header: {
    height: 50,
    backgroundColor: '#537791'
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'grey'
  },
  lightRow: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  qty: {
    flexDirection: 'row',
  },
  downIncrement: {
    color: 'red',
    fontSize: 30,
  },
  upIncrement: {
    color: 'green',
    fontSize: 30,
  },
});
export default observer(ProjectIndex)