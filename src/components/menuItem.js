import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const MenuItem = ({ plato, onDetail, onDelete }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: plato.image }} style={styles.image} />
    <Text style={styles.name}>{plato.title}</Text>
    <Button title="Ver Detalle" onPress={() => onDetail(plato.id)} />
    <Button title="Eliminar" onPress={() => onDelete(plato.id)} />
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MenuItem;
