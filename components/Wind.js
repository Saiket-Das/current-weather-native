import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import Sun from '../assets/icons/wind-power.png'


export default function Wind({ darkMode, weatheInfo }) {

    let windDirection;
    if (weatheInfo?.wind?.deg > 270 && weatheInfo?.wind?.deg <= 360) {
        windDirection = 'North'
    }
    else if (weatheInfo?.wind?.deg > 180 && weatheInfo?.wind?.deg <= 270) {
        windDirection = 'West'
    }

    else if (weatheInfo?.wind?.deg > 90 && weatheInfo?.wind?.deg <= 180) {
        windDirection = 'South'
    }

    else if (weatheInfo?.wind?.deg > 0 && weatheInfo?.wind?.deg <= 90) {
        windDirection = 'East'
    }

    return (
        <View style={{
            ...styles.windCon,
            backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
        }}>
            <Text style={{
                ...styles.windText, color: darkMode ? '#2f2f2f' : '#FFFFFF',
            }}>
                Wind
            </Text>

            <View style={{ alignItems: 'center' }}>

                {/* ---------- Linear Circle ---------- */}

                <View style={{
                    ...styles.windImgCon,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image style={{ width: 90, height: 90, }} source={Sun} />

                </View>

                <View style={{
                    ...styles.windDirectionAndSpeedCon,
                }}>
                    <View>
                        <Text style={{
                            color: darkMode ? '#2f2f2f' : '#FFFFFF',
                        }}>
                            Direction: {windDirection}
                        </Text>
                    </View>

                    <View>
                        <Text style={{
                            color: darkMode ? '#2f2f2f' : '#FFFFFF',
                        }}>
                            Speed: {Math.round(weatheInfo.wind?.speed * 1.60934) + 'KM/hr'}
                        </Text>
                    </View>
                </View>

            </View >


        </View >
    )
}

const styles = StyleSheet.create({

    windCon: {
        height: 200,
        borderColor: '#eee',
        borderRadius: 10,
        borderTopRightRadius: 45,
        borderBottomLeftRadius: 40,
        marginTop: 20
    },
    windText: {
        padding: 15,
        fontSize: 15,
        fontWeight: '500'
    },

    windImgCon: {
        height: 120,
        width: 120,
        // borderWidth: 10,
    },



    windDirectionAndSpeedCon: {
        flexDirection: 'row',
        marginTop: 2,
        width: '100%',
        justifyContent: 'space-around'
    },


})