import { View, Text, Image, TouchableOpacity, Animated, StyleSheet } from 'react-native'
import React from 'react'
import CityInfo from '../components/CityInfo'
import WeatherInfo from '../components/WeatherInfo'
import Menu from '../assets/icons/menu.png'
import WindInfo from '../components/WindInfo'


export default function Home({ scaleValue, offsetValue, closeButtonOffset, showMenu, setShowMenu, darkMode }) {
    return (
        <Animated.View
            style={{
                transform: [
                    { translateY: closeButtonOffset },
                ],
            }}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => {
                        // Do Actions Here....
                        // Scaling the view...
                        Animated.timing(scaleValue, {
                            toValue: showMenu ? 1 : 0.78,
                            duration: 300,
                            useNativeDriver: true
                        })
                            .start()

                        Animated.timing(offsetValue, {
                            // YOur Random Value...
                            toValue: showMenu ? 0 : 230,
                            duration: 300,
                            useNativeDriver: true
                        })
                            .start()

                        Animated.timing(closeButtonOffset, {
                            // YOur Random Value...
                            toValue: !showMenu ? -30 : 0,
                            duration: 300,
                            useNativeDriver: true
                        })
                            .start()

                        setShowMenu(!showMenu);
                    }}
                >
                    <Image source={Menu}
                        style={{
                            ...styles.menuImg,
                            tintColor: darkMode ? '#2f2f2f' : '#eee',
                        }}
                    />
                </TouchableOpacity>

                <Text style={{ ...styles.weatheType, color: darkMode ? '#2f2f2f' : '#eee', }}>Sunny</Text>
            </View>

            <CityInfo darkMode={darkMode}></CityInfo>
            <WeatherInfo darkMode={darkMode}></WeatherInfo>
            <WindInfo darkMode={darkMode}></WindInfo>


        </Animated.View>
    )
}



const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },

    menuImg: {
        width: 35,
        height: 35,
    },

    weatheType: {
        fontSize: 20,
        paddingLeft: 35,
        fontWeight: '500'
    }
});