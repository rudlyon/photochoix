import React from "react"
import { View, Text, ScrollView } from "react-native"
import { StyleSheet } from "react-native"


export default function Liens() {
    return (
        <View>
            <ScrollView style={styles.liste}>
                <Text style={styles.tableaux}>Tableau automne</Text>
                <Text style={styles.tableaux}>Tableau hiver</Text>
                <Text style={styles.tableaux}>Tableau printemps</Text>
                <Text style={styles.tableaux}>Tableau été</Text>
            </ScrollView>
        </View>
    );
};

    const styles = StyleSheet.create({

        tableaux: {
            marginBottom: 20,
            fontSize: 20,
            color: 'blue',
            textDecorationStyle: 'solid'
          },
          liste: {
            marginTop: 50,
          },
    })