import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { welcomeStyles as styles } from './styles';


export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <View>
        <Animatable.Image 
          animation="bounceIn"
          duration={1000}
          source={require('../../assets/logo.png')}
          style={{ width: '100%'}}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp"  style={styles.containerForm}>
        <Text style={styles.title}>Green Mart, os melhores produtos estão aqui</Text>
        <Text style={styles.text}>Faça o login para começar</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Signin')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>



    </View>

  );
}

