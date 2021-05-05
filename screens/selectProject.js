import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import {projectStore} from './../ProjectStore'
import ProjectTile from './projectTile'

function SelectProject({ route, navigation }) {
  const [ projectsArray, setProjectsArray ] = useState([])
  const [ redirect, setRedirect ] = useState(false)
  const [ selectedProject, setSelectedProject ] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${route.params.user}`)
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

  const pressHandler = (projectUpdate) => {
    setSelectedProject(projectUpdate)
    setRedirect(true)
  }

  if(redirect === true) {
    navigation.navigate('NewProject', {project: selectedProject})
  }

  let projectNames
  if (projectsArray !== []) {
    projectNames = projectsArray.map((project, index) => {
        return <ProjectTile 
              key={project["id"]}
              project={project}
              pressHandler={(projectUpdate) => pressHandler(projectUpdate)}
            />
    })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
          {projectNames}
          <TouchableOpacity style={styles.button} onPress={()=>pressHandler({newProject: true})}>
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
});

export default SelectProject