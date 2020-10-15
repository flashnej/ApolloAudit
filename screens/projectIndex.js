import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import { observer } from 'mobx-react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {projectStore} from './../ProjectStore'
import Logo from '../assets/Logo.jpg'
import TableRow from './TableRow'

function ProjectIndex({ route, navigation, navigation: { setParams } }) {

  let widthArr = [200, 40, 100, 110, 100, 40, 60]

    const pressHandler = () => {
        navigation.navigate('NewItemForm')
    }

    if (!projectStore.auditDetails.lineItems) {
      projectStore.auditDetails.tableHeaders = ["Location", "Hrs/Yr", "Existing Code", "Qty", "Proposed Code", "Qty", "Volt", "Comments"]
      projectStore.auditDetails.lineItems = []
    }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
       <Image source={Logo}/>
      </View>
      <Text> {projectStore.auditDetails.projectName}</Text>
      <ScrollView horizontal={true}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
          <Row data={projectStore.auditDetails.tableHeaders} widthArr={widthArr} style={styles.header} textStyle={styles.text}/>
          <ScrollView verticle={true}>
            {
              projectStore.auditDetails.lineItems.map((lineItem, index) => (
                <TableRow
                  key={index}  
                  lineItem={lineItem}
                  widthArr={widthArr}
                  index={index}
                />
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
    backgroundColor: 'white'
  }
});
export default observer(ProjectIndex)