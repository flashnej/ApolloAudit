import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button, Alert, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {projectStore} from './../ProjectStore'

function ProjectTile ( props ) {
  
  let project = props["project"]

  const pressHandler = ()=> {
    props.handleProjectUpdate(project)
  }


  return (
      <TouchableOpacity onPress={pressHandler} >
        <View>
          <Text>{project["name"]}</Text>
        </View>
      </TouchableOpacity>
      
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