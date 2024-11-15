import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Button title="Buscar Comida" onPress={() => navigation.navigate('Buscador')} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#16c3ff', 
    marginTop: -20, // Si necesitas mover el encabezado hacia arriba
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: '100%', // Esto hace que el contenedor ocupe el 100% del ancho de la pantalla
    paddingHorizontal: 20, // Añade un padding horizontal para dar espacio a los elementos
    paddingVertical: 10, // Ajusta el padding vertical
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 0, // Puedes ajustar el margen si lo necesitas
  },
  buttonContainer: {
    // Si deseas personalizar el botón, puedes añadir estilos aquí
  },
});

export default Header;
