import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import Logo from '../../assets/logo.png'
import NewOrder from '../neworder';
import api from '../../services/api';

import { AsyncStorage } from 'react-native';

export default function Home() {
    const routes = useRoute();
    const data = routes.params; //data.username
    const navigation = useNavigation()

    const[name, setName] = useState("");
    const[lastname, setLastName] = useState("");
    const[cart, setCart] = useState([]);
    const[cartNumber, setCartNumber] = useState("0")

    useEffect(() => {
        async function getData() {
            // await AsyncStorage.clear("cart");
            const cart_storage = await AsyncStorage.getItem("cart");
            if (cart_storage) {
                if ( JSON.parse(cart_storage) ) {
                    if (JSON.parse(cart_storage).data) {
                        console.log(JSON.parse(cart_storage).data)
                    } else {
                        console.log(cart_storage)
                    }
               } else {
                    console.log(cart_storage)
               }
            }
            
            

           /* if ( cart_storage !== null ) {
                setCartNumber(cart_storage.length)
                //console.log(true)
            } else {
                setCartNumber(0)
            }*/ 

            if (cart_storage) {
                if ( JSON.parse(cart_storage) ) {
                    setCartNumber( JSON.parse(cart_storage).data.length )
                    setCart( JSON.parse(cart_storage) )
                } else {
                    setCartNumber( 0 )
                    setCart( { cart: { data: [] } } )
                }
            } else {
                setCartNumber( 0 )
                setCart( { cart: { data: [] } } )
            }
            
            
        }

        getData();

    },[ routes.params.orders ])

    function cartHandler() {
        navigation.navigate("Cart", { username:data.username , cart })
    }


    //get name and lastname for user
    api.post("accounts/getInfoByUsername", { username: data.username }).then(res => {
        setName(res.data[0].name)
        setLastName(res.data[0].lastname)
    })

    function NewOrderHandler() {
        api.post("accounts/getInfoByUsername", { username: data.username }).then(res => {
            console.log(res.data)
            navigation.navigate("NewOrder", { 
                username: res.data[0].username,  
                street: res.data[0].street,
                password: res.data[0].password,
                number: res.data[0].number,
                neighborhood: res.data[0].neighborhood,
                name: res.data[0].name,
                lastname: res.data[0].lastname,
                email: res.data[0].email
            })
        })
        
    }

    function orderlistHandler() {
        navigation.navigate("OrderList", { username: data.username })
    }

    return(
        <View>

            <View style={styles.headerContent} >

                <View>
                    <Text style={styles.namecontent}>
                        Bem vindo! 
                    </Text>
                    <Text style={styles.namevalue}>{name} {lastname}</Text>
                </View>


                <Text style={styles.cart} onPress={() => cartHandler()} >
                    Carrinho 
                </Text>

                <Text style={styles.cartNumber}> {cartNumber} </Text>
            </View>
            

            <View style={styles.container}>            
            <Image style={styles.header} source={Logo}></Image>
            
            <TouchableOpacity style={styles.button} onPress={NewOrderHandler} >
                <Text style={ styles.text }>
                    Fazer um pedido
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => orderlistHandler()} >
                <Text style={ styles.text }>
                    Seus pedidos
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => cartHandler()} >
                <Text style={ styles.text }>
                    Carrinho
                </Text>
            </TouchableOpacity>
        </View>
        </View>
        
    )
}

