import React, { useState } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { url } from '../../utils/constants'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const salvar = async (value) => {
        try {
            await AsyncStorage.setItem('@jwt', value)
        } catch (e) {
            // saving error
        }
    }

    const Logar = () => {

        const corpo = {
            email: email,
            senha: senha
        }

        fetch(`${url}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status != 404) {

                    salvar(data.token);
                    navigation.navigate('BottomNavigator');
                } else {
                    alert('Email ou senha inválidos! :( ');
                }
            })

    }

    return (
        // <KeyboardAvoidingView
        //     behavior={Platform.OS == "ios" ? "padding" : "height"}
        //     style={styles.container}
        // >
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Titillium Web', fontWeight: "1000", fontSize: 80, color: 'white' }}>Edux</Text>
            <Text style={styles.textoHeader}>LOGIN</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                defaultValue={email}
                keyboardType={"email-address"}
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={text => setSenha(text)}
                defaultValue={senha}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={Logar}
            >
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
        </View>
        /* </TouchableWithoutFeedback> */
        // </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8404D9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoHeader: {
        color: 'white',
        margin: 10,
        fontWeight: "700",
        marginBottom: 15,
        fontSize: 24,
        fontFamily: 'Titillium Web'
    },
    input: {
        width: 250,
        height: 40,
        color: '#8404D9',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        padding: 5,
        paddingLeft: 10,
        borderRadius: 10,
        fontWeight: "700",
        fontFamily: 'Titillium Web'
    },
    button: {
        backgroundColor: 'white',
        width: 250,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontWeight: "700",
        color: '#8404D9',
        fontFamily: 'Titillium Web'
    }

});