import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Alert, Image, AsyncStorage } from 'react-native';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import deliveryanimation from '../../assets/17338-go-fix.gif';

export default function OrderSucess() {
    const route = useRoute();
    const navigation = useNavigation();
    const data = route.params;
    //console.log(data)

    async function HomeHandler() {
        //await AsyncStorage.setItem("cart", { data: [] });
        
        const new_storage = { data: [] };
        await AsyncStorage.setItem("cart", JSON.stringify(new_storage));
        const response = await AsyncStorage.getItem("cart");
        console.log(response);
        navigation.navigate("Home", { username: data.username, orders: 0 });
    }

    const container = (
        <View style={styles.loading}>
            <ActivityIndicator size="large" color="#7159c1" />
        </View>
    )

    const[content, setContent] = useState(container)

    useEffect(() => {

        api.post("accounts/newOrder", data).then(response => {
            if (response.data.created_order) {

            } else {
                Alert.alert("Oops", "Parece que você ja realizou esse pedido!")
                //navigation.navigate("Home")
            }
        }).catch(err => {
            console.log(err)
        })

        setTimeout(function() {
            if (data.payment_method == "Dinheiro") {
                var new_container = (
                    <View style={styles.background}>
                        
                        <Text style={styles.titleOrder}>
                            Informações do seu pedido:
                        </Text>

                        <Image source={deliveryanimation} style={styles.animation} />
        
                        <View style={styles.inforder}>
                            <Text style={styles.titlePage}>
                                Pedido realizado com sucesso!
                            </Text>
        
                            <Text style={styles.ordernumber}>
                                Número do pedido: <Text style={styles.numberorder}>#{data.order_hex}</Text> {/* CONTATAR NO BANCO DE DADOS  */} 
                            </Text>
        
                            <Text style={styles.ordernumber}>
                                Nome: {data.name}
                            </Text>
        
                            <Text style={styles.ordernumber}>
                                Sobrenome: {data.lastname}
                            </Text>
        
                            <Text style={styles.ordernumber}>
                                Rua: {data.street}
                            </Text>
        
                            <Text style={styles.ordernumber}>
                                Bairro: {data.neighborhood}
                            </Text>
        
                            <Text style={styles.ordernumber}>
                                Número: {data.number}
                            </Text>
    
                            <Text style={styles.ordernumber}>
                                Pagamento: Dinheiro
                            </Text>

                            <Text style={styles.ordernumber}>
                                Troco: R${ Number(data.transshipment).toFixed(2) }
                            </Text>
        
                            <Text style={styles.ordernumber}>
                                Preço: R${ Number(data.total_price).toFixed(2) }
                            </Text>
                        </View>
        
                        <View>
        
                            <TouchableOpacity style={styles.buttonContent} onPress={HomeHandler} >
                                <Text style={styles.buttonHome} >
                                    Voltar ao início
                                </Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                )   
            } else {
                if (data.payment_method == "Cartão de Crédito" && data.payment == true) {
                    var new_container = (
                        <View style={styles.background}>
                            <Text style={styles.titleOrder}>
                                Informações do seu pedido:
                            </Text>

                            <Image source={deliveryanimation} style={styles.animation} />
            
                            <View style={styles.inforder}>
                                <Text style={styles.titlePage}>
                                    Pedido realizado com sucesso!
                                </Text>
            
                                <Text style={styles.ordernumber}>
                                    Número do pedido: <Text style={styles.numberorder}>#{data.order_hex}</Text> {/* CONTATAR NO BANCO DE DADOS  */} 
                                </Text>
            
                                <Text style={styles.ordernumber}>
                                    Nome: {data.name}
                                </Text>
            
                                <Text style={styles.ordernumber}>
                                    Sobrenome: {data.lastname}
                                </Text>
            
                                <Text style={styles.ordernumber}>
                                    Rua: {data.street}
                                </Text>
            
                                <Text style={styles.ordernumber}>
                                    Bairro: {data.neighborhood}
                                </Text>
            
                                <Text style={styles.ordernumber}>
                                    Número: {data.number}
                                </Text>
        
                                <Text style={styles.ordernumber}>
                                    Pagamento: Cartão de crédito
                                </Text>
            
                                <Text style={styles.ordernumber}>
                                    Preço: R${ data.total_price }
                                </Text>

                                <Text style={styles.ordernumber}>
                                    O seu pedido já foi pago pelo app =)
                                </Text>
                            </View>
            
                            <View>
            
                                <TouchableOpacity style={styles.buttonContent} onPress={HomeHandler} >
                                    <Text style={styles.buttonHome} >
                                        Voltar ao início
                                    </Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    )   
                } else {
                    if (data.payment_method == "Cartão de Crédito" && data.payment == false ) {
                        var new_container = (
                            <View style={styles.background}>
                                <Text style={styles.titleOrder}>
                                    Informações do seu pedido:
                                </Text>

                                <Image source={deliveryanimation} style={styles.animation} />
                
                                <View style={styles.inforder}>
                                    <Text style={styles.titlePage}>
                                        Pedido realizado com sucesso!
                                    </Text>
                
                                    <Text style={styles.ordernumber}>
                                        Número do pedido: <Text style={styles.numberorder}>#{data.order_hex}</Text> {/* CONTATAR NO BANCO DE DADOS  */} 
                                    </Text>
                
                                    <Text style={styles.ordernumber}>
                                        Nome: {data.name}
                                    </Text>
                
                                    <Text style={styles.ordernumber}>
                                        Sobrenome: {data.lastname}
                                    </Text>
                
                                    <Text style={styles.ordernumber}>
                                        Rua: {data.street}
                                    </Text>
                
                                    <Text style={styles.ordernumber}>
                                        Bairro: {data.neighborhood}
                                    </Text>
                
                                    <Text style={styles.ordernumber}>
                                        Número: {data.number}
                                    </Text>
            
                                    <Text style={styles.ordernumber}>
                                        Pagamento: Cartão de crédito
                                    </Text>
                
                                    <Text style={styles.ordernumber}>
                                        Preço: R${ data.total_price }
                                    </Text>

                                </View>
                
                                <View>
                
                                    <TouchableOpacity style={styles.buttonContent} onPress={HomeHandler} >
                                        <Text style={styles.buttonHome} >
                                            Voltar ao início
                                        </Text>
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                        )   
                    }    
                }
            }
            setContent(new_container)
        },1000)
    },[])

    return(
        content
    )     
    
}