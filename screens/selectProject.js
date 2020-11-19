import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import {projectStore} from './../ProjectStore'
import SelectPicker from 'react-native-form-select-picker'

function SelectProject({ route, navigation }) {
  const [ projectsArray, setProjectsArray ] = useState([])

  const user = projectStore.auditDetails.user

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

    const editProject = (project) => {
      if (project.auditor) {
        projectStore.reset()
        projectStore.auditDetails = project
        projectStore.auditDetails.user = user
        projectStore.auditDetails.newProject = false
        navigation.navigate('EditProject')
      } else {
        projectStore.reset()
        projectStore.auditDetails.user = user
        projectStore.auditDetails.newProject = true
        navigation.navigate('EditProject')
      }
    }

    let projectNames = <Text></Text>

    if (projectsArray.length !== 0) {
        projectNames = projectsArray.map((project, key) => {
            key = key
            return (
                <View>
                    <TouchableOpacity style={styles.existingProject} onPress={() => editProject(project)}>
                        <Text>{project["project_name"]}</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
          <Text>hi</Text>
          {projectNames}
          <TouchableOpacity style={styles.button} onPress={editProject}>
           <Text style={styles.buttonText}>New Project</Text>
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
    backgroundColor: 'blue',
    color: 'black',
    padding: 1,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '900',
  },
  existingProject: {

  },
});

export default SelectProject