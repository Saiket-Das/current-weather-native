import { View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchBar({ setCityName, darkMode }) {
  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
        query={{ key: `${process.env.GOOGLE_PLACES_AUTOCOMPLETE_KEY}` }}
        onPress={(data, details = null) => {
          const city = data.description.split(",")[0];
          setCityName(city);
        }}
        placeholder="Search City"
        styles={{
          textInput: {
            backgroundColor: darkMode ? "#f3f3f3" : "#FFFFFF",
            borderRadius: 60,
            fontWeight: "500",
            marginTop: 3,
          },
          textInputContainer: {
            backgroundColor: darkMode ? "#f3f3f3" : "#FFFFFF",
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            padding: 0,
            justifyContent: "center",
            alignItems: "center",
            // marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          //     listView: {
          //         top: 45.5,
          //         zIndex: 1,
          //         position: 'absolute',
          //         color: 'black',
          //         backgroundColor: "white",
          //         width: '89%',
          //     },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
