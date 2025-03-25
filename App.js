import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
import Card from './Card';
import Detalhes from './Detalhes';
import BannerImage from './assets/banner.png';
import { ScrollView } from 'react-native-gesture-handler';


// Criação da navegação entre as telas
const Stack = createStackNavigator();

// Imagens dos produtos
const images = {
  blusaLorena: require('./assets/blusalorena.png'),
  blusaBeatriz: require('./assets/blusabeatriz.png'),
  calcaVictoria: require('./assets/calcavictoria.png'),
  vestidoLaura: require('./assets/vestidolaura.png'),
};

// Tela principal do app
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beanna</Text>
      <Image source={BannerImage} style={styles.banner} />
      <Menu />
      <ScrollView>
      {/* Grade de produtos exibidos na tela principal */}
      <View style={styles.grid}>
        <View style={styles.row}>
          <Card title="Blusa Lorena" preco="69,90" image={images.blusaLorena} />
          <Card title="Blusa Beatriz" preco="65,00" image={images.blusaBeatriz} />
        </View>
        <View style={styles.row}>
          <Card title="Calça Victoria" preco="140,00" image={images.calcaVictoria} />
          <Card title="Vestido Laura" preco="99,90" image={images.vestidoLaura} />
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

// Configuração do app com navegação
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos do app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  banner: {
    width: 300,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  grid: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
});
