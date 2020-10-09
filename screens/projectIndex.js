import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {projectStore} from './../ProjectStore'

function ProjectIndex({ route, navigation, navigation: { setParams } }) {
    const [ lineItems, setLineItems ] = useState([])

    const pressHandler = () => {
        navigation.navigate('NewItemForm', { lineItems: lineItems})
    }
  return (
    <View style={styles.container}>
      <Text> {projectStore.projectName}</Text>
      <Text>{lineItems}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
  },
});
export default ProjectIndex