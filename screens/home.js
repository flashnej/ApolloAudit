import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {projectStore} from './../ProjectStore'

function Home ({ navigation }) {

    const pressHandler = () => {
        navigation.push('NewProject')
    }
  return (
    <View style={styles.container}>
      <Text>User Email:</Text>
      <TextInput
        style={styles.input}
        defaultValue= {projectStore.auditDetails.useremail}
        onChangeText={(val) => projectStore.auditDetails.useremail= val} />
        <View style={styles.button}>
         <Button title='Start a Project' onPress={pressHandler}/>
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
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    width: 200,
  },
});
export default observer(Home)