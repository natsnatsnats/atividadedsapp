import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';

export default function Jogo(props) {
  const [mostrarDescricaoCompleta, setMostrarDescricaoCompleta] = useState(false);

  function alternarDescricao() {
    setMostrarDescricaoCompleta(!mostrarDescricaoCompleta);
  }

  const descricaoPreview = props.descricao.length > 100 
    ? props.descricao.substring(0, 100) + '...' 
    : props.descricao;

  return (
    <View style={styles.card}>
      <View style={styles.videoContainer}>
        <Image source={props.imagem} style={styles.imagem} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.nome}>{props.nome}</Text>
          <Text style={styles.data}>{props.data}</Text>
        </View>

        <Text style={styles.infoTexto}>
          🎮 {props.categoria} • 💻 {props.plataforma}
        </Text>

        <View style={styles.descricaoContainer}>
          <Text style={styles.descricao}>
            {mostrarDescricaoCompleta ? props.descricao : descricaoPreview}
            {!mostrarDescricaoCompleta && props.descricao.length > 100 && (
              <Text style={styles.maisTexto}> </Text>
            )}
          </Text>
          
          {props.descricao.length > 100 && (
            <TouchableOpacity onPress={alternarDescricao}>
              <Text style={styles.botaoDescricao}>
                {mostrarDescricaoCompleta ? ' ver menos' : ' ver mais'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: 700, // Largura FIXA como um tweet (500px)
    maxWidth: '90%', // Em telas menores, ocupa 90%
    marginVertical: 8,
    borderRadius: 16, // Bordas mais arredondadas igual Twitter
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  videoContainer: {
    position: 'relative',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },

  contentContainer: {
    padding: 16, // Mais padding igual Twitter
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },

  data: {
    fontSize: 13,
    color: '#666',
    marginLeft: 8,
  },

  infoTexto: {
    fontSize: 14,
    color: '#536471', // Cor do texto do Twitter
    marginBottom: 12,
    lineHeight: 18,
  },

  descricaoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  descricao: {
    fontSize: 15, // Tamanho do texto igual Twitter
    color: '#0f1419', // Cor do texto do Twitter
    lineHeight: 20,
    flexShrink: 1,
  },

  botaoDescricao: {
    fontSize: 14,
    color: '#1d9bf0', // Azul do Twitter
    fontWeight: '500',
  },

  maisTexto: {
    fontSize: 14,
    color: '#333',
  },
});