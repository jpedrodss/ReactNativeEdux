import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';



const postagens = () => {


    const postar = () => {

    }

    const EscImg = () => {

    }

    const [dica, setDica] = useState('');
    return (

        <View style={styles.container}>


            <View>
                <Text style={styles.H1}>
                    POSTAGENS
                </Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setDica(text)}
                    value={dica}
                    placeholder="Qual sua Dica para hoje?"
                />
            </View>

            <View style={styles.botoes}>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={EscImg}
                >
                    <Text style={styles.textbutton}>Escolher Imagem</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={postar}
                >
                    <Text style={styles.textbutton}>Postar</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default postagens;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'

    },
    input: {
        width: 318,
        height: 67,
        borderColor: 'purple',
        borderWidth: 1,
        padding: 5,
        borderRadius: 6
    },
    button: {
        backgroundColor: 'purple',
        width: 80,
        height: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textbutton: {
        color: 'white'
    },
    buttons: {
        backgroundColor: '#BBBBBB',
        width: 130,
        height: 30,
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        marginRight: 10
    },
    H1: {
        color: "#8404D9",
        textAlign: "center",
        fontSize: 30,
        marginTop: 30,
        fontFamily: "Titillium Web",
        fontWeight: "700"
    },
    botoes: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10
    }
});

