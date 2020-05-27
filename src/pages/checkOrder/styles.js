import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: -120,
        backgroundColor: '#FFFF',
        height: 900,
        alignItems: "center",
        justifyContent: "center",
    },

    containerTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#222",
        
    },

    pageDesc: {
        color: "#999",
        fontSize: 11,
    },

    header: {
        marginBottom: 40,
    },

    content: {
        fontWeight: "bold",
    },

    value : {
        fontSize: 12,
        color: "#444",
    },

    inline: {
        marginTop: 20,
        marginBottom: 20,
    },

    button: {
        backgroundColor: "#7159c1",
        padding: 16.5,
        color: "#ffff",
        maxWidth: 270,
        fontWeight: "bold",
        textAlign: "center",
    },

    textinput: {
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },  
})