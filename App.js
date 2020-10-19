import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home.js'
import NewProject from './screens/newProject.js'
import ProjectIndex from './screens/projectIndex.js'
import NewItemForm from './screens/newItemForm.js'
import { observer } from 'mobx-react';
import Logo from './assets/Logo.jpg'
import {projectStore} from './ProjectStore'
import Export from './screens/export'

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default observer(App)