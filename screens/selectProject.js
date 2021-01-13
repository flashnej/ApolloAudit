import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import {projectStore} from './../ProjectStore'

function SelectProject({ route, navigation }) {
  const [ projectsArray, setProjectsArray ] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/projects/${route.params.user}`)
    .then((response) => {
        if (response.ok) {
        return response;
        } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw error;
        }
    })
    .then((response) => response.json())
    .then((body) => {
        setProjectsArray(body.projects)
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
    }, []);

    let projectNames = <Text></Text>
    if (projectsArray !== []) {
      projectNames = projectsArray.map((project) => (
        <View onPress={existingPressHandler(project)} key={project.id}>
         <Text>{project.name}</Text>
      </View>
      ))
    }
  
  const newPressHandler = () => (
    navigation.navigate('NewProject')
  )

  const existingPressHandler = (project) => {
    navigation.navigate('NewProject', {key: project.id, project: project})
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
          {projectNames}
          <TouchableOpacity style={styles.button} onPress={newPressHandler}>
           <Text style={styles.buttonText}>Start a Project</Text>
          </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  field: {
    flexDirection:'row',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    width: 200,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
    borderRadius: 7,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '900',
  },
});

export default SelectProject