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

            <View style={{
                alignItems: 'center',
                // borderColor: '#FFFFFF',
                // borderWidth: 1,
            }}>



                {/* ---------- Circle Dashed ---------- */}
                <View style={{
                    height: 110,
                    width: 110,
                    borderRadius: 110 / 2,
                    borderWidth: 1,
                    borderStyle: 'dashed',
                    borderColor: '#FFFFFF',
                }}>
                </View>


                {/* ---------- Sunrise ---------- */}
                <Text style={{
                    textAlign: 'center',
                    position: 'absolute',
                    marginTop: 110 / 4.5,
                    color: darkMode ? '#2f2f2f' : '#FFFFFF',
                }}>
                    Sunrise
                </Text>


                {/* ---------- Sunset ---------- */}
                <Text style={{
                    position: 'absolute',
                    marginTop: 110 / 1.6,
                    color: darkMode ? '#2f2f2f' : '#FFFFFF',
                }}>
                    Sunset
                </Text>


                {/* ---------- Horizental Line ---------- */}
                <View
                    style={{
                        borderWidth: 1,
                        width: 300,
                        position: 'absolute',
                        marginTop: 110 / 2,
                        borderRadius: 3,
                        borderColor: '#FFFFFF',
                        flex: 1,
                        justifyContent: 'space-between'
                    }}>

                    {/* ---------- Sunrise & Sunset ---------- */}
                    <Text style={{
                        backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
                        color: darkMode ? '#2f2f2f' : '#FFFFFF',
                        position: 'absolute',
                        marginTop: -8,
                        right: -10,
                        paddingHorizontal: 5,
                    }}>6:00 PM</Text>

                    <Text style={{
                        backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
                        color: darkMode ? '#2f2f2f' : '#FFFFFF',
                        position: 'absolute',
                        marginTop: -8,
                        paddingHorizontal: 5,
                        left: -10,
                        textAlign: 'center',
                    }}>6:00 AM</Text>
                </View>

                <Image style={{
                    width: 25,
                    height: 25,
                    position: 'absolute',
                    top: -11,
                    backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
                }}
                    source={Sun}
                />

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
    }
})