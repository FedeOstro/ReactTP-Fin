// components/MenuItem.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function MenuItem({ plato, onDetail, onDelete }) {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: plato.image }} style={styles.image} />
      <Text style={styles.name}>{plato.name}</Text>
      <View style={styles.actions}>
        <Button title="Ver Detalle" onPress={() => onDetail(plato.id)} />
        <Button title="Eliminar" onPress={() => onDelete(plato.id)} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
