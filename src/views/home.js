import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Header from '../components/header';
import { MenuContext } from '../context/MenuContext ';

export default function Home({ navigation }) {
  const { menu, removePlato } = useContext(MenuContext);

  const handleDetail = (id) => {
    navigation.navigate('Detalle', { id });
  };

  const handleDelete = (id) => {
    removePlato(id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleDetail(item.id)} style={styles.detailButton}>
          <Text style={styles.buttonText}>Detalle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Inicio" navigation={navigation} />
      <Text style={styles.text}>Bienvenido a la App de Comidas</Text>
      {menu.length > 0 ? (
        <FlatList
          data={menu}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text>No hay platos en el menú</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  detailButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
