import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/home';
import Buscador from './src/views/buscador';
import Detalle from './src/views/detalle';
import { MenuProvider } from './src/context/MenuContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Buscador" component={Buscador} />
          <Stack.Screen name="Detalle" component={Detalle} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
