import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ title }) => {
  return (
    <View> 

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFA07A', // Cambia el color si deseas un diseño diferente
    padding: 10,
    elevation: 4, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default Header;
