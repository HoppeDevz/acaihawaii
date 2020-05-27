import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 50
    },

    buttonText : {
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#7159c1",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
        padding: 20,
        borderRadius: 8,
    },

    containermaster : {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "rgba(0, 0, 0, 0.1)",
        margin: 10,
        marginTop: 20,
        height: 530,
        backgroundColor: "#ffff"
    },

    titlepage: {
        marginTop: 40,
        fontWeight: "bold",
        fontSize: 20,
        color: "#444",
        textAlign: "center",
    },

    background: {
        backgroundColor: "#7159c1",
        height: 900,
        marginTop: 24,
    },

    priceContent: {
        marginLeft: 35,
        marginTop: 19,
        color: "#444"
    },  

    offercontainer: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',  
        marginLeft: 10, 
    },
    
    priceValue: {
        fontWeight: "bold",
        color: "black",
    },

    promoCodeInput: {
        marginLeft: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },

    checkicon: {
        marginTop: 1,
        marginLeft: 10,
        backgroundColor: "#7159c1",
        color: "white",
        padding: 15,
    },
})