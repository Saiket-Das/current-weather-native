import { View, Text, Image } from 'react-native'
import React from 'react'
import Weather from '../assets/icons/cloudy.png'
// import { Divider } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { StyleSheet } from 'react-native';



export default function WeatherInfo({ darkMode }) {
    return (
        <View style={styles.WeatherInfoCon}>
            <Image style={{ width: 100, height: 100 }} source={Weather} />

            <Divider width={2} orientation='vertical' />

            <View style={{ alignItems: 'center' }}>
                <Text style={{
                    ...styles.degree,
                    color: darkMode ? '#2f2f2f' : '#eee',
                }}
                >
                    14°
                </Text>

                <Text style={{
                    ...styles.WeatherInfo,
                    color: darkMode ? '#2f2f2f' : '#eee',
                }}
                >
                    Rainy Shower
                </Text>

            </View>
        </View>


    )
};



const styles = StyleSheet.create({

    WeatherInfoCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 30
    },

    degree: {
        fontSize: 45,
        fontWeight: '200'
    },

    WeatherInfo: {
        fontSize: 14,
        opacity: 0.8
    }
})