import React, { useState } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Alunos() {
    return(
        <View style={styles.container} >
            <Text style={styles.textHeader} >ALUNOS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Titillium Web",
    },
    textHeader: {
        color: "#8404D9",
        textAlign: "center",
        fontSize: 30,
        marginTop: 30,
        fontFamily: "Titillium Web",
        fontWeight: "700"
    },
})