import React from 'react';
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
    titlePage: {
        color: "#444",
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 60,
        marginRight: 60,
        opacity: 100,
        
        paddingLeft: 8,
        borderLeftWidth: 2,
        borderLeftColor: "#7159c1"
    },

    titleOrder: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 40,
        fontWeight: "bold",  
        color: "#444",
        fontSize: 20  
    },

    
    buttonContent: {
        marginTop: 180,
        backgroundColor: "#7159c1",
    },

    buttonHome: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 10
    },

    animation: {
        height: 100,
        width: 100,
        marginLeft: 120,
    },

    background: {
        backgroundColor: "#ffff",
    },

    ordernumber: {
        color: "#444",
        fontWeight: "bold",
        marginLeft: 60,
        marginRight: 60,
        opacity: 100,
        
        paddingLeft: 8,
        borderLeftWidth: 2,
        borderLeftColor: "#7159c1"
    },  

    containerorderinfo: {
        borderLeftWidth: 1,
        borderLeftColor: "#7159c1"
    },

    numberorder: {
        backgroundColor: "#7159c1",
        color: "white",
    },

    loading: {
        marginTop: 200
    }
})