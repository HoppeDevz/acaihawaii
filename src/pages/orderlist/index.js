import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, Alert, ActivityIndicator, FlatList, Image } from 'react-native';
import styles from './styles';
import CustomMultiPicker from "react-native-multiple-select-list";
import { useNavigation, useRoute } from '@react-navigation/native';
import Logo from '../../assets/logo.png';
{/*import { Feather } from '@expo/vector-icons'; */}
import api from '../../services/api';

export default function OrderList() {
    const route = useRoute();
    const navigation = useNavigation();
    const data = route.params;
    const[showpage, setShowPage] = useState(false);
    const[orders, setOrders] = useState([]);

    function loadOrders() {
        api.post("accounts/getOrdersByUsername", { username: data.username }).then(res => {
            console.log(res.data.format_array)
            setOrders(res.data.format_array)
        }).catch(err => {
            console.log(err)
        })
    }

    function cancelOrder(order_hex) {
        api.post("accounts/cancelOrder", { order_hex }).then(response => {
            if (response.data) {
                Alert.alert("Sucesso", "Seu pedido foi cancelado com sucesso!")
                navigation.navigate("Home", { username: data.username })
                navigation.navigate("OrderList", { username: data.username })
            } else {
                Alert.alert("Oops", "Algo deu errado, tente novamente mais tarde")
            }
        }).catch(err => {
            Alert.alert("Oops", "Algo deu errado, tente novamente mais tarde")
        })
    }

    useEffect(() => {

        loadOrders();
    
        setTimeout(function(){
            setShowPage(true)
        },1000)
    },[])

    if (showpage) {
        return(
            <View>
                
                <FlatList
                data={orders}
                keyExtractor={orders => String(orders.ID)}
                showsHorizontalScrollIndicator={true}
                renderItem={({ item: orders  }) => (
                    <View style={styles.orderContainer}>

                        

                        <View>

                            <Text style={styles.orderContent}>
                                Preço:
                            </Text>

                            <Text style={styles.orderValue}>
                                R${ Number(orders.total_price).toFixed(2)}
                            </Text>

                            <Text style={styles.orderContent}>
                                Data: 
                            </Text>
                            <Text style={styles.orderValue}>
                                {orders.date}
                            </Text>

                            <Text style={styles.orderValueCancel}>
                                {orders.cancel}
                            </Text>

                            <TouchableOpacity style={styles.cancelOrderContainer} onPress={() => cancelOrder(orders.order_hex)} >
                                <Text style={styles.cancelOrderButton} >
                                    Cancelar Pedido
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Image style={styles.header} source={Logo}></Image>

                    </View>
                )}
                >

                </FlatList>

            </View>
        )
    } else {
        return(
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#7159c1" />
            </View>
        )
    }
    
}