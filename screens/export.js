import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Export ({ navigation }) {

    const pressHandler = () => {
        console.log("Exporting to Excel...")
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