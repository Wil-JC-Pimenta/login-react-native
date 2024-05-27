import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação, por exemplo, com uma API
    if (email === 'usuario@email.com' && password === '123456') {
      setIsLoggedIn(true);
    } else {
      Alert.alert('Login failed', 'Please check your credentials.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <>
          <Text style={styles.title}>Você está logado! {email}!</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Image
            source={require('./assets/logo.jpg')}
            style={styles.logo}
          />
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button
            title="Login"
            onPress={handleLogin}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
  },
});

