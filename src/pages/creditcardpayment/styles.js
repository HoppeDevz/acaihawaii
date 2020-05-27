import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    titlepage:{
        fontWeight: "bold",
        color: "#444"
    },

    buttonText: {
        fontWeight: "bold",
        color: "white"
    }
})

export const MainContainer = styled.SafeAreaView`
    flex: 1;
    background-color : #fafafa; 
    padding: 20px;
    justify-content: center;
`

export const HeaderCheckout = styled.View`
    flex: 0.1;
    flex-direction: row;
    background-color : #06AED5; 
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    margin: 50px;
    font-size: 22px;
    color: white;
    text-align: center;
`

export const InputText = styled.TextInput`
    padding: 10px;
    border-color: #7159c1;
    border-radius: 5px;
    border-width: 0.5px;
    margin: 10px;
    color: #444;
` 
export const PersonalButton = styled.TouchableOpacity`
    padding: 20px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    color: white;
    backgroundColor: #7159c1;
    border-color: white;
    margin: 10px;
`