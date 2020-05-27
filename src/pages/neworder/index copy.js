import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import CustomMultiPicker from "react-native-multiple-select-list";
import { useNavigation, useRoute } from '@react-navigation/native';
{/*import { Feather } from '@expo/vector-icons'; */}
import api from '../../services/api';

export default function NewOrder() {

    const routes = useRoute();
    const data = routes.params;
    const [username, setUsername] = useState(data.username)
    const [name, setName] = useState(data.name)
    const [lastname, setLastName] = useState(data.lastname);
    const [street, setStreet] = useState(data.street);
    const [neighborhood, setNeighborhood] = useState(data.neighborhood);
    const [number, setNumber] = useState(data.number);
    const [selectedValue, setSelectedValue] = useState("4");
    const [totalPrice, setTotalPrice] = useState(selectedValue);
    const [showpage, setShowPage] = useState(false)
    const navigation = useNavigation();

    useEffect(() => {    
        setTimeout(function(){
            setShowPage(true)
        }, 1000)
    })
    
    function SubmitHandler() {
        if (name != "" && lastname != "" && street != "" && neighborhood != "" && number != "") {

            api.get("generateKey").then(response => {

                if (selectedValue == "4") {
                    const order_hex = response.data.hash_key
                    const data = {
                        username, order_hex, name, lastname, street, neighborhood, number, selectedValue, vol: "200ml"
                    }

                    navigation.navigate("OptionsAdd", data)
                } else {
                    if  (selectedValue == "5") {
                        const order_hex = response.data.hash_key
                        const data = {
                            username, order_hex, name, lastname, street, neighborhood, number, selectedValue, vol: "300ml"
                        }

                        navigation.navigate("OptionsAdd", data)
                    } else {
                        if (selectedValue == "6") {
                            const order_hex = response.data.hash_key
                            const data = {
                                username, order_hex, name, lastname, street, neighborhood, number, selectedValue, vol: "400ml"
                            }

                            navigation.navigate("OptionsAdd", data)
                        } else {
                            if (selectedValue == "7") {
                                const order_hex = response.data.hash_key
                                const data = {
                                    username, order_hex, name, lastname, street, neighborhood, number, selectedValue, vol: "500ml"
                                }

                                navigation.navigate("OptionsAdd", data)
                            } else {
                                if (selectedValue == "10") {
                                    const order_hex = response.data.hash_key
                                    const data = {
                                        username, order_hex, name, lastname, street, neighborhood, number, selectedValue, vol: "700ml"
                                    }

                                    navigation.navigate("OptionsAdd", data)
                                } else {
                                    if (selectedValue == "15") {
                                        const order_hex = response.data.hash_key
                                        const data = {
                                            username, order_hex, name, lastname, street, neighborhood, number, selectedValue, vol: "1000ml"
                                        }

                                        navigation.navigate("OptionsAdd", data)
                                    } else {
                                        if (selectedValue = "12") {
                                            const order_hex = response.data.hash_key
                                            const data = {
                                                username, order_hex, name, lastname, street, neighborhood, number, selectedValue, vol: "Marmita"
                                            }

                                            navigation.navigate("OptionsAdd", data)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                
            }).catch(error => {
                console.log(error)

                Alert.alert("Algo deu errado!", "Tente novamente mais tarde")
            })
            
            
        } else {
            Alert.alert("Dados Vazios/Inválidos!", "Preencha corretamente os campos")
        }
    }

    function SubmitHandlerPromo() {
        if (name != "" && lastname != "" && street != "" && neighborhood != "" && number != "") {

            api.get("generateKey").then(response => {

                if (selectedValue == "4") {
                    const order_hex = response.data.hash_key
                    const data = {
                        username, order_hex, name, lastname, street, neighborhood, number, selectedValue, vol: "200ml"
                    }

                    navigation.navigate("Promo", data)
                } else {
                    if  (selectedValue == "5") {
                        Alert.alert("Quantidade Inválida", "A promoção só é válida para 200ml, 400ml e 700ml")
                    } else {
                        if (selectedValue == "6") {
                            const order_hex = response.data.hash_key
                            const data = {
                                username, order_hex, name, lastname, street, neighborhood, number, selectedValue, vol: "400ml"
                            }

                            navigation.navigate("Promo", data)
                        } else {
                            if (selectedValue == "7") {
                                Alert.alert("Quantidade Inválida", "A promoção só é válida para 200ml, 400ml e 700ml")
                            } else {
                                if (selectedValue == "10") {
                                    const order_hex = response.data.hash_key
                                    const data = {
                                        username, order_hex, name, lastname, street, neighborhood, number, selectedValue, vol: "700ml"
                                    }

                                    navigation.navigate("Promo", data)
                                } else {
                                    if (selectedValue == "15") {
                                        Alert.alert("Quantidade Inválida", "A promoção só é válida para 200ml, 400ml e 700ml")
                                    } else {
                                        if (selectedValue = "12") {
                                            Alert.alert("Quantidade Inválida", "A promoção só é válida para 200ml, 400ml e 700ml")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                
            }).catch(error => {
                console.log(error)

                Alert.alert("Algo deu errado!", "Tente novamente mais tarde")
            })
            
            
        } else {
            Alert.alert("Dados Vazios/Inválidos!", "Preencha corretamente os campos")
        }
    }

    function changePriceVol(vol) {
        
        setSelectedValue(vol)
        setTotalPrice(parseInt(vol) + parseInt(options_totalprice) )
        
    }

    const adicionais = [
        {
            name: "Granola",
            price: 0.5
        },

        {
            name: "Ovomaltine",
            price: 0.6
        },

        {
            name: "ChocoBall",
            price: 0.6
        }
    ]

    var options_totalprice = 0

    function OptionsHandler(value) {
        var total_value = 0
        for (var j = 0; j <= adicionais.length; j++ ) {
            if ( adicionais[j] ) {
                for ( var i = 0; i <= adicionais.length; i++ ) {
                    if (value[i]) {
                        if ( value[i] == adicionais[j].name ) {
                            total_value = total_value + adicionais[j].price
                        }
                    }
                }
            }
        }

        if ( total_value > options_totalprice ) {
            options_totalprice = total_value
            console.log(options_totalprice)
            setTotalPrice(parseInt(selectedValue) + options_totalprice)
        } else {
            options_totalprice = options_totalprice - (options_totalprice - total_value)
            console.log(options_totalprice)
            setTotalPrice(parseInt(selectedValue) + options_totalprice)
        }
        
    }

    const optionslist = {
        "1":"Granola",
        "2":"Ovomaltine",
        "3":"ChocoBall"
    } 

    if (showpage) {
        return(
            <View>
                <View style={styles.header}>
                    <Text style={styles.titleOrder}>Informações</Text>
                    <TextInput placeholder="Nome" style={styles.inputInfo} value={name} onChangeText={(text) => setName(text) }/>
                    <TextInput placeholder="Sobrenome" style={styles.inputInfo} value={lastname} onChangeText={(text) => setLastName(text)} />
                    <TextInput placeholder="Rua" style={styles.inputInfo} value={street} onChangeText={(text) => setStreet(text)} />
                    <TextInput placeholder="Bairro" style={styles.inputInfo} value={neighborhood} onChangeText={(text) => setNeighborhood(text)} />
                    <TextInput placeholder="Número" style={styles.inputInfo} value={number} onChangeText={(text) => setNumber(text)} />
    
                    <View style={styles.inline}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => changePriceVol(itemValue) }
                        >
                            <Picker.Item label="200ml" value="4" />
                            <Picker.Item label="300ml" value="5" />
                            <Picker.Item label="400ml" value="6" />
                            <Picker.Item label="500ml" value="7" />
                            <Picker.Item label="700ml" value="10" />
                            <Picker.Item label="1000ml" value="15" />
                            <Picker.Item label="Marmita" value="12" />
                        </Picker>

                        <TouchableOpacity onPress={() => SubmitHandlerPromo()}>
                            <Text style={styles.promoButton}>
                                Promoção
                            </Text>
                        </TouchableOpacity>

                    </View>
    
                    <Text>
                        Preço(mL): R${ Number(selectedValue).toFixed(2) }
                    </Text>
                    
                </View>
    
                <TouchableOpacity style={styles.submitButton} onPress={SubmitHandler}>
                        <Text style={ styles.submitText }>
                        {/*<Feather name="log-in" size={16} color="#222" />*/} Próximo
                        </Text>
                </TouchableOpacity>    

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