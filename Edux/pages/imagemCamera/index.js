import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';


export default function Upload() {

    function ImagePickeCallback(data) {
        console.log(data);
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => ImagePicker.launchImageLibrary({}, ImagePickeCallback )}>
                    <Text style={styles.textbutton}>Escolher Imagem</Text>
            </TouchableOpacity>

            <Image source={{uri:"https://drajosysasaki.com.br/wp-content/uploads/2016/09/ef3-placeholder-image.jpg"}} 
            style={styles.publi} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    button: {
        backgroundColor: '#BBBBBB',
        width: 130,
        height: 30,
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 20
    },
    textbutton: {
        color: 'white'
    },
    publi:{
        height: 412,
        width: 320,
        left: 0,
        top: 0,
        borderRadius: 6
        
    }
})