// screens/Home.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { fetchMenu } from '../../lib/fetchMenu';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import MenuItem from '../components/menuItem';

export default function Home({ navigation }) {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    const fetchPlatos = async () => {
      try {
        const plates = await fetchMenu();
        setPlatos(plates);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlatos();
  }, []);

  const handleDetail = (id) => {
    navigation.navigate('Detalle', { id });
  };

  const handleDelete = (id) => {
    setPlatos((prevPlatos) => prevPlatos.filter((plato) => plato.id !== id));
  };

  return (
    <View style={styles.container}>
      <Header title="Inicio" />
      <Text style={styles.text}>Bienvenido a la App de Comidas</Text>
      <FlatList
        data={platos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MenuItem plato={item} onDetail={handleDetail} onDelete={handleDelete} />
        )}
      />
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
});
