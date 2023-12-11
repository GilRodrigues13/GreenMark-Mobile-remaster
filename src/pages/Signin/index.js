import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { signinStyles as styles } from "./signinStyles";
import { authenticate } from "../../api/auth";

export default function Signin() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (validateEmail(email) && validatePassword(password)) {
      const authenticated = await authenticate(email, password);

      if (
        authenticated.access_token &&
        authenticated.email &&
        authenticated.password &&
        authenticated.name &&
        authenticated.id
      ) {
        navigation.navigate("Home");
      } else {
        Alert.alert("Erro", "Email ou senha inválidos");
      }
    } else {
      Alert.alert("Erro", "Email ou senha inválidos");
    }
  };

  const validateEmail = (email) => {
    // Adicione sua lógica de validação de email aqui
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  /*
  const isValidUser = (email, password) => {

    const validUsers = [
      { email: 'gil@gmail.com', password: '123456' },
    
    ];

    
    return validUsers.some(user => user.email === email && user.password === password);
  };
*/
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite seu Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={styles.registerText}
          >
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
