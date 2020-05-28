import React, { useState } from 'react';
import { Text, Alert, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { MainContainer, Title, InputText, PersonalButton, HeaderCheckout } from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import styles from './styles';

export default function CreditCardPayment() {
    const route = useRoute();
    const navigation = useNavigation();
    const data = route.params;
    //console.log(data)

    const [idPagamento, setIdPagamento] = useState("1")
    const [emailPagamento, setEmailPagamento] = useState("")
    const [descricaoPagamento, setDescricaoPagamento] = useState("")
    const [vlrPagamento, setVlrPagamento] = useState(data.total_price)
    const [showCheckout, setShowCheckout] = useState(false)

    const paymentSucessHandler = () => {
        const infodata = {
            username: data.username,
            order_hex: data.order_hex,
            name: data.name,
            lastname: data.lastname,
            neighborhood: data.neighborhood,
            number: data.number,
            street: data.street,
            addoptions: data.addoptions,
            vol: data.vol,
            total_price: data.total_price,
            payment: false,
            payment_method: "Cartão de Crédito",
            transshipment: "0"
        }

        navigation.navigate("OrderSucess", infodata)
    }

    const stateChange = (state) => {
        switch (state.title) {
            case 'success':
                setShowCheckout(false)
                Alert.alert("Pagamento aprovado!", `Recebemos seu pagamento de ${Number(vlrPagamento).toFixed(2)}`)

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
                    total_price: data.total_price,
                    payment: true,
                    payment_method: "Cartão de Crédito",
                    transshipment: "0"
                }
        
                navigation.navigate("OrderSucess", info)
                break;
            case 'pending':
                setShowCheckout(false)
                Alert.alert("Pagamento pendente!", `Seu pagamento de ${Number(vlrPagamento).toFixed(2)} está pendente de processamento, assim que for processado seguiremos com o pedido!`)
                break;
            case 'failure':
                setShowCheckout(false)
                Alert.alert("Pagamento não aprovado!", 'Verifique os dados e tente novamente')
                break;
        }
    }

    function changeShowCheckout(value) {
        if (emailPagamento != "" && descricaoPagamento != "") {

            var validate_email = false
            for ( var k = 0; k <= emailPagamento.length; k++ ) {
                if (emailPagamento[k]) {
                    if (emailPagamento[k] == "@" ) {
                        if (emailPagamento[k + 1]) {
                            validate_email = true
                        }
                    }
                }
            }

            if (validate_email) {
                setShowCheckout(value)
            } else {
                Alert.alert("Email Inválido", "Seu email não possui o formato correto")
            }
            
        } else {
            Alert.alert("Campos Inválidos", `Campos estão vazios!`)
        }
    }

    if (!showCheckout) {
        return (

            <MainContainer>
                <Title style={styles.titlepage}>Pagamento Cartão</Title>
                {/* <InputText value={idPagamento} onChangeText={(text) => setIdPagamento(text)} placeholder={'Informe o id do produto'} keyboardType={'numeric'}></InputText> */}
                <InputText value={emailPagamento} onChangeText={(text) => setEmailPagamento(text)} placeholder={'Informe o e-mail do comprador'} keyboardType={'email-address'}></InputText>
                <InputText value={descricaoPagamento} onChangeText={(text) => setDescricaoPagamento(text)} placeholder={'Informe a descrição da venda'}></InputText>
                {/*<InputText value={vlrPagamento} onChangeText={(text) => setVlrPagamento(text)} placeholder={'Informe o valor do produto'} keyboardType={'numeric'}></InputText> */}
                <PersonalButton onPress={() => changeShowCheckout(true)}><Text style={styles.buttonText}>Pagar R$ { Number(vlrPagamento).toFixed(2)} agora</Text></PersonalButton>
                <PersonalButton onPress={() => paymentSucessHandler()}><Text style={styles.buttonText}>Pagar quando chegar</Text></PersonalButton>

            </MainContainer>
        )
    } else {

        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <HeaderCheckout>
                    <TouchableOpacity onPress={() => setShowCheckout(false)}><Text style={{ fontSize: 20, color: 'white' }}>{"<<"}</Text></TouchableOpacity>
                    <Title>Pagamento do pedido</Title>
                </HeaderCheckout>
                <WebView
                    source={{ uri: `http://localhost:56789/payments/checkout/${idPagamento}/${emailPagamento}/${descricaoPagamento}/${vlrPagamento}` }}
                    onNavigationStateChange={state => stateChange(state)}
                    startInLoadingState={true}
                    renderLoading={() => <ActivityIndicator></ActivityIndicator>}
                />

            </View>
        )

    }
}
