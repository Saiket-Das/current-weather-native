import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

import CityInfo from "../components/CityInfo";
import WeatherInfo from "../components/WeatherInfo";
import Menu from "../assets/icons/menu.png";
import WindInfo from "../components/WindInfo";
import SearchBar from "../components/SearchBar";
import SunRiseAndSet from "../components/SunRiseAndSet";
import ComfortLevel from "../components/ComfortLevel";
import Wind from "../components/Wind";
import useLocation from "../hooks/useLocation";
import Text from "../components/common/AppText";
import colors from "../config/colors";

export default function Home({
  scaleValue,
  offsetValue,
  closeButtonOffset,
  showMenu,
  setShowMenu,
  darkMode,
}) {
  const location = useLocation();

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
      await `https://api.openweathermap.org/data/2.5/weather?lat=${location?.latitude}&lon=${location?.longitude}&appid=${process.env.GET_WEATHER_API_KEY}`;
    // const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.GET_WAETHER_API_KEY}`;

    return fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => setWeatherInfo(data));
  };

  useEffect(() => {
    getWeatheInfo();
  }, [location]);

  return (
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
                tintColor: darkMode ? colors.dark : colors.white,
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              ...styles.weatheType,
              color: darkMode ? colors.dark : colors.white,
            }}
          >
            {weatheInfo?.weather && weatheInfo?.weather[0]?.main}
          </Text>
        </View>

        {/* <SearchBar setCityName={setCityName} darkMode={darkMode}></SearchBar> */}
        <CityInfo
          weatheInfo={weatheInfo}
          darkMode={darkMode}
          currentTime={currentTime}
        />

        <WeatherInfo weatheInfo={weatheInfo} darkMode={darkMode} />
        <WindInfo weatheInfo={weatheInfo} darkMode={darkMode} />
        <SunRiseAndSet
          weatheInfo={weatheInfo}
          darkMode={darkMode}
          sunrise={sunrise}
          sunset={sunset}
        />
        <ComfortLevel weatheInfo={weatheInfo} darkMode={darkMode} />
        <Wind weatheInfo={weatheInfo} darkMode={darkMode}></Wind>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
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
