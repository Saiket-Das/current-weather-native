import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'

export default function ComfortLevel({ darkMode }) {

    return (
        <View style={{
            ...styles.sunsetAndRiseCon,
            backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
        }}>
            <Text style={{
                ...styles.sunsetAndRiseText, color: darkMode ? '#2f2f2f' : '#FFFFFF',
            }}>
                Comfort Level
            </Text>

            <View style={{ alignItems: 'center' }}>



                {/* ---------- Linear Circle ---------- */}

                <View style={{
                    ...styles.linearCircle,
                    borderColor: 'linear-gradient(90deg, rgba(77,198,252,1) 8%, rgba(255,231,231,1) 50%, rgba(250,68,255,1) 89%)',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <View>
                        <Text style={{
                            ...styles.humidityPercentage,
                            color: darkMode ? '#2f2f2f' : '#FFFFFF',
                            textAlign: 'center'
                        }}>
                            72%
                        </Text>
                        <Text style={{
                            ...styles.humidityText,
                            color: darkMode ? '#2f2f2f' : '#FFFFFF'
                        }}>
                            Humidity
                        </Text>
                    </View>


                    <View style={{ ...styles.sunImgCon, backgroundColor: darkMode ? '#fafafa' : '#3e3e42', borderRadius: 10 }}>
                        {/* <Image style={{ width: 25, height: 25, }} source={Sun} /> */}
                    </View>

                </View>

                <View style={{
                    ...styles.ComfortLevelFeelCon,
                }}>
                    <View>
                        <Text style={{
                            ...styles.ComfortLevelFeelText,
                            color: darkMode ? '#2f2f2f' : '#FFFFFF',
                        }}>
                            Feels Like 10%
                        </Text>
                    </View>

                    <View>
                        <Text style={{
                            ...styles.ComfortLevelFeelText,
                            color: darkMode ? '#2f2f2f' : '#FFFFFF',
                        }}>
                            UV Index 00
                        </Text>
                    </View>
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
        marginTop: 20
    },
    sunsetAndRiseText: {
        padding: 15,
        fontSize: 15,
        fontWeight: '500'
    },

    linearCircle: {
        height: 120,
        width: 120,
        borderRadius: 120 / 2,
        borderWidth: 10,
    },

    humidityPercentage: {
        fontWeight: '700',
        fontSize: '18'
    },

    humidityText: {
        fontWeight: '500',
        fontSize: '14'
    },

    sunImgCon: {
        position: 'absolute',
        bottom: -10,
        width: 70,
        height: 25,
        paddingHorizontal: 3,
    },

    ComfortLevelFeelCon: {
        flexDirection: 'row',
        marginTop: 2,
        width: '100%',
        justifyContent: 'space-around'
    },

    ComfortLevelFeelText: {
        fontWeight: '400'
    }

})