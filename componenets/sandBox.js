import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SandBox() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.boxOne}> one </Text>
            <Text style = {styles.boxtwo}> two </Text>
            <Text style = {styles.boxthree}> three </Text>
            <Text style = {styles.boxfour}> four </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
       // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10,
    },
    boxtwo: {
        backgroundColor: 'gold',
        padding: 20,
    },
    boxthree: {
        backgroundColor: 'coral',
        padding: 30,
    },
    boxfour: {
        backgroundColor: 'skyblue',
        padding: 40,
    }
});