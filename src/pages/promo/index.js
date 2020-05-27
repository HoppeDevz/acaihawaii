import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import CustomMultiPicker from "react-native-multiple-select-list";
import { useNavigation, useRoute } from '@react-navigation/native';
{/*import { Feather } from '@expo/vector-icons'; */}
import api from '../../services/api';

export default function Promo() {
    const navigation = useNavigation();
    const route = useRoute();
    const data = route.params;
    console.log(data)

    const[promodesc, setPromoDesc] = useState("");
    const[promo, setPromo] = useState("");

    const[newprice, setNewPrice] = useState(data.selectedValue)

    useEffect(() => {
        if (data.vol == "200ml") {
            setNewPrice( parseInt(data.selectedValue) + 1 )
        }

        if (data.vol == "400ml") {
            setNewPrice( parseInt(data.selectedValue) + 4 )
        }

        if (data.vol == "700ml") {
            setNewPrice( parseInt(data.selectedValue) + 5 )
        }
    })

    api.get("accounts/getOfferDay").then(response => {
        if (response.data.error) {
            Alert.alert("Oops!", "Aconteceu um erro inesperado tente novamente mais tarde.")
        } else {
            if (response.data.results) {
                setPromo(response.data.results[0].text)
            }
        }
    })

  

    //newvalue
    function SubmitHandler(volum) {
        if (data.vol == "200ml" || data.vol == "400ml" || data.vol == "700ml") {
            if (volum == "200ml") {
                const infodata = {
                    username: data.username,
                    name: data.name,
                    lastname: data.lastname,
                    street: data.street,
                    neighborhood: data.neighborhood,
                    number: data.number,
                    order_hex: data.order_hex,
                    total_price: 5,
                    addoptions: "PROMOÇÃO",
                    vol: volum
                }
                
                navigation.navigate("PromoCode", infodata)
            } else {
                if (volum == "400ml") {
                    const infodata = {
                        username: data.username,
                        name: data.name,
                        lastname: data.lastname,
                        street: data.street,
                        neighborhood: data.neighborhood,
                        number: data.number,
                        order_hex: data.order_hex,
                        total_price: 10,
                        addoptions: "PROMOÇÃO",
                        vol: volum
                    }
                    // alert(infodata.total_price)
                    navigation.navigate("PromoCode", infodata)
                } else {
                    if (volum == "700ml") {
                        const infodata = {
                            username: data.username,
                            name: data.name,
                            lastname: data.lastname,
                            street: data.street,
                            neighborhood: data.neighborhood,
                            number: data.number,
                            order_hex: data.order_hex,
                            total_price: 15,
                            addoptions: "PROMOÇÃO",
                            vol: volum
                        }
                        navigation.navigate("PromoCode", infodata)
                    }
                }
            }
            
    
            
        } else {
            Alert.alert("Quantidade Inválida", "A promoção só é válida para 200ml, 400ml e 700ml")
        }
        
    }

    return(
        <View style={styles.containermaster}>
            
            <View style={styles.promoContainer}>

                <Text style={styles.titlepage}>
                    Promoção do dia
                </Text>

                <Text style={styles.promodesc}>
                    Olá! Nossa promoção do dia possui os seguintes adicionais: {promo}
                </Text>

                <Text style={styles.totalPrice}>
                    200ml: 
                </Text>
                <Text style={styles.totalPriceValue}>
                    R$5,00
                </Text>

                <Text style={styles.totalPrice}>
                    400ml: 
                </Text>
                <Text style={styles.totalPriceValue}>
                    R$10,00
                </Text>

                <Text style={styles.totalPrice}>
                    700ml: 
                </Text>
                <Text style={styles.totalPriceValue}>
                    R$15,00
                </Text>

                <View style={styles.buttonsContainer} >
                    <TouchableOpacity onPress={() => SubmitHandler("200ml")}>
                        <Text style={styles.buttonOffer}>
                            200ml
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => SubmitHandler("400ml")}>
                        <Text style={styles.buttonOffer}>
                            400ml
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => SubmitHandler("700ml")}>
                        <Text style={styles.buttonOffer}>
                            700ml
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}