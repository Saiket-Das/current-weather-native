import { View, Text, Image } from 'react-native'
import React from 'react'
import Weather from '../assets/icons/cloudy.png'
// import { Divider } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { StyleSheet } from 'react-native';



export default function WeatherInfo({ weatheInfo, darkMode }) {

    const tempK = (weatheInfo?.main?.temp - 273).toFixed(2);
    const tempC = Math.round(tempK)

    return (
        <View style={styles.WeatherInfoCon}>
            <Image style={styles.WeatherImg} source={Weather} />

            <Divider width={2} orientation='vertical' />

            <View style={{ alignItems: 'center' }}>
                <Text style={{
                    ...styles.degree,
                    color: darkMode ? '#2f2f2f' : '#FFFFFF',
                }}>
                    {tempC}°
                </Text>

                <Text style={{
                    ...styles.WeatherInfo,
                    color: darkMode ? '#2f2f2f' : '#FFFFFF',
                }}
                >
                    {weatheInfo?.weather[0].description || ''}
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

    WeatherImg: {
        width: 100,
        height: 100
    },

    degree: {
        fontSize: 45,
        fontWeight: '200'
    },

    WeatherInfo: {
        fontSize: 14,
        opacity: 0.8,
        textTransform: 'capitalize'
    }
})