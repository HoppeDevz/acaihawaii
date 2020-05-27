import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, FlatList, AsyncStorage } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import Logo from '../../assets/logo.png'
import NewOrder from '../neworder';
import api from '../../services/api';
import { Feather } from '@expo/vector-icons';

import emptyanim from '../../assets/10223-search-empty.gif';

export default function Cart() {
    const routes = useRoute();
    const data = routes.params;
    const navigation = useNavigation();

    const[cart, setCart] = useState([]);
    const[cartNumber, setCartNumber] = useState(0);
    const[loading, setLoading] = useState(true);

    const[totalPrice, setTotalPrice] = useState(0);

    async function getlength() {
        const cart_storage = await AsyncStorage.getItem("cart");
        if ( JSON.parse(cart_storage) ) {
            return JSON.parse(cart_storage).data.length
        } else {
            return 0
        }
        
        
    }

    async function FinishPayment() {
        const cart_storage = await AsyncStorage.getItem("cart");
        const object = JSON.parse(cart_storage).data
        

        var price_total = 0
        for (var k = 0; k <= object.length; k++ ) {
            if (object[k]) {
                price_total = price_total + Number(object[k].total_price)
            }
        }

        const order_hex = (await api.get("generateKey")).data.hash_key
        console.log(order_hex)

        const userInfo = ( await api.post("accounts/getInfoByUsername", { username: data.username }) ).data
        console.log(userInfo)

        //var order = {
            //data: [ { vol: [ { id: 1, vol: "200ml" } ], addoptions = [ { id: 1, addoptions = [ "Maça", "Banana" ] } ] } ]
        //}

        var order = {
            data: [ { 
                username: data.username,
                order_hex, 
                name: userInfo[0].name, 
                lastname: userInfo[0].lastname, 
                street: userInfo[0].street, 
                neighborhood: userInfo[0].neighborhood,
                number: userInfo[0].number,
                total_price: price_total,               
                vol: [], 
                addoptions: [] 
            } ]
        }

        // create object
        for ( var i = 0; i <= object.length; i ++) {
            if ( object[i] ) {
                
                    order.data[0].vol.push( { id: i, vol: object[i].vol } )
                    order.data[0].addoptions.push( { id: i, addoptions: object[i].addoptions } )
                
            }
        }

        console.log(order);
        navigation.navigate("SelectMethod", { order })
    }

    async function DeleteHandler(id) {
        var new_content = []
        for ( var j = 0; j <= routes.params.cart.data.length; j++) {
            if (routes.params.cart.data[j]) {
                if ( routes.params.cart.data[j].ID !== id ) {
                    new_content.push(routes.params.cart.data[j])
                }
            }
        }

        const new_storage = JSON.stringify( { data: new_content } )
        console.log(new_storage)

        //if (new_storage.data.length > 0) {
            await AsyncStorage.setItem("cart", new_storage)
        //} else {
            //await AsyncStorage.setItem("cart", null)
        //}
        
        
        setCart( JSON.parse(new_storage) )

        getlength().then(response => {
            navigation.navigate("Home", { username:data.username, orders: response })
        })
    }

    useEffect(() => {
        setTimeout(function(){
            if (routes.params.cart.data) {
                setCart(routes.params.cart.data)
                setCartNumber(routes.params.cart.data.length)

                var PriceTotal = 0
                for ( var k = 0; k <= routes.params.cart.data.length; k++) {
                    if (routes.params.cart.data[k]) {
                        PriceTotal = PriceTotal + Number(routes.params.cart.data[k].total_price)
                    }
                } 

                setTotalPrice(Number(PriceTotal))
            }
            
            console.log(PriceTotal)
            setLoading(false)

        },2000)
    },[routes.params.cart.data])


    if (loading) {
        return(
            <View>
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#7159c1" />
                </View>
            </View>
        ) 
    } else {
        if ( cartNumber == 0 ) {
            return(
                <View style={styles.emptyContainer} >
                    <Text style={styles.titleEmpty} >
                        Seu carrinho está vazio!
                    </Text>
                    <Text style={styles.emptyDesc}>
                        Faça alguns pedidos e volte aqui ;)
                    </Text>
                    <Image source={emptyanim} style={{ height: 400, width: 400 }} />
                </View>
            )
        } else {
            return(
                <View>
                    <Text style={styles.titlePage}>
                        Seu carrinho:
                    </Text>

                    <Text style={styles.totalPrice}>
                        Total: R${ Number(totalPrice).toFixed(2)  }
                    </Text>

                <View style={styles.orderList}>
                <FlatList
                data={cart}
                keyExtractor={cart => String(cart.ID)}
                showsHorizontalScrollIndicator={true}
                renderItem={({ item: cart  }) => (
                    <View style={styles.orderContainer} >
                        
                        <View style={styles.infocontainer}>
                            <Text style={styles.textContent}>
                                Tamanho:
                            </Text>
                            <Text style={styles.textValue}>
                                {cart.vol}
                            </Text>

                            <Text style={styles.textContent}>
                                Adicionais:
                            </Text>
                            <Text style={styles.textValue}>
                                {cart.addoptions}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.trashButton} onPress={ () => DeleteHandler(cart.ID) } >
                            <Feather name={"trash-2"} size={16} color={"#444"} />
                        </TouchableOpacity>
                    </View>
                )}
                >

                </FlatList>
                </View>

                <TouchableOpacity style={styles.touchable} onPress={() => FinishPayment()} >
                    <Text style={styles.finishButton}>
                        Finalizar pedido
                    </Text>
                </TouchableOpacity>

                </View>
            )
        }
    }
    
    
}