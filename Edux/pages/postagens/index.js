import React, {useState} from 'react';
import { StyleSheet,TextInput, View } from 'react-native';

const postagens = () =>{
    const [dica, setDica] = useState('');
    return(
        <View style={styles.leres}>
            <Text>Postagens</Text>
        </View>,
        
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={text => setDica(text)}
            value={dica}
            placeholder="Qual sua Dica para hoje?"
            />
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
    },
    input : {
        width : '90%',
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop : 20,
        padding: 5,
        borderRadius: 8
    },
    leres : {
        backgroundColor : '#9200D6'
    }
  });