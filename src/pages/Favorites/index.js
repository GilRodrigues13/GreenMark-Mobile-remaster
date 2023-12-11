import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './favoritesStyles';


export default function Favorites({ route }) {
  const navigation = useNavigation();
  const favorites = route.params?.favorites || [];

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.textVazio}>Nenhum item favorito</Text>
      ) : (
        <ScrollView style={{ marginBottom: 102 }}>
          {favorites.map((product, index) => (
            <View key={product.id || index} style={styles.productContainer}>
              <Image
                source={{ uri: product.thumbnail }}
                style={styles.imagemProduto}
              />
              <Text>{product.title}</Text>
              <Text>Preço: R$ {product.price}</Text>
            </View>
          ))}
        </ScrollView>
      )}

      {/* ... Seu código existente ... */}
    </View>
  );
}
