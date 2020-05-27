import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function OrderSucess() {
    const route = useRoute();
    const navigation = useNavigation();
    const data = route.params;
    //console.log(data)

    function HomeHandler() {
        setContent([])
        navigation.navigate("Home")
    }

    const container = (
        <View style={styles.loading}>
            <ActivityIndicator size="large" color="#7159c1" />
        </View>
    )

    const[content, setContent] = useState(container)

        function containerChanger(){
            if (data.payment_method == "Dinheiro") {
                var new_container = (
                    <View>
                        <Text style={styles.titleOrder}>
                            Informações do seu pedido:
                        </Text>
        
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
                                Preço: R${ data.total_price }
                            </Text>
                        </View>
        
                        <View>
        
                            <TouchableOpacity >
                                <Text style={styles.buttonHome} onPress={HomeHandler} >
                                    Voltar ao início
                                </Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                )   
            } else {
                if (data.payment_method == "Cartão de Crédito" && data.payment == true) {
                    var new_container = (
                        <View>
                            <Text style={styles.titleOrder}>
                                Informações do seu pedido:
                            </Text>
            
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
            
                                <TouchableOpacity >
                                    <Text style={styles.buttonHome} onPress={HomeHandler} >
                                        Voltar ao início
                                    </Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    )   
                } else {
                    if (data.payment_method == "Cartão de Crédito" && data.payment == false ) {
                        var new_container = (
                            <View>
                                <Text style={styles.titleOrder}>
                                    Informações do seu pedido:
                                </Text>
                
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
                
                                    <TouchableOpacity >
                                        <Text style={styles.buttonHome} onPress={HomeHandler} >
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
       }

       function contentChanger() {
        setTimeout(function(){
            containerChanger();
        },1000)
       }

       contentChanger();
       

    return(
        content
    )     
    
}