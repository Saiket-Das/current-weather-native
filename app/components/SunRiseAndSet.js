import { View, StyleSheet } from "react-native";
import React from "react";
import Sun from "../assets/icons/Sun.png";
import { Image } from "react-native";
import Text from "./common/AppText";
import colors from "../config/colors";

export default function SunRiseAndSet({ darkMode, sunrise, sunset }) {
  return (
    <View
      style={{
        ...styles.sunsetAndRiseCon,
        backgroundColor: darkMode ? colors.lightWhite : colors.lightDark,
      }}
    >
      <Text
        style={{
          padding: 15,
          fontSize: 15,
          fontWeight: "500",
          color: darkMode ? colors.dark : colors.white,
        }}
      >
        Sunrise and Sunset
      </Text>

      <View style={{ alignItems: "center" }}>
        {/* ---------- Circle Dashed ---------- */}
        <View
          style={{
            ...styles.dashedCircel,
            borderColor: darkMode ? colors.dark : colors.white,
            alignItems: "center",
          }}
        >
          {/* ---------- Sunrise ---------- */}
          <Text
            style={{
              ...styles.sunriseAndSunsetText,
              color: darkMode ? colors.dark : colors.white,
              marginTop: 110 / 4.5,
            }}
          >
            Sunrise
          </Text>

          {/* ---------- Sunset ---------- */}
          <Text
            style={{
              ...styles.sunriseAndSunsetText,
              color: darkMode ? colors.dark : colors.white,
              marginTop: 110 / 1.65,
            }}
          >
            Sunset
          </Text>
        </View>

        {/* ---------- Horizental Line ---------- */}
        <View
          style={{
            ...styles.horizontalLine,
            borderColor: darkMode ? colors.dark : colors.white,
          }}
        >
          {/* ---------- Sunrise & Sunset ---------- */}
          <Text
            style={{
              ...styles.sunsetAndRiseTime,
              backgroundColor: darkMode ? colors.lightWhite : colors.lightDark,
              color: darkMode ? colors.dark : colors.white,
              right: -10,
            }}
          >
            {sunset}
          </Text>

          <Text
            style={{
              ...styles.sunsetAndRiseTime,
              backgroundColor: darkMode ? colors.lightWhite : colors.lightDark,
              color: darkMode ? colors.dark : colors.white,
              left: -10,
            }}
          >
            {sunrise}
          </Text>
        </View>

        <View
          style={{
            ...styles.sunImgCon,
            backgroundColor: darkMode ? colors.lightWhite : colors.lightDark,
          }}
        >
          <Image style={{ width: 25, height: 25 }} source={Sun} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sunsetAndRiseCon: {
    height: 200,
    borderColor: "#eee",
    borderRadius: 10,
    borderTopRightRadius: 45,
    borderBottomLeftRadius: 40,
  },

  dashedCircel: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
    borderWidth: 1,
    borderStyle: "dashed",
  },

  sunriseAndSunsetText: {
    fontSize: 13,
    textAlign: "center",
    position: "absolute",
  },

  horizontalLine: {
    borderWidth: 1,
    width: 300,
    position: "absolute",
    borderRadius: 3,
    flex: 1,
    justifyContent: "space-between",
    marginTop: 110 / 2,
  },

  sunsetAndRiseTime: {
    position: "absolute",
    marginTop: -8,
    paddingHorizontal: 5,
    textAlign: "center",
  },

  sunImgCon: {
    position: "absolute",
    top: -11,
    paddingHorizontal: 3,
  },
});
