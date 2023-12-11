import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./homeSyles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllProducts } from "../../api/products";

export default function Home() {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchAllProducts = async () => {
    const fetchedAllProducts = await getAllProducts();
    if (fetchedAllProducts.products) {
      setProducts(fetchedAllProducts.products);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartData = await AsyncStorage.getItem("cart");
        if (cartData) {
          setCart(JSON.parse(cartData));
        }
      } catch (error) {
        console.error("Erro ao carregar o carrinho:", error);
      }
    };

    loadCart();
  }, []);

  const addToCart = async (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      console.log("Produto já existe no carrinho, antes:", cart);

      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      console.log("Produto já existe no carrinho, depois:", updatedCart);

      setCart(updatedCart);

      try {
        await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      } catch (error) {
        console.error("Erro ao salvar o carrinho no AsyncStorage:", error);
      }
    } else {
      console.log("Produto não existe no carrinho, antes:", cart);

      const updatedCart = [...cart, { ...product, quantity: 1 }];
      console.log("Produto não existe no carrinho, depois:", updatedCart);
      setCart(updatedCart);

      try {
        await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      } catch (error) {
        console.error("Erro ao salvar o carrinho no AsyncStorage:", error);
      }
    }
  };

  const removeFromCart = async (productToRemove) => {
    console.log("Antes da remoção:", cart);

    const updatedCart = cart.filter(
      (product) => product.id !== productToRemove.id
    );
    console.log("Depois da remoção:", updatedCart);

    setCart(updatedCart);

    try {
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log("AsyncStorage atualizado com sucesso.");
    } catch (error) {
      console.error("Erro ao salvar o carrinho no AsyncStorage:", error);
    }
  };

  

  const toggleFavorite = async (product) => {
    const isFavorite = favorites.some((item) => item.id === product.id);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((item) => item.id !== product.id);
    } else {
      updatedFavorites = [...favorites, product];
    }

    setFavorites(updatedFavorites);

    try {
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error("Erro ao salvar os favoritos no AsyncStorage:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.productContainerList}
        style={{ marginBottom: 100 }}
      >
        {products.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <Image
              source={{ uri: product.thumbnail }}
              style={{ width: 100, height: 100 }}
            />
            <Text>{product.title}</Text>
            <Text>Preço: R$ {product.price}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => addToCart(product)}
                style={styles.buttonText}
              >
                <Icon name="cart-plus" size={30} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => removeFromCart(product)}
                style={styles.buttonText}
              >
                <Icon name="cart-minus" size={30} color="red" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(product)}>
              <Icon
                name={
                  favorites.some((item) => item.id === product.id)
                    ? "heart"
                    : "heart-outline"
                }
                size={30}
                color="red"
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Favorites", { favorites })}
      >
        <Text>Ver Favoritos</Text>
      </TouchableOpacity>

      <View style={styles.containerBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="home" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Cart", { cart: cart })}
        >
          <Icon name="cart" size={37} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
