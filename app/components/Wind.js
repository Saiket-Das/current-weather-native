import { View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import Sun from "../assets/icons/wind-power.png";
import Text from "./common/AppText";
import colors from "../config/colors";

export default function Wind({ darkMode, weatheInfo }) {
  let windDirection;
  if (weatheInfo?.wind?.deg > 270 && weatheInfo?.wind?.deg <= 360) {
    windDirection = "North";
  } else if (weatheInfo?.wind?.deg > 180 && weatheInfo?.wind?.deg <= 270) {
    windDirection = "West";
  } else if (weatheInfo?.wind?.deg > 90 && weatheInfo?.wind?.deg <= 180) {
    windDirection = "South";
  } else if (weatheInfo?.wind?.deg > 0 && weatheInfo?.wind?.deg <= 90) {
    windDirection = "East";
  }

  return (
    <View
      style={{
        ...styles.windCon,
        backgroundColor: darkMode ? colors.lightWhite : colors.lightDark,
      }}
    >
      <Text
        style={{
          padding: 15,
          fontSize: 15,
          fontWeight: "500",
          color: darkMode ? colors.lightGray : colors.white,
        }}
      >
        Wind
      </Text>

      <View style={{ alignItems: "center" }}>
        {/* ---------- Linear Circle ---------- */}

        <View
          style={{
            ...styles.windImgCon,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image style={{ width: 90, height: 90 }} source={Sun} />
        </View>

        <View
          style={{
            ...styles.windDirectionAndSpeedCon,
          }}
        >
          <View>
            <Text
              style={{
                color: darkMode ? colors.lightGray : colors.white,
              }}
            >
              Direction: {windDirection}
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: darkMode ? colors.lightGray : colors.white,
              }}
            >
              Speed: {Math.round(weatheInfo.wind?.speed * 1.60934) + "KM/hr"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  windCon: {
    height: 200,
    borderColor: "#eee",
    borderRadius: 10,
    borderTopRightRadius: 45,
    borderBottomLeftRadius: 40,
    marginTop: 20,
  },

  windImgCon: {
    height: 120,
    width: 120,
    // borderWidth: 10,
  },

  windDirectionAndSpeedCon: {
    flexDirection: "row",
    marginTop: 2,
    width: "100%",
    justifyContent: "space-around",
  },
});
