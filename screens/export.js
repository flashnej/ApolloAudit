import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import {projectStore} from './../ProjectStore'

function Export ({ navigation }) {

    const pressHandler = () => {
        console.log("Exporting to Excel...")
        fetch('http://localhost:3000/api/v1/projects', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( projectStore.auditDetails )
        })
        .then((response)=> response.json())
        .then((json) => {
          console.log(json["hi"])
          // console.log(projectStore.auditDetails)
          Alert.alert(
            "Project Exported",
            "Cehck email address provided",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
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