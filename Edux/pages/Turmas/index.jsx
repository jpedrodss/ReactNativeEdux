import React, { useState } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { url } from '../../utils/constants'

export default function Turmas() {
  const [turmas, setTurmas] = useState([]);

  fetch(url + 'turma')
    .then(response => response.json())
    .then(data => {
      setTurmas(data.data);
      console.log(data)
    })
    .catch(err => console.error(err));

  const renderItem = ({ item }) => {
    return (
      <Item descricao={item.descricao} />
    )
  }

  const Item = ({ descricao }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{descricao}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container} >
      <Text style={styles.textHeader} >TURMAS</Text>
      <FlatList
        data={turmas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
  text: {
    color: "#8404D9",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "1.5em",
  },
  imagemCard: {
    width: '3.5em',
    height: '3.5em',
    borderRadius: '4em',
  },
  item: {
    backgroundColor: '#2a2a2a',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  margemE: {
    marginLeft: '0.3em',
    marginTop: '0.2em',
  },
  logo: {
    width: '90%',
    height: 100,
    margin: 'auto',
    marginBottom: '1em',
    borderRadius: '2em',
  },
})

