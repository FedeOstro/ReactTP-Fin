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
    marginTop: -20,
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: 412,
    marginLeft: -20,
    padding: 15
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 17
  },
  buttonContainer: {

  },
});

export default Header;