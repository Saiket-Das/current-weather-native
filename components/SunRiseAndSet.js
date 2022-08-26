import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Sun from '../assets/icons/Sun.png'
import { Image } from 'react-native'


export default function SunRiseAndSet({ darkMode }) {
    return (
        <View style={{
            ...styles.sunsetAndRiseCon,
            backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
        }}>
            <Text style={{
                ...styles.sunsetAndRiseText, color: darkMode ? '#2f2f2f' : '#FFFFFF',
            }}>
                Sunrise and Sunset
            </Text>

            <View style={{ alignItems: 'center' }}>

                {/* ---------- Circle Dashed ---------- */}
                <View style={{ ...styles.dashedCircel, borderColor: darkMode ? '#2f2f2f' : '#FFFFFF', alignItems: 'center' }}>

                    {/* ---------- Sunrise ---------- */}
                    <Text style={{
                        ...styles.sunriseAndSunsetText, color: darkMode ? '#2f2f2f' : '#FFFFFF', marginTop: 110 / 4.5,
                    }}>
                        Sunrise
                    </Text>

                    {/* ---------- Sunset ---------- */}
                    <Text style={{
                        ...styles.sunriseAndSunsetText, color: darkMode ? '#2f2f2f' : '#FFFFFF', marginTop: 110 / 1.65,
                    }}>
                        Sunset
                    </Text>

                </View>


                {/* ---------- Horizental Line ---------- */}
                <View style={{ ...styles.horizontalLine, borderColor: darkMode ? '#2f2f2f' : '#FFFFFF' }}>

                    {/* ---------- Sunrise & Sunset ---------- */}
                    <Text style={{
                        ...styles.sunsetAndRiseTime,
                        backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
                        color: darkMode ? '#2f2f2f' : '#FFFFFF',
                        right: -10
                    }}>
                        6:05 PM
                    </Text>

                    <Text style={{
                        ...styles.sunsetAndRiseTime,
                        backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
                        color: darkMode ? '#2f2f2f' : '#FFFFFF',
                        left: -10
                    }}>
                        5:59 AM
                    </Text>

                </View>

                <View style={{ ...styles.sunImgCon, backgroundColor: darkMode ? '#fafafa' : '#3e3e42' }}>
                    <Image style={{ width: 25, height: 25, }} source={Sun} />
                </View>

            </View >


        </View >
    )
}

const styles = StyleSheet.create({

    sunsetAndRiseCon: {
        height: 200,
        borderColor: '#eee',
        borderRadius: 10,
        borderTopRightRadius: 45,
        borderBottomLeftRadius: 40,
    },

    sunsetAndRiseText: {
        padding: 15,
        fontSize: 15,
        fontWeight: '500'
    },

    dashedCircel: {
        height: 110,
        width: 110,
        borderRadius: 110 / 2,
        borderWidth: 1,
        borderStyle: 'dashed',
    },

    sunriseAndSunsetText: {
        fontSize: 13,
        textAlign: 'center',
        position: 'absolute',
    },

    horizontalLine: {
        borderWidth: 1,
        width: 300,
        position: 'absolute',
        borderRadius: 3,
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 110 / 2,
    },

    sunsetAndRiseTime: {
        position: 'absolute',
        marginTop: -8,
        paddingHorizontal: 5,
        textAlign: 'center',
    },

    sunImgCon: {
        position: 'absolute',
        top: -11,
        paddingHorizontal: 3,
    },
})