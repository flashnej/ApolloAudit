import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import {projectStore} from './../ProjectStore'
import ProjectTile from './projectTile'
import SelectPicker from 'react-native-form-select-picker'

function SelectProject({ route, navigation }) {
  const [ projectsArray, setProjectsArray ] = useState([])
  const [ redirect, setRedirect ] = useState(false)

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

  let handleProjectUpdate = (projectUpdate) => {
      projectStore.auditDetails.projectName = projectUpdate["name"]
      projectStore.auditDetails.clientName
      projectStore.auditDetails.contactName = projectUpdate["contact_name"]
      projectStore.auditDetails.phoneNumber = projectUpdate["phone_number"]
      projectStore.auditDetails.address = projectUpdate["address"]
      projectStore.auditDetails.city = projectUpdate["city"]
      projectStore.auditDetails.sqFt = projectUpdate["sq_ft"]
      projectStore.auditDetails.utility = projectUpdate["utility"]
      projectStore.auditDetails.acctNum = projectUpdate["account_number"]
      setRedirect(true)
  }

  const pressHandler = () => {
    setRedirect(true)
  }

  if(redirect === true) {
    navigation.navigate('NewProject')
  }

  let projectNames
  if (projectsArray !== []) {
    projectNames = projectsArray.map((project, index) => {
        return <View >
            <ProjectTile 
              key={project["id"]}
              project={project}
              handleProjectUpdate={handleProjectUpdate}
            />
        </View>
    })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
          {projectNames}
          <TouchableOpacity style={styles.button} onPress={pressHandler}>
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