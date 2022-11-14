import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Home from "./app/screens/Home";
import DarkMode from "./app/assets/icons/dark-mode.png";
import colors from "./app/config/colors";
import Screen from "./app/components/common/Screen";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Animated Properties...
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <Screen
      style={{
        // ...styles.menuContainer,
        backgroundColor: darkMode ? colors.white : colors.dark,
      }}
    >
      <StatusBar style={darkMode ? "dark" : "light"} />

      {/* ------- DRAWER OVERLAY ------- */}
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              // Do Actions Here....
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

              setShowMenu(true);
              setDarkMode(!darkMode);
              // setShowMenu(!showMenu)
            }}
          >
            <Image
              source={DarkMode}
              style={{
                ...styles.modeImg,
                tintColor: darkMode ? "#2f2f2f" : colors.white,
              }}
            />

            {darkMode ? (
              <Text
                style={{
                  ...styles.modeText,
                  color: darkMode ? "#2f2f2f" : colors.white,
                }}
              >
                Dark
              </Text>
            ) : (
              <Text
                style={{
                  ...styles.modeText,
                  color: darkMode ? colors.dark : colors.white,
                }}
              >
                Light
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* ------- HOME SCREEN ------- */}
      <Animated.View
        style={{
          ...styles.animatedScreen,
          backgroundColor: darkMode ? colors.white : colors.dark,
          shadowColor: darkMode ? colors.lightGray : colors.darkGray,
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Home
            scaleValue={scaleValue}
            offsetValue={offsetValue}
            closeButtonOffset={closeButtonOffset}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            darkMode={darkMode}
          ></Home>
        </ScrollView>
      </Animated.View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
  },

  animatedScreen: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    // paddingTop: 20,
    borderRadius: 10,
    shadowOffset: { width: -10, height: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  modeImg: {
    width: 28,
    height: 28,
  },

  modeText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
});
