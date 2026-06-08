import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function Estatisticas() {
  const [curtir, setCurtir] = useState(false);
  const [curtida, setCurtida] = useState("🤍");

  const [favorito, setFavorito] = useState(false);
  const [favoritar, setFavoritar] = useState("⭐");

  const [compartilhamento, setCompartilhamento] = useState(0);

  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  function CurtirDescurtir() {
    if (!curtir) {
      setCurtir(true);
      setCurtida("❤️");
    } else {
      setCurtir(false);
      setCurtida("🤍");
    }
  }

  function FavoritarDesfavoritar() {
    if (!favorito) {
      setFavorito(true);
      setFavoritar("🌟");
    } else {
      setFavorito(false);
      setFavoritar("⭐");
    }
  }

  function AdicionarComentario() {
    if (comentario.trim() !== '') {
      setComentarios([...comentarios, comentario]);
      setComentario('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.botoes}>
        <Button
          title={curtida}
          onPress={CurtirDescurtir}
        />

        <Button
          title={`🔄 ${compartilhamento}`}
          onPress={() =>
            setCompartilhamento(compartilhamento + 1)
          }
        />

        <Button
          title={favoritar}
          onPress={FavoritarDesfavoritar}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite um comentário..."
        value={comentario}
        onChangeText={setComentario}
      />

      <Button
        title="💬 Comentar"
        onPress={AdicionarComentario}
      />

      {comentarios.map((item, index) => (
        <Text key={index} style={styles.comentario}>
          💬 {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },

  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },

  comentario: {
    marginTop: 5,
    fontSize: 14,
  },
});
