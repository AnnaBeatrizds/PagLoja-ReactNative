import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

// Tela de detalhes do produto
const Detalhes = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { title, preco, image } = route.params; // Pegando os dados do produto da navegação

  // Função chamada ao clicar no botão de compra
  const cliqueCompra = () => {
    alert("Produto adicionado ao carrinho");
  };

  return (
    <View style={styles.container}>
      {/* Botão de voltar para a tela principal */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>⬅ Voltar</Text>
      </TouchableOpacity>

      {/* Exibição dos detalhes do produto */}
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>R$ {preco}</Text>
        <Text style={styles.description}>
          Esse é um produto de alta qualidade, perfeito para diversas ocasiões.
        </Text>

        {/* Botão de compra */}
        <TouchableOpacity style={styles.button} onPress={cliqueCompra}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos da página de detalhes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
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

export default Detalhes;
