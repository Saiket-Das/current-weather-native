import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import CityInfo from "../components/CityInfo";
import WeatherInfo from "../components/WeatherInfo";
import Menu from "../assets/icons/menu.png";
import WindInfo from "../components/WindInfo";
import SearchBar from "../components/SearchBar";
import SunRiseAndSet from "../components/SunRiseAndSet";
import ComfortLevel from "../components/ComfortLevel";
import { ScrollView } from "react-native";
import Wind from "../components/Wind";
import useLocation from "../hooks/useLocation";

export default function Home({
  scaleValue,
  offsetValue,
  closeButtonOffset,
  showMenu,
  setShowMenu,
  darkMode,
}) {
  const location = useLocation();

  console.log(location);

  const [cityName, setCityName] = useState("New York");
  const [weatheInfo, setWeatherInfo] = useState([]);

  function timeConvert(todayUnix) {
    let date = new Date(todayUnix * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    let time = hours + ":" + minutes.substr(-2);

    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    } else {
      time[0] = time[0] + " AM";
    }

    return time.join(""); // return adjusted time or original string
  }

  const sunrise = timeConvert(weatheInfo?.sys?.sunrise);
  const sunset = timeConvert(weatheInfo?.sys?.sunset);
  const currentTime = timeConvert(weatheInfo?.dt);

  const getWeatheInfo = async () => {
    const weatherURL =
      await `https://api.openweathermap.org/data/2.5/weather?lat=${location?.latitude}&lon=${location?.longitude}&appid=${process.env.GET_WAETHER_API_KEY}`;
    // const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.GET_WAETHER_API_KEY}`;

    return fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => setWeatherInfo(data));
  };

  useEffect(() => {
    getWeatheInfo();
  }, [cityName]);

  return (
    // <ScrollView>
    <View>
      <Animated.View
        style={{
          transform: [{ translateY: closeButtonOffset }],
        }}
      >
        {/* Animated Header (Menu) */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => {
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.78,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            <Image
              source={Menu}
              style={{
                ...styles.menuImg,
                tintColor: darkMode ? "#2f2f2f" : "#FFFFFF",
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              ...styles.weatheType,
              color: darkMode ? "#2f2f2f" : "#FFFFFF",
            }}
          >
            {weatheInfo?.weather && weatheInfo?.weather[0]?.main}
          </Text>
        </View>

        <SearchBar setCityName={setCityName} darkMode={darkMode}></SearchBar>
        <CityInfo
          weatheInfo={weatheInfo}
          darkMode={darkMode}
          currentTime={currentTime}
        ></CityInfo>
        <WeatherInfo weatheInfo={weatheInfo} darkMode={darkMode}></WeatherInfo>
        <WindInfo weatheInfo={weatheInfo} darkMode={darkMode}></WindInfo>
        <SunRiseAndSet
          weatheInfo={weatheInfo}
          darkMode={darkMode}
          sunrise={sunrise}
          sunset={sunset}
        ></SunRiseAndSet>
        <ComfortLevel
          weatheInfo={weatheInfo}
          darkMode={darkMode}
        ></ComfortLevel>
        <Wind weatheInfo={weatheInfo} darkMode={darkMode}></Wind>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },

  menuImg: {
    width: 35,
    height: 35,
  },

  weatheType: {
    fontSize: 20,
    paddingLeft: 35,
    fontWeight: "500",
  },
});

// console.log('---------------<>-----------------', weatheInfo)
// console.log('City Name:', weatheInfo.name)
// console.log('Weather Temp:', weatheInfo?.main?.temp)
// console.log('Weather Temp:', weatheInfo?.weather)
// console.log('Weather Hum:', weatheInfo?.main?.humidity)
// console.log('Sunrise:', weatheInfo?.sys?.sunset)

// useEffect(() => {
//     (async () => {
//         let { status } = await Location.requestForegroundPermissionsAsync();
//         if (status !== 'granted') {
//             setErrorMsg('Permission to access location was denied');
//             return;
//         }

//         let location = await Location.getCurrentPositionAsync({});
//         setLocation(location);
//     })();
// }, []);

// let myLocation = 'Waiting..';
// if (errorMsg) {
//     myLocation = errorMsg;
// } else if (location) {
//     myLocation = JSON.stringify(location);
// }

// console.log('My Location', myLocation)
