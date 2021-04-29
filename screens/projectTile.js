import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button, Alert, TouchableHighlight } from 'react-native';
import {projectStore} from './../ProjectStore'

function ProjectTile ( params) {

  return (
      <View>
          <TouchableHighlight onPress={console.log("PRESSED")}>
            <Text>{params["project"]["name"]}</Text>
          </TouchableHighlight>
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
export default ProjectTile