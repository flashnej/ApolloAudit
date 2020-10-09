import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { observer } from 'mobx-react';
import {projectStore} from './../ProjectStore'

function ProjectIndex({ route, navigation, navigation: { setParams } }) {

    const pressHandler = () => {
        navigation.navigate('NewItemForm')
    }

    if (!projectStore.auditDetails.lineItems) {
      projectStore.auditDetails.lineItems = []
    }

  return (
    <View style={styles.container}>
      <Text> {projectStore.auditDetails.projectName}</Text>
      
      {projectStore.auditDetails.lineItems.map((line) => {
        return (
          <View key={line.key}>
            <Text>{line.location}  {line.existingCode}</Text>
          </View>
        )
      })}

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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
  },
});
export default observer(ProjectIndex)