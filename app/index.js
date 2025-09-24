// Tela inicial com campos para nome, URL do avatar e um botão para navegar.
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const [nome, setNome] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const router = useRouter();

  const irParaPerfil = () => {
    router.push({ pathname: '/perfil', params: { nome, avatarUrl } });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="URL da imagem do avatar"
        value={avatarUrl}
        onChangeText={setAvatarUrl}
      />
      <Button title="Ir para o Perfil" onPress={irParaPerfil} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});