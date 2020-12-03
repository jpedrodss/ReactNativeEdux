import React, { useState } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';


export default function Turmas() {
    const DATA = [
        {
          id: '1',
          title: 'Nome 1',
        },
        {
          id: '2',
          title: 'Nome 2',
        },
        {
          id: '3',
          title: 'Nome 3',
        },
      ];
    
    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    
    const Turmas = () => {
    
        const renderItem = ({ item }) => (
            <Item title={item.title} />
          );

    return(
        <View style={styles.container} >
            <Text style={styles.textHeader} >TURMAS</Text>
            <div className="container">
                <div className="card">
                    <Image
                        style={styles.logo}
                        source={{
                        uri:
                            'https://www.sp.senai.br/',
                        }}
                    />
                    <h2 className="tituloCard">Desenvolvimento de Sistemas</h2>       
                </div>
            </div>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#8404D9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
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
}  
