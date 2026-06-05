import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function Jogo(props) {
  const [mostrarDescricao, setMostrarDescricao] = useState(true);

  function alternarDescricao() {
    setMostrarDescricao(!mostrarDescricao);
  }

  //Natan é muito moggado sem aura nenhuma

  return (
    <View style={styles.card}>
      <Image source={props.imagem} style={styles.imagem} />

      <Text style={styles.nome}>{props.nome}</Text>

      <Text>
        <Text style={styles.titulo}>Categoria: </Text>
        {props.categoria}
      </Text>

      <Text>
        <Text style={styles.titulo}>Plataforma: </Text>
        {props.plataforma}
      </Text>

      <Text>
        <Text style={styles.titulo}>Lançamento: </Text>
        {props.data}
      </Text>

      {mostrarDescricao && (
        <Text>
          <Text style={styles.titulo}>Descrição: </Text>
          {props.descricao}
        </Text>
      )}

      <Button
        title={mostrarDescricao ? 'Esconder descrição' : 'Mostrar descrição'}
        onPress={alternarDescricao}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },

  imagem: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  titulo: {
    fontWeight: 'bold',
  },
});