import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 40
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

    inline: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
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