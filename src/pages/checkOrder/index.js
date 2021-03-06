import React, { useState } from 'react';
import { Text, Alert, View, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { MainContainer, Title, InputText, PersonalButton, HeaderCheckout } from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import anim from '../../assets/4914-cart-checkout-fast.gif';

import { AsyncStorage } from 'react-native';

export default function CheckOrder() {
    const route = useRoute();
    const data = route.params;
    const navigation = useNavigation();
    console.log(data)

    const[quantity, setQuantity] = useState("");

    async function setCart() {
        const response = await AsyncStorage.getItem("cart")
        if ( JSON.parse(response) ) {
            const cart_storage = await AsyncStorage.getItem("cart");
            const array = JSON.parse(cart_storage).data
            data.ID = Number( (array.length) + 1 )
            array.push(data)

             await AsyncStorage.setItem("cart", JSON.stringify( { data : array } ))
            // console.log(response)
        } else {
            data.ID = 0
            const new_data = { data: [ data ] }
            await AsyncStorage.setItem("cart", JSON.stringify(new_data))
        }
    }

    async function getlength() {
        const cart_storage = await AsyncStorage.getItem("cart");
        if ( JSON.parse(cart_storage) ) {
            return JSON.parse(cart_storage).data.length
        } else {
            return 0
        }
        
    }

    function checkQuantity() {
        if (quantity == "NaN") {
            Alert.alert("Quantidade inválida", "Por favor, tente novamente")
        } else {
            if ( Number(quantity) < Number(data.total_price)) {
                Alert.alert("Quantidade inválida", "A quantidade inserida é menor doque a deve ser paga!")
            } else {
                const transshipment = Number(quantity) - Number(data.total_price)
                data.transshipment = transshipment
                // navigation.navigate("OrderSucess", data)
                setCart().then(resolve => {
                    getlength().then(response => {
                        navigation.navigate("Home", { username: data.username, orders: response + 1 })
                        console.log(response + 1)
                    })
                })
                
            }
        }
    }

    function doesntTransshipment() {
        data.transshipment = 0
        // navigation.navigate("OrderSucess", data)
        setCart()
        getlength().then(response => {
            navigation.navigate("Home", { username: data.username, orders: response + 1 })
            console.log(response + 1)
        })
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.containerTitle}>
                    Revise seu pedido!
                </Text>
                <Text style={styles.pageDesc}>
                    Verifique se está tudo certo !
                </Text>
            </View>

            <Image source={anim} style={{ width: 100, height: 100 }} />

            <View style={styles.inline}>
                <Text style={styles.content}>
                    Tamanho:
                </Text>
                <Text style={styles.value}>
                    {data.vol}
                </Text>

                <Text style={styles.content}>
                    Adicionais:
                </Text>
                <Text style={styles.value}>
                    {data.addoptions}
                </Text>

                {/*<TextInput placeholder="Troco para? (Coloque a quantia)" keyboardType="numeric" value={quantity} onChangeText={(text) => setQuantity(text)} style={styles.textinput} />
                <TouchableOpacity onPress={checkQuantity}>
                    <Text style={styles.button}>
                        <Feather name="check" size={16} color="#ffff" />
                    </Text>
                </TouchableOpacity>*/}
            </View>
            
            <TouchableOpacity onPress={doesntTransshipment}>
                <Text style={styles.button}>
                    Adicionar no carrinho
                </Text>
            </TouchableOpacity>
        </View>
        
    )
}