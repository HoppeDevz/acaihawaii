import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    loading: {
        marginTop: 200,
    },

    orderContent: {
        fontWeight: "bold",
        marginLeft: 20,
    },

    orderValue: {
        marginBottom: 10,
        marginLeft: 20,
        color: "#333",
    },

    orderValueCancel : {
        marginBottom: 10,
        marginLeft: 20,
        color: "red",
        fontWeight: "bold",
    },

    header: {
        height: 120,
        width: 120,
        marginLeft: 60,
        marginTop: 10,
    },

    orderContainer: {
        paddingTop: 10,
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30,
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
        backgroundColor: "white",
        borderRadius: 8,
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
    },

    cancelOrderContainer: {
        height: 40,
        width: 90,
    },

    cancelOrderButton: {
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#7159c1",
        borderRadius: 8,
        marginLeft: 15,
        marginBottom: 15,
        textAlign: "center",
    },
})