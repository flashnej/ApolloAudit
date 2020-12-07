import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home.js'
import NewProject from './screens/newProject.js'
import ProjectIndex from './screens/projectIndex.js'
import NewItemForm from './screens/newItemForm.js'
import { observer } from 'mobx-react';
import {projectStore} from './ProjectStore'
import Export from './screens/export'
import EditLine from './screens/editLine'
import SelectProject from './screens/selectProject'

const Stack = createStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="NewProject"
          component={NewProject}
        />
        <Stack.Screen
          name="ProjectIndex"
          component={ProjectIndex}
          options={{ headerRight: props => <Export data={projectStore}/>}}
        />
      <Stack.Screen
          name="NewItemForm"
          component={NewItemForm}
        />
        <Stack.Screen
          name="EditLine"
          component={EditLine}
        />
        <Stack.Screen
          name="SelectProject"
          component={SelectProject}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default observer(App)