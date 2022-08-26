import { View, Text, Image, TouchableOpacity, Animated, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CityInfo from '../components/CityInfo'
import WeatherInfo from '../components/WeatherInfo'
import Menu from '../assets/icons/menu.png'
import WindInfo from '../components/WindInfo'
import SearchBar from '../components/SearchBar'
import SunRiseAndSet from '../components/SunRiseAndSet'
import ComfortLevel from '../components/ComfortLevel'
import { ScrollView } from 'react-native'
import Wind from '../components/Wind'
// import Geolocation from 'react-native-geolocation-service';


export default function Home({ scaleValue, offsetValue, closeButtonOffset, showMenu, setShowMenu, darkMode }) {

    const [cityName, setCityName] = useState('Delhi');
    const [weatheInfo, setWeatherInfo] = useState([]);

    console.log('---------------<>-----------------', weatheInfo)
    console.log('City Name:', weatheInfo.name)
    console.log('Weather Temp:', weatheInfo?.main?.temp)
    // console.log('Weather Temp:', weatheInfo?.weather[0]?.main)
    console.log('Weather Hum:', weatheInfo?.main?.humidity)
    console.log('Wind Speed:', weatheInfo?.wind?.deg)


    // Geolocation.getCurrentPosition(
    //     (position) => {
    //         console.log(position);
    //     },
    //     (error) => {
    //         // See error code charts below.
    //         console.log(error.code, error.message);
    //     },
    //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    // );


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
            <View style={styles.headerContainer} >
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

                <Text style={{ ...styles.weatheType, color: darkMode ? '#2f2f2f' : '#FFFFFF', }}></Text>

            </View>

            <SearchBar setCityName={setCityName} darkMode={darkMode}></SearchBar>
            <CityInfo weatheInfo={weatheInfo} darkMode={darkMode}></CityInfo>
            <WeatherInfo weatheInfo={weatheInfo} darkMode={darkMode}></WeatherInfo>
            <WindInfo weatheInfo={weatheInfo} darkMode={darkMode}></WindInfo>
            <SunRiseAndSet weatheInfo={weatheInfo} darkMode={darkMode}></SunRiseAndSet>
            <ComfortLevel weatheInfo={weatheInfo} darkMode={darkMode}></ComfortLevel>
            <Wind weatheInfo={weatheInfo} darkMode={darkMode}></Wind>

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