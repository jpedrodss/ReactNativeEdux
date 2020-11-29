import React, { useState } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { url } from '../../utils/constants'

export default function Home() {
    return (
        <View style={styles.container} >
            <Text style={styles.textHeader} >RANKING GERAL</Text>

            <View style={styles.cardRank1}>
                <Image style={styles.imgRank1} source={{ uri: 'https://avatars3.githubusercontent.com/u/61585286?s=460&u=b49f9a0d6903d949ba62a0c6f98f477b6dfddf82&v=4' }} />
                <View style={styles.textRank1} >
                    <View>João Pedro</View>
                    <View style={{ fontWeight: "400" }}>1º Desenvolvimento de Sistemas</View>
                </View>


            </View>

            <View style={styles.circles}>
                <View style={styles.circleRank1}>
                    <Text style={styles.titleCircle}> 1º</Text>
                    <Text style={styles.quantityCircle}>40</Text>
                    <Text style={styles.textCircle}>Objetivos concluidos</Text>
                </View>

                <View style={styles.circleRank2}>
                    <Text style={styles.titleCircle}> 1º</Text>
                    <Text style={styles.quantityCircle}>40</Text>
                    <Text style={styles.textCircle}>Objetivos concluidos</Text>
                </View>

                <View style={styles.circleRank3}>
                    <Text style={styles.titleCircle}> 1º</Text>
                    <Text style={styles.quantityCircle}>40</Text>
                    <Text style={styles.textCircle}>Objetivos concluidos</Text>
                </View>

                <View style={styles.circleRank4}>
                    <Text style={styles.titleCircle}> 1º</Text>
                    <Text style={styles.quantityCircle}>40</Text>
                    <Text style={styles.textCircle}>Objetivos concluidos</Text>
                </View>
            </View>

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
    cardRank1: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
        width: 360,
        height: 70,
        paddingTop: 5,
        marginTop: 40,
        backgroundColor: "#8404D9",
        borderRadius: 50
    },
    imgRank1: {
        width: 60,
        height: 60,
        marginLeft: 5,
        borderRadius: 50
    },
    textRank1: {
        color: "white",
        textAlign: "center",
        marginLeft: 35,
        marginTop: 5,
        fontWeight: "700"
    },
    circles: {
        width: 400,
        height: 400,
        alignContent: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: 50,
        padding: 50,
        transform: [{ rotate: "45deg" }]
    },
    titleCircle: {
        color: "white",
        fontSize: 30,
        fontWeight: "900",
        textAlign: "center"
    },
    quantityCircle: {
        color: "white",
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center"
    },
    textCircle: {
        width: "80%",
        marginLeft: 14,
        color: "white",
        fontSize: 16,
        fontWeight: "200",
        textAlign: "center"
    },
    circleRank1: {
        justifyContent: "center",
        alignContent: "center",
        width: 140,
        height: 140,
        backgroundColor: "#00D65F",
        borderRadius: 70,
        marginRight: 15,
        marginBottom: 15,
        transform: [{ rotate: "-45deg" }]
    },
    circleRank2: {
        justifyContent: "center",
        alignContent: "center",
        width: 140,
        height: 140,
        backgroundColor: "#F9E800",
        borderRadius: 70,
        transform: [{ rotate: "-45deg" }]
    },
    circleRank3: {
        justifyContent: "center",
        alignContent: "center",
        width: 140,
        height: 140,
        backgroundColor: "#00C2EE",
        borderRadius: 70,
        marginRight: 15,
        marginBottom: 15,
        transform: [{ rotate: "-45deg" }]
    },
    circleRank4: {
        justifyContent: "center",
        alignContent: "center",
        width: 140,
        height: 140,
        backgroundColor: "#FF271C",
        borderRadius: 70,
        transform: [{ rotate: "-45deg" }]
    },
});