import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './src/views/home';
import buscador from './src/views/buscador';
import detalle from './src/views/detalle';

const Stack = createNativeStackNavigator() 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={home}
        />         
        <Stack.Screen
          name="Buscador"
          component={buscador}
        /> 
        <Stack.Screen 
          name="Detalle"
          component={detalle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


