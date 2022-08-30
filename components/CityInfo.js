import { View, Text, StyleSheet } from 'react-native'
import React from 'react'



export default function CityInfo({ weatheInfo, darkMode }) {

    let todayUnix = weatheInfo?.sys?.sunrise
    let todayDate = new Date(todayUnix * 1000);
    console.log('-------- Date --------', todayDate);

    const date = todayDate.getDate()
    const month = todayDate.getMonth()
    const condtionalMonth = month >= 10 ? (month + 1) : '0' + (month + 1)
    const year = todayDate.getFullYear();
    const currentDate = date + '-' + (condtionalMonth) + '-' + year
    console.log("Today's Date", currentDate);

    return (
        <View style={styles.CityDetails}>

            <Text style={{
                ...styles.today,
                color: darkMode ? '#2f2f2f' : '#FFFFFF',
            }}>
                Today
            </Text>

            <Text style={{
                ...styles.city,
                color: darkMode ? '#2f2f2f' : '#FFFFFF',
            }}>
                {weatheInfo?.name}
            </Text>

            <Text style={{
                ...styles.date,
                color: darkMode ? '#2f2f2f' : '#FFFFFF',
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