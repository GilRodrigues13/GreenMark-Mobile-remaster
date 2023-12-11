import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { historicoStyles } from './HistoricoStyles';
import { useNavigation } from '@react-navigation/native'; 


export default function Historico() {
 const navigation = useNavigation();
    
  const historico = [
    {
      products: [
        { id: 1, title: 'Kombu Alga Marinha', price: 39.99 },
        { id: 3, title: 'Biscoito Amanteigado', price: 5.99 },
      ],
      date: '01/11/2023',
      time: '10:30 AM',
    },
    {
      products: [
        { id: 2, title: 'Feijão Carioca', price: 13.65 },
        { id: 4, title: 'Sabão Em Pó Omo', price: 24.89}
      ],
      date: '02/11/2023',
      time: '03:45 PM',
    },
  ];

  return (
    <View style={historicoStyles.container}>
      <View style={historicoStyles.historicoContainer}>
        {historico.map((item, index) => (
          <View key={index} style={historicoStyles.historicoItem}>
            <Text style={historicoStyles.dateText}>Data: {item.date}</Text>
            <Text style={historicoStyles.timeText}>Hora: {item.time}</Text>
            {item.products.map((product) => (
              <View key={product.id} style={historicoStyles.productContainer}>
                <Text style={historicoStyles.productTitle}>{product.title}</Text>
                <Text style={historicoStyles.productPrice}>Price: {product.price}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
      <View style={historicoStyles.buttonContainer}>
      </View>
      <View style={historicoStyles.buttonContainer}>
        <TouchableOpacity
          style={historicoStyles.button}
          onPress={() => navigation.navigate('Pay') }
        >
          <Text style={historicoStyles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
