import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

export default function Register() {
    const navigation = useNavigation();

    const[name, setName] = useState("");
    const[lastname, setLastName] = useState("");
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[street, setStreet] = useState("");
    const[neighborhood, setNeighborhood] = useState("");
    const[number, setNumber] = useState("");

    function submitHandler() {
        if ( name != "" && lastname != "" && username != "" && email != "" && password != "" && street != "" && street != "" && neighborhood != "" && number != "") {
            const data = { name, lastname, username, email, password, street, neighborhood, number }
            api.post("accounts/createaccount", data).then(response => {
                //console.log(response.data)
                if (response.data == "Email alredy exist") {
                    Alert.alert("Email Inválido", "Este email já está sendo utilizado")
                } else {
                    if (response.data == "Username alredy exist") {
                        Alert.alert("Usuário Inválido", "Este usuário já está sendo utilizado")
                    } else {
                        Alert.alert("Boas Notícias!", "Você foi cadastrado com sucesso e já pode fazer login!")
                        navigation.navigate("Login")
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        } else {
            Alert.alert("Dados inválidos", "Alguns campos estão vazios!")
        }
        
    }

    return(
        <View style={styles.background}>
            {/* <Text style={styles.titlePage}>
            <Feather name="log-in" size={16} color="#FFFF" /> Registrar-se
            </Text>*/}

            <View style={styles.registerContainer}>
                <TextInput placeholder="Nome" value={name} onChangeText={(text) => setName(text)} style={styles.textInput} />
                <TextInput placeholder="Sobrenome" value={lastname} onChangeText={(text) => setLastName(text)} style={styles.textInput} />
                <TextInput placeholder="Usuário" value={username} onChangeText={(text) => setUsername(text)} style={styles.textInput} />
                <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} style={styles.textInput} />
                <TextInput placeholder="Senha" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} style={styles.textInput} />
                <TextInput placeholder="Rua" value={street} onChangeText={(text) => setStreet(text)} style={styles.textInput} />
                <TextInput placeholder="Bairro" value={neighborhood} onChangeText={(text) => setNeighborhood(text)} style={styles.textInput} />
                <TextInput placeholder="Número" value={number} onChangeText={(text) => setNumber(text)} style={styles.textInput} />

                <TouchableOpacity onPress={() => submitHandler()}>
                    <Text style={styles.submitButton}>
                        Concluido
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}