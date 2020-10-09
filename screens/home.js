import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {projectStore} from './../ProjectStore'

function Home ({ navigation }) {

    const pressHandler = () => {
        navigation.push('NewProject')
    }
  return (
    <View style={styles.container}>
      <Text>Home!!</Text>
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
  },
  button: {
    backgroundColor: 'blue',
  },
});
export default observer(Home)