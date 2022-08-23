import { View, Text, Image, TouchableOpacity, Animated, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CityInfo from '../components/CityInfo'
import WeatherInfo from '../components/WeatherInfo'
import Menu from '../assets/icons/menu.png'
import WindInfo from '../components/WindInfo'
import SearchBar from '../components/SearchBar'


export default function Home({ scaleValue, offsetValue, closeButtonOffset, showMenu, setShowMenu, darkMode }) {

    const [cityName, setCityName] = useState('Delhi');
    const [weatheInfo, setWeatherInfo] = useState([]);

    console.log('---------------<>-----------------', weatheInfo)
    console.log('City Name:', weatheInfo.name)
    // console.log('Weather Info:', weatheInfo?.weather[0]?.main)
    console.log('Weather Temp:', weatheInfo?.main?.temp)
    console.log('Weather Hum:', weatheInfo?.main?.humidity)
    console.log('Wind Speed:', weatheInfo?.wind?.speed)

    // "dt": 1661290693,
    // "id": 1185241,
    // "main": Object {
    //   "feels_like": 304.92,
    //   "humidity": 78,
    //   "pressure": 1005,
    //   "temp": 301.14,
    //   "temp_max": 301.14,
    //   "temp_min": 301.14,
    // },
    // "name": "Dhaka",
    // "sys": Object {
    //   "country": "BD",
    //   "id": 9145,
    //   "sunrise": 1661297843,
    //   "sunset": 1661343884,
    //   "type": 1,
    // },

    const getWeatheInfo = () => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.GET_WAETHER_API_KEY}`;

        return fetch(weatherURL)
            .then(res => res.json())
            .then(data => setWeatherInfo(data));
    }

    useEffect(() => {
        getWeatheInfo();
    }, [cityName])

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
                            // Random Value...
                            toValue: showMenu ? 0 : 230,
                            duration: 300,
                            useNativeDriver: true
                        })
                            .start()

                        Animated.timing(closeButtonOffset, {
                            // Random Value...
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
                            tintColor: darkMode ? '#2f2f2f' : '#FFFFFF',
                        }}
                    />
                </TouchableOpacity>

                <Text style={{ ...styles.weatheType, color: darkMode ? '#2f2f2f' : '#FFFFFF', }}>{weatheInfo?.weather[0]?.main}</Text>



            </View>

            <SearchBar setCityName={setCityName} darkMode={darkMode}></SearchBar>
            <CityInfo weatheInfo={weatheInfo} darkMode={darkMode}></CityInfo>
            <WeatherInfo weatheInfo={weatheInfo} darkMode={darkMode}></WeatherInfo>
            <WindInfo weatheInfo={weatheInfo} darkMode={darkMode}></WindInfo>


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