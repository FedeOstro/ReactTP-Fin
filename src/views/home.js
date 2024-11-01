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
        console.log(plates); // Verifica que los datos están llegando
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
      <Header title="Inicio" navigation={navigation} />
      <Text style={styles.text}>Bienvenido a la App de Comidas</Text>
      {platos.length > 0 ? (
        <FlatList
          data={platos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MenuItem plato={item} onDetail={handleDetail} onDelete={handleDelete} />
          )}
        />
      ) : (
        <Text>No hay platos disponibles</Text>
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
});
