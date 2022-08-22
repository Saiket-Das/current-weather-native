import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CityInfo({ darkMode }) {

    var today = new Date();
    const date = today.getDate()
    const month = today.getMonth()
    const condtionalMonth = month >= 10 ? (month + 1) : '0' + (month + 1)
    const year = today.getFullYear();
    const currentDate = date + '-' + (condtionalMonth) + '-' + year

    return (
        <View style={styles.CityDetails}>
            <Text style={{
                ...styles.today,
                color: darkMode ? '#2f2f2f' : '#eee',
            }}>
                Today
            </Text>

            <Text style={{
                ...styles.city,
                color: darkMode ? '#2f2f2f' : '#eee',
            }}>
                London
            </Text>

            <Text style={{
                ...styles.date,
                color: darkMode ? '#2f2f2f' : '#eee',
            }}>
                {currentDate}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    CityDetails: {
        marginTop: 20,
        marginLeft: 3,
    },

    today: {
        fontSize: 14
    },

    city: {
        fontSize: 26,
        fontWeight: '700',
        marginTop: 3
    },

    date: {
        fontSize: 14,
        marginTop: 5,
        opacity: 0.7
    }
})