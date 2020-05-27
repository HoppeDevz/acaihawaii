import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 40,
        marginBottom: 30,
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 8
    },

    titleOrder: {
        textAlign: 'center',
        backgroundColor: "#7159c1",
        padding: 10,
        color: "white",
        borderRadius: 8
    },

    inline: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },

    promoButton: {
        marginTop: 20,
        marginLeft: 20,
        backgroundColor: "#7159c1",
        color: "white",
        fontWeight: "bold",
        padding: 10,
        borderRadius: 8,
        textAlign: "center",
    },

    promo: {
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#7159c1",
        color: "white",
    },

    promodesc: {
        textAlign: "center",

    },

    promoDiv: {
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
    },

    promoContainer: {
        width: 130,
        marginLeft: 10,
    },

    inputInfo: {
        borderBottomWidth: 2,
        borderRadius: 8,
        borderColor: "#7159c1",
        padding: 5,
        marginBottom: 20
    },

    submitButton: {
        marginLeft: 30,
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#7159c1",
        maxWidth: 140
    },

    submitText: {
        color: "white",
        textAlign: "center"
    },

    loading: {
        marginTop: 200
    }
    
})