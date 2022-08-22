import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DarkMode from './assets/mode.png'
import Home from './screens/Home';



export default function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false)


  // Animated Properties...
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;


  return (
    <SafeAreaView style={{
      ...styles.manuContainer, backgroundColor: darkMode ? '#eee' : '#2f2f2f',
    }}>
      <StatusBar style={darkMode ? "dark" : 'light'} />

      <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 10 }}>
        <View style={{ margin: 20 }}>

          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => {
              setDarkMode(!darkMode)
              setShowMenu(!showMenu)
            }}>
            <Image source={DarkMode} style={{ width: 25, height: 25, tintColor: darkMode ? '#2f2f2f' : '#eee' }} />
            <Text style={{ marginLeft: 10, fontSize: 16, color: darkMode ? '#2f2f2f' : '#eee' }}>Dark</Text>
          </TouchableOpacity>

        </View>
      </View>


      <Animated.View style={{
        ...styles.animatedScreen,
        backgroundColor: darkMode ? '#eee' : '#2f2f2f',
        shadowColor: darkMode ? '#2f2f2f' : '#eee',
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue },
        ]
      }}>
        <Home
          scaleValue={scaleValue}
          offsetValue={offsetValue}
          closeButtonOffset={closeButtonOffset}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          darkMode={darkMode}
        >
        </Home>
      </Animated.View>


    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  manuContainer: {
    flex: 1,
  },

  animatedScreen: {
    flexGrow: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 15,
    shadowOffset: { width: -9, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  }
});
