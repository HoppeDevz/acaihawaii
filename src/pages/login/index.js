import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, Linking, SafeAreaView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import Logo from '../../assets/logo.png';
import { AsyncStorage } from 'react-native';

export default function Login() {
    const navigation = useNavigation();

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    function registerHandler() {    
        navigation.navigate("Register")
    }

    async function getInfoUser() {

        const user_name_storage = await AsyncStorage.getItem("username")
        if (user_name_storage !== null ) {
            setUsername(user_name_storage)
        }
        const pass_storage = await AsyncStorage.getItem("password")
        if (pass_storage !== null ) {
            setPassword(pass_storage)
        }
    }

    async function setInfoUser(username, password) {
        await AsyncStorage.setItem("username", username)
        await AsyncStorage.setItem("password", password)
    }

    useEffect(() => {
        getInfoUser();

    },[]);

    async function getlength() {
        const cart_storage = await AsyncStorage.getItem("cart");
        if (cart_storage) {
            if (JSON.parse(cart_storage)) {
                if (JSON.parse(cart_storage).data) {
                    return JSON.parse(cart_storage).data.length
                } else {
                    return 0
                }
            } else {
                return 0
            }
        } 
    }

    function loginHandler() {
        if (username != "" && password != "") {
            const data = { username, password }
            api.post("accounts/login", data).then(res => {
                //console.log(res.data)
                if (res.data) {
                    setInfoUser(username, password)

                    getlength().then(response => {
                        navigation.navigate("Home", { username, orders: response })
                    })
                    
                } else {
                    Alert.alert("Erro", "Login/Senha incorretos!")
                }
            }).catch(err => {
                console.log(err)
                Alert.alert("Oops", "Algo deu errado, tente novamente mais tade!")
            })
        } else {
            Alert.alert("Dados inválidos!", "Alguns campos estão vazios!")
        }
        
    }

    function InstagramLink() {
        Linking.openURL('instagram://user?username=gabrielhoppe')
    }

    return(
        <View style={styles.background}>
            <Text style={styles.titlePage}>
                <Feather name="log-in" size={16} color="#FFFF" /> Fazer login
            </Text>

            <View style={styles.container}>  

                <Text style={styles.containerIcon}>
                    
                </Text>

                <Image style={styles.header} source={Logo}></Image>
            
                <View style={styles.usernameinput}>
                    <Feather name="user-check" size={16} color="#444" style={styles.usernameIcon} />
                    <TextInput placeholder="Usuário" style={styles.textInput} value={username} onChangeText={(text) => setUsername(text)} />    
                </View>

                <View style={styles.usernameinput}>
                    <Feather name="lock" size={16} color="#444" style={styles.usernameIcon} />
                    <TextInput placeholder="Senha" secureTextEntry={true} style={styles.textInput} value={password} onChangeText={(text) => setPassword(text)} />
                </View>
                
                

                <TouchableOpacity onPress={() => loginHandler()}>
                    <Text style={styles.button}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.registermsg}>
                Ainda não é cadastrado?
            </Text>
            <TouchableOpacity onPress={() => registerHandler()}>
                <Text style={styles.registerButton}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity  style={styles.containerby} onPress={() => InstagramLink()}>
                <Text style={styles.by}>
                    <Feather name="instagram" size={16} color={"#ffff"} /> Desenvolvido por @gabrielhoppe
                </Text>
            </TouchableOpacity>

        </View>
    )
}