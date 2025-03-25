import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Componente que representa um produto no catálogo
const Card = ({ title, preco, image }) => {
  const navigation = useNavigation();

  // Função para navegar até a tela de detalhes, passando os dados do produto
  const abrirDetalhes = () => {
    navigation.navigate('Detalhes', { title, preco, image });
  };

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>R$ {preco}</Text>
      <TouchableOpacity style={styles.button} onPress={abrirDetalhes}>
        <Text style={styles.buttonText}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  card: {
    width: '45%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    marginVertical: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Card;
