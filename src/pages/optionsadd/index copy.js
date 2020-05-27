import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import CustomMultiPicker from "react-native-multiple-select-list";
import styles from './styles';

export default function OptionsAdd() {
    const route = useRoute();
    const data = route.params;
    const selectedValue = route.params.selectedValue;
    const navigation = useNavigation();

    const old_content = (
        <View >
            <ActivityIndicator size="large" color="#7159c1" style={styles.loading} />
        </View>
    )

    const[addoptionsloading, setAddoptionsloading] = useState(old_content)
    const[price, setTotalPrice] = useState(selectedValue);
    const[addoptions, setAddOptions] = useState([]);

    const adicionais = [

        //mousses
        {
            name: "Mousse Morango",
            price: 2.5
        },

        {
            name: "Mousse Limão",
            price: 2.5
        },

        {
            name: "Mousse Maracujá",
            price: 2.5
        },

        {
            name: "Mousse Ninho",
            price: 3.5
        },

        //frutas
        {
            name: "Abacaxi",
            price: 2.0
        },

        {
            name: "Banana",
            price: 1.0
        },

        {
            name: "Maçã",
            price: 1.5
        },

        {
            name: "Kiwi",
            price: 2.5
        },

        {
            name: "Uva",
            price: 1.5
        },

        {
            name: "Pêssego",
            price: 2.0
        },

        {
            name: "Morango",
            price: 2.5
        },

        //coberturas
        {
            name: "Cobertura Chocolate",
            price: 1.0
        },

        {
            name: "Cobertura Sorvete",
            price: 2.0
        },

        {
            name: "Creme OvoMaltine",
            price: 4.0
        },

        {
            name: "Cobertura Morango",
            price: 1.0
        },

        {
            name: "Creme Ninho",
            price: 3.0
        },

        {
            name: "Danone de Morango",
            price: 2.0
        },

        {
            name: "Mel",
            price: 1.5
        },

        {
            name: "Nutella",
            price: 4.0
        },

        {
            name: "Chantily",
            price: 2.0
        },

        {
            name: "Caramelo",
            price: 1.0
        },

        //combinações
        {
            name: "Sucrilhos",
            price: 2.0
        },

        {
            name: "Paçoca",
            price: 1.5
        },

        {
            name: "Granola",
            price: 2.0
        },

        {
            name: "Leite Ninho",
            price: 2.5
        },

        {
            name: "Leite em pó",
            price: 2.0
        },

        {
            name: "Leite Condensado",
            price: 2.0
        },

        {
            name: "Amendoim",
            price: 1.5
        },

        {
            name: "Aveia",
            price: 1.5
        },

        {
            name: "Beijinho",
            price: 2.5
        },

        {
            name: "PowerBoll",
            price: 2.0
        },

        {
            name: "OvoMaltine",
            price: 2.0
        },

        {
            name: "Castanha de caju",
            price: 2.5
        },

        {
            name: "Doce de leite",
            price: 2.0
        },

        {
            name: "Granulado",
            price: 1.5
        },

        //chocolates
        {
            name: "Batom",
            price: 1.5
        },

        {
            name: "Brigadeiro",
            price: 2.0
        },

        {
            name: "Biss B/P",
            price: 1.5
        },

        {
            name: "Laka",
            price: 2.0
        },

        {
            name: "Ferrero",
            price: 4.0
        },

        {
            name: "Ki Bueno",
            price: 4.0
        },

        {
            name: "Ki Choc.",
            price: 3.0
        },

        {
            name: "Prestígio",
            price: 2.5
        },

        {
            name: "Sonho de Valsa",
            price: 1.5
        },

        {
            name: "Ouro Branco",
            price: 1.5
        },

        {
            name: "Raspa B/P",
            price: 2.0
        },

        {
            name: "Confetes",
            price: 2.0
        },

        {
            name: "Kit Kat",
            price: 3.0
        },

        {
            name: "Diam. Negro",
            price: 2.0
        },

        {
            name: "Kinder Ovo",
            price: 4.0
        }


    ]

    const optionslist = {
        "1":"Mousse Morango",
        "2":"Mousse Limão",
        "3":"Mousse Maracujá",
        "4":"Mousse Ninho",
        "5":"Abacaxi",
        "6":"Banana",
        "7":"Maçã",
        "8":"Kiwi",
        "9":"Uva",
        "10":"Pêssego",
        "11":"Morango",
        "12":"Cobertura Chocolate",
        "13":"Cobertura Sorvete",
        "14":"Creme OvoMaltine",
        "15":"Cobertura Morango",
        "15":"Creme Ninho",
        "16":"Danone de Morango",
        "17":"Mel",
        "18":"Nutella",
        "19":"Chantily",
        "20":"Caramelo",
        "21":"Sucrilhos",
        "22":"Paçoca",
        "23":"Granola",
        "24":"Leite Ninho",
        "25":"Leite em pó",
        "26":"Leite Condensado",
        "27":"Amendoim",
        "28":"Aveia",
        "29":"Beijinho",
        "30":"PowerBoll",
        "31":"OvoMaltine",
        "32":"Castanha de caju",
        "33":"Doce de leite",
        "34":"Granulado",
        "35":"Batom",
        "36":"Brigadeiro",
        "37":"Biss B/P",
        "38":"Laka",
        "39":"Ferrero",
        "40":"Ki Bueno",
        "41":"Ki Choc.",
        "42":"Prestígio",
        "43":"Sonho de Valsa",
        "44":"Ouro Branco",
        "45":"Raspa B/P",
        "46":"Confetes",
        "47":"Kit Kat",
        "48":"Diam. Negro",
        "49":"Kinder Ovo"
      }

      const new_content = (
        <CustomMultiPicker
        options={optionslist}
        search={true} // should show search bar?
        multiple={true} //
        placeholder={"Procurar"}
        placeholderTextColor={'#757575'}
        returnValue={"label"} // label or value
        callback={(res)=>{ OptionsHandler(res) }} // callback, array of selected items
        rowBackgroundColor={"#eee"}
        rowHeight={40}
        rowRadius={5}
        searchIconName={"md-search"}
        searchIconColor="red"
        searchIconSize={10}
        iconColor={"#00a2dd"}
        iconSize={10}
        selectedIconName={"ios-checkmark-circle-outline"}
        unselectedIconName={"ios-close"}
        scrollViewHeight={400}
        selected={[]} // list of options which are selected by default
    />
    )

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

        setAddOptions(value)

        if ( total_value > options_totalprice ) {
            options_totalprice = total_value
            console.log(options_totalprice)
            setTotalPrice( parseFloat(parseInt(selectedValue) + options_totalprice).toFixed(2)  )
        } else {
            options_totalprice = options_totalprice - (options_totalprice - total_value)
            console.log(options_totalprice)
            setTotalPrice( parseFloat(parseInt(selectedValue) + options_totalprice).toFixed(2) )
        }
        
    }

    function submitHandler() {
        const info = {
            username: data.username,
            order_hex: data.order_hex,
            name: data.name,
            lastname: data.lastname,
            neighborhood: data.neighborhood,
            number: data.number,
            street: data.street,
            addoptions: addoptions,
            vol: data.vol,
            total_price: price
        }

        navigation.navigate("SelectMethod", info)
        console.log(info)
        
    }

    useEffect(() => {
        setTimeout(() => {
            setAddoptionsloading(new_content)
        },2000)
    },[])

    return(
        <View style={styles.container}>

            <View>
                <Text style={styles.titlePage}>
                    Escolha seus adicionais!
                </Text>
            </View>

            {addoptionsloading}
            {/*<CustomMultiPicker
                options={optionslist}
                search={true} // should show search bar?
                multiple={true} //
                placeholder={"Procurar"}
                placeholderTextColor={'#757575'}
                returnValue={"label"} // label or value
                callback={(res)=>{ OptionsHandler(res) }} // callback, array of selected items
                rowBackgroundColor={"#eee"}
                rowHeight={40}
                rowRadius={5}
                searchIconName={"md-search"}
                searchIconColor="red"
                searchIconSize={10}
                iconColor={"#00a2dd"}
                iconSize={10}
                selectedIconName={"ios-checkmark-circle-outline"}
                unselectedIconName={"ios-close"}
                scrollViewHeight={400}
                selected={[]} // list of options which are selected by default
            />*/}

            <View>
                <Text style={styles.totalPrice}>
                    Total: R${  Number(price).toFixed(2) } 
                </Text>
            </View>

            <View>
                <TouchableOpacity onPress={submitHandler} >
                    <Text style={styles.submitButton}>
                        Finalizar Pedido
                    </Text>
                </TouchableOpacity>
            </View>
        </View>     
    )
}