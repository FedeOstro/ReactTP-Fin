import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { fetchRecipes } from '../../lib/fetchPlatos';
import { useEffect, useState } from 'react';


export default function Home() {
    const [platos, setPlatos] = useState([])

    useEffect(() => {
        const fetchPlatos = async () =>{
            try{
                const plates = await fetchRecipes()
                setPlatos(plates)
            }catch(error){
                console.log(error)
            }
        }
        fetchPlatos()
    })    
  
    return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});