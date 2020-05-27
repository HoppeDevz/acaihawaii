import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    titlepage: {
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 5,
        marginLeft: 15,
        fontSize: 20,
    },

    promoContainer: {
        backgroundColor: "white",
        padding: 20,
        marginTop: 24,
        height: 600,
    },

    promodesc: {
        marginLeft: 15,
        color: "#444",
    },  

    buttonOffer: {
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#7159c1",
        maxWidth: 150,
        textAlign: "center",
        marginLeft: 12,
        marginTop: 10,
        padding: 10,
        borderRadius: 8,
    },

    totalPrice: {
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 10,
    },

    totalPriceValue: {
        marginLeft: 15,
        color: "#444",
    },

    buttonsContainer: {
        marginTop: 10,
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },

})