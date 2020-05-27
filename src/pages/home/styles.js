import React from 'react';
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';


export default StyleSheet.create({
    container: {
        margin: 30,
        paddingTop: 30
    },

    button : {
        backgroundColor: '#7159c1',
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8,
    },

    namecontent: {
        marginTop: 30, 
        marginLeft: 40,
        fontSize: 30,
        color: "#333", 
        fontWeight: "bold",
    },

    headerContent: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },

    cart: {
        marginTop: 44,
        marginLeft: 84,
        fontWeight: "bold",
    },

    cartNumber: {
        backgroundColor: "#7159c1",
        marginTop: 44,
        color: "white",
        borderRadius: 8,
        fontSize: 10,
    },

    namevalue: {
        color: "#444",
        marginLeft: 40,
    },

    header: {
        height: 300,
        width: 290,
    },

    text: {
        color: 'white',
        textAlign: 'center'  
    },

})
