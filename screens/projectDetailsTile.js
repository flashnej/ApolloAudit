import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {projectStore} from './../ProjectStore'

function projectDetailsTile ({ project, navigation }) {
    
    const pressHandler = () => {
        navigation.navigate('NewProject')
    }

  return (
      <View>
         <Text onPress={pressHandler}>{project.name}</Text>
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
export default projectDetailsTile