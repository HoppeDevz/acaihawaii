import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import api from '../../services/api';
import anim from '../../assets/16229-gift-shake.gif';

export default function PromoCode() {
    const route = useRoute();
    const data = route.params;
    console.log(data);

    const navigation = useNavigation();
    const[promocode, setPromoCode] = useState("");
    const[pricetotal, setPriceTotal] = useState(data.total_price);

    function moneySelectMethodHandler() {
        const info = {
            username: data.username,
            order_hex: data.order_hex,
            name: data.name,
            lastname: data.lastname,
            neighborhood: data.neighborhood,
            number: data.number,
            street: data.street,
            addoptions: data.addoptions,
            vol: data.vol,
            total_price: pricetotal,
            payment: false,
            payment_method: "Dinheiro"
        }

        navigation.navigate("CheckOrder", info)
    }

    function CreditCardMethodHandler() {
        const info = {
            username: data.username,
            order_hex: data.order_hex,
            name: data.name,
            lastname: data.lastname,
            neighborhood: data.neighborhood,
            number: data.number,
            street: data.street,
            addoptions: data.addoptions,
            vol: data.vol,
            total_price: pricetotal,
            payment: false,
            payment_method: "Dinheiro"
        }

        navigation.navigate("CreditCardPayment", info)
    }

    function PromoCodeHandler() {
        api.post("accounts/promocode", { promocode }).then(response => {
            console.log(response.data)
            const offervalue = parseInt(response.data.response)

            if (offervalue > 0 ) {
                Alert.alert("Parabéns!", `Você ganhou ${offervalue}% de desconto! `)
                setPriceTotal( String( (pricetotal - (Number(data.total_price) * (offervalue * 0.01))).toFixed(2) ) )
            }
        }).catch(err => {
            Alert.alert("Erro", "Um erro inesperado ocorreu tente novamente mais tarde")
        })
    }

    return(
        <View style={styles.background}>
            <View style={styles.containermaster} >

                <Text style={styles.titlepage}>
                    Utilize um cupom de desconto!
                </Text>

                <Image source={anim} style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center', marginLeft:110 }} />

                
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonmoney} onPress={moneySelectMethodHandler} > 
                        <Text style={styles.buttonText}>
                            Próximo
                        </Text>
                    </TouchableOpacity>

                    {/*<TouchableOpacity style={styles.buttoncard} onPress={CreditCardMethodHandler}>
                        <Text style={styles.buttonText}>
                        <Feather name="credit-card" size={16} color="#ffff" /> Cartão
                        </Text>
                    </TouchableOpacity>*/}

                    <View style={styles.offercontainer}>                
                        <TextInput placeholder="Cupom de Desconto" value={promocode} autoCapitalize='none'  onChangeText={(text) => setPromoCode( (text).toLowerCase() )} style={styles.promoCodeInput} />
                        <TouchableOpacity onPress={() => PromoCodeHandler()}>
                            <Text style={styles.checkicon}>
                                <Feather name="check" size={16} color={"#ffff"} />
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.priceContent}>
                        Total:  <Text style={styles.priceValue} >R${ Number(pricetotal).toFixed(2) }</Text>
                    </Text>
                    
                </View>
            </View>
        </View>
        
        
    )
}