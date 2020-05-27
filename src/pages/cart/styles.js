import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    loading: {
        marginTop: 300,
    },  

    titlePage: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 39,
        marginLeft: 20,
    },

    emptyContainer: {
        backgroundColor: "white",
        marginTop: 24,
        height: 900,
    },

    totalPrice: {
        marginLeft: 20,
    },

    orderList: {
        height: 500,
    },

    titleEmpty: {
        marginTop: 50,
        fontSize: 27,
        fontWeight: "bold",
        color: "#222",
        marginLeft: 15,
    },

    finishButton: {
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#7159c1",
        padding: 10,
        textAlign: "center",
    },

    touchable: {
        marginTop: 20,
    },

    emptyDesc: {
        marginLeft: 16,
        color: "#333",
    },

    orderContainer: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 8,
        borderBottomColor: "#7159c1",
        borderBottomWidth: 3,
        backgroundColor: "white",
        padding: 10,

        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },

    infocontainer: {
        width: 100,
    },

    trashButton: {
        marginLeft: 280,
    },

    textContent: {
        fontWeight: "bold",
    },
    
    textValue: {
        fontSize: 12,
        color: "#444",
    }

});