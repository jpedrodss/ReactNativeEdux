import React, { useState } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { url } from '../../utils/constants'
import { styles } from '../../App'

export default function Home() {
    return(
        <View style={styles.container}>
            <Text>
                Ranking
            </Text>
        </View>
    )
}