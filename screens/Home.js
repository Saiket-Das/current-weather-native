import { View, Text, Image, TouchableOpacity, Animated } from 'react-native'
import React from 'react'
import Menu from '../assets/menu.png'


export default function Home({ scaleValue, offsetValue, closeButtonOffset, showMenu, setShowMenu, darkMode }) {
    return (
        <Animated.View
            style={{
                transform: [
                    { translateY: closeButtonOffset },
                ],
            }}
        >


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
                <Image source={Menu} style={{
                    width: 30,
                    height: 30,
                    tintColor: darkMode ? '#2f2f2f' : '#eee',
                    marginTop: 40,
                }}></Image>
            </TouchableOpacity>


        </Animated.View>
    )
}