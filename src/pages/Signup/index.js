import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { signupStyles as styles } from "./signupStyles";
import { useNavigation } from "@react-navigation/native";
import { createUser } from "../../api/user";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e);
  };
  const handleEmail = (e) => {
    setEmail(e);
  };
  const handlePassword = (e) => {
    setPassword(e);
  };

  const navigation = useNavigation();
  const handleSignOut = async () => {
    const fetchCreateUser = await createUser(email, password, name);
    if (fetchCreateUser.status === 200) {
      navigation.navigate("Signin");
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Junte-se a nós</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput
          placeholder="Digite seu Nome"
          style={styles.input}
          onChangeText={handleName}
        />

        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite seu Email"
          onChangeText={handleEmail}
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          onChangeText={handlePassword}
          placeholder="Digite sua senha"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
