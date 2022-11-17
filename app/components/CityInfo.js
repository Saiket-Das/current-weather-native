import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "./common/AppText";
import colors from "../config/colors";

export default function CityInfo({ weatheInfo, darkMode, currentTime }) {
  let todayUnix = weatheInfo?.sys?.sunrise;
  let todayDate = new Date(todayUnix * 1000);

  const date = todayDate.getDate();
  const month = todayDate.getMonth();
  const condtionalMonth = month >= 10 ? month + 1 : "0" + (month + 1);
  const year = todayDate.getFullYear();
  const currentDate = date + "-" + condtionalMonth + "-" + year;

  return (
    <View style={styles.CityDetails}>
      <Text
        style={{
          fontSize: 14,
          color: darkMode ? colors.lightGray : colors.white,
        }}
      >
        Today
      </Text>

      <Text
        style={{
          fontSize: 26,
          fontWeight: "700",
          marginTop: 3,
          color: darkMode ? colors.lightGray : colors.white,
        }}
      >
        {weatheInfo?.name}
      </Text>

      <Text
        style={{
          fontSize: 14,
          marginTop: 5,
          opacity: 0.8,
          color: darkMode ? colors.lightGray : colors.white,
        }}
      >
        {currentDate}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  CityDetails: {
    marginTop: 20,
    marginLeft: 3,
  },
});
