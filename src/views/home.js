import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Button, ScrollView } from 'react-native';
import { useMenu } from '../context/MenuContext';  
import Header from '../components/header';

export default function Home({ navigation }) {
  const { menu, removePlato } = useMenu(); 

  const handleDetail = (id) => {
    navigation.navigate('Detalle', { id });
  };

  const handleDelete = (id) => {
    removePlato(id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
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
      <Text style={styles.textTitle}>Bienvenido a la App de Comidas</Text>
      <ScrollView>
      {menu.length > 0 ? (
        <View>
          <Text style={styles.textoDetalle}>Precio Total: </Text>
          <Text style={styles.textoDetalle}>Health Score: </Text>
          <FlatList style={styles.comidas} data={menu} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
        </View>
      ) : (
        <Text style={styles.textoNoHay}>No hay platos en el menú</Text>
      )}
      </ScrollView>
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

    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  itemImage: {
    width: 200,
    height: 170,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 15
  },
  itemTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  detailButton: {
    backgroundColor: '#007BFF',
    width: 100,
    height: 35,
    borderRadius: 8,
    fontSize: 18,
    padding: 8,
    paddingLeft: 26
  },
  deleteButton: {
    backgroundColor: '#fd4141',
    width: 100,
    height: 35,
    borderRadius: 8,
    fontSize: 18,
    padding: 8,
    paddingLeft: 23
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  textTitle: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#1da1f7'
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 17 
  },
  textoNoHay: {
    marginTop: 30,
    textAlign: 'center'
  },
  textoDetalle: {
    fontSize: 16,
    marginBottom: 10
  },
  comidas: {
    marginTop: 20
  }
});
