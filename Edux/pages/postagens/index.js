import React, {useState} from 'react';
import { StyleSheet,TextInput, View, TouchableOpacity, Text } from 'react-native';


const postar = () =>{

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
        width : '80%',
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
        width : '40%',
        padding: 10,
        marginLeft: 200,
        borderRadius: 8,   
        alignItems: 'center'
    },
    textbutton: {
        color: 'white'
    }
  });