import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import {projectStore} from './../ProjectStore'

function Export ({ navigation }) {

    const pressHandler = () => {
        console.log("Exporting to Excel...")
        fetch('http://localhost:3000/api/v1/projects')
        .then((response)=> response.json())
        .then((json) => {
          console.log(json["hi"])
          console.log(projectStore.auditDetails)
          // Alert.alert("Alert Title", json)
        })
    }

  return (
      <View>
         <Button title='Export' onPress={pressHandler}/>
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
export default Export