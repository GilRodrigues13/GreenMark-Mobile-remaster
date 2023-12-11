import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { styles } from './payStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Pay() {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const loadTotalPrice = async () => {
      try {
        const cartData = await AsyncStorage.getItem('cart');
        if (cartData) {
          const cart = JSON.parse(cartData);
          const total = cart.reduce((acc, product) => acc + product.price, 0);
          setTotalPrice(total);
        }
      } catch (error) {
        console.error('Erro ao carregar carrinho do AsyncStorage', error);
      }
    };

    loadTotalPrice();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Text style={styles.textTotal}>Total a pagar:</Text>
        <Text style={styles.textPrice}>R$ {totalPrice.toFixed(2)}</Text>
      </View>
      <Image source={require('../../assets/qrcode.jpg')} style={styles.qrCode} />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonPay} 
      onPress={() => {
          Alert.alert('Pagamento realizado');
          navigation.navigate('Home');
        }}>
        <Text style={styles.textButtonPay}>Pagar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonPay} 
      onPress={() => {
          
          navigation.navigate('Historico');
        }}>
        <Text style={styles.textButtonPay}>Histórico</Text>
      </TouchableOpacity>
      </View>
    
    </View>
  );
}
