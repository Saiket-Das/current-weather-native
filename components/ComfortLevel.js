import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'



export default function ComfortLevel({ darkMode, weatheInfo }) {

    const tempK = (weatheInfo?.main?.feels_like - 273).toFixed(2);
    const feelLikeTempC = Math.round(tempK);

    const visibilityKM = (weatheInfo?.visibility / 1000).toFixed(0);
    // const feelLikeTempC = Math.round(tempK)

    return (
        <View style={{
            ...styles.comfortLevelCon,
            backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
        }}>
            <Text style={{
                ...styles.comfortLevelText, color: darkMode ? '#2f2f2f' : '#FFFFFF',
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


                    {/* ---------- Text Inside the Circle ---------- */}
                    <View>
                        <Text style={{
                            ...styles.humidityPercentage,
                            color: darkMode ? '#2f2f2f' : '#FFFFFF',
                            textAlign: 'center'
                        }}>
                            {weatheInfo?.main?.humidity}%
                        </Text>
                        <Text style={{
                            ...styles.humidityText,
                            color: darkMode ? '#2f2f2f' : '#FFFFFF'
                        }}>
                            Humidity
                        </Text>
                    </View>

                    {/* ---------- Circle Gap ---------- */}
                    <View style={{
                        ...styles.circleSubCon,
                        backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
                    }}>
                    </View>
                </View>


                <View style={{
                    ...styles.comfortLevelFeelCon,
                }}>
                    <View>
                        <Text style={{
                            color: darkMode ? '#2f2f2f' : '#FFFFFF',
                        }}>
                            Feels Like {feelLikeTempC}°
                        </Text>
                    </View>

                    <View>
                        <Text style={{
                            color: darkMode ? '#2f2f2f' : '#FFFFFF',
                        }}>
                            Visibility {visibilityKM}KM
                        </Text>
                    </View>
                </View>

            </View >


        </View >
    )
}

const styles = StyleSheet.create({

    comfortLevelCon: {
        height: 200,
        borderColor: '#eee',
        borderRadius: 10,
        borderTopRightRadius: 45,
        borderBottomLeftRadius: 40,
        marginTop: 20
    },
    comfortLevelText: {
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

    circleSubCon: {
        position: 'absolute',
        bottom: -10,
        width: 60,
        height: 25,
        borderRadius: -0,
        paddingHorizontal: 3,
    },

    comfortLevelFeelCon: {
        flexDirection: 'row',
        marginTop: 2,
        width: '100%',
        justifyContent: 'space-around'
    },

})