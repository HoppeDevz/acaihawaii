import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 8,
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
        padding: 15,
        height: 290,
        backgroundColor: "white"
    },

    titlePage: {
        color: "#ffff",
        fontSize: 20,
        marginLeft: 30,
        fontWeight: "bold",
        marginTop: 40,
    },  

    usernameinput: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },

    usernameIcon: {
        marginTop: 18,
        borderBottomWidth: 2,
        paddingBottom: 13,
        borderBottomColor: "#7159c1",
    },

    textInput: {
        marginBottom: 10,
        borderBottomColor: "#7159c1",
        borderBottomWidth: 2,
        padding: 10,
        width: 220,
    },

    header: {
        height: 50,
        width: 50,
        marginLeft: 100,
    },

    button: {
        fontWeight: "bold",
        backgroundColor: "#7159c1",
        color: "white",
        width: 100,
        maxWidth: 90,
        textAlign: "center",
        padding: 6,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
    }, 
    
    registerButton: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#fafafa",
    },

    registermsg: {
        color: "#fafafa",
        marginTop: 10,
        textAlign: "center",
    },

    background: {
        backgroundColor: "#7159c1",
        height: 900,
        marginTop: 24,     
    },

    containerIcon: {
        textAlign: "center",
    },

    containerby: {
        height: 40,
        marginTop: 180,
    },

    by: {
        fontWeight: "bold",
        color: "white",
        height: 40,
        textAlign: "center",
    },
})