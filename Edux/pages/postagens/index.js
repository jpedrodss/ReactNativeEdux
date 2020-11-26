import React, {useState} from 'react';
import { StyleSheet,TextInput, View, TouchableOpacity, Text } from 'react-native';


const postar = () =>{

}

const EscImg = () =>{

}

const postagens = () =>{
    const [dica, setDica] = useState('');
    return(
        
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={text => setDica(text)}
            value={dica}
            placeholder="Qual sua Dica para hoje?"
            />

        <TouchableOpacity
            style={styles.button}
            onPress={postar}
            >
            <Text style={styles.textbutton}>Postar</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.buttons}
            onPress={EscImg}
            >
            <Text style={styles.textbutton}>Escolher Imagem</Text>
        </TouchableOpacity>

        </View>
    )
}

export default postagens;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex'
    },
    input : {
        width : 318,
        height: 67, 
        borderColor: 'purple', 
        borderWidth: 1,
        marginBottom: 30,
        display: 'flex',
        padding: 5,
        borderRadius: 6
    },
    button : {
        backgroundColor: 'purple',
        width : 140,
        height:  30,
        padding: 10,
        marginLeft: 150,
        borderRadius: 8,   
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    textbutton: {
        color: 'white'
    },
    buttons:{
        backgroundColor: '#BBBBBB',
        width : 140,
        height:  30,
        padding: 10,
        borderRadius: 8,   
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 150,
        display: 'flex',
        marginBottom: 150
        
    }

  });