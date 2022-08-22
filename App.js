import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Menu from './assets/menu.png'
import DarkMode from './assets/mode.png'



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

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  manuContainer: {
    flex: 1,
  },
});
