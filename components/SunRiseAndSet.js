import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Sun from '../assets/icons/Sun.png'
import { Image } from 'react-native'
// import useTimeCalculation from '../calculation/TimeCalculation'


export default function SunRiseAndSet({ darkMode, weatheInfo }) {


    // const [time] = useTimeCalculation(formattedTime)
    // console.log('TIMEEEEE:', time)


    let todaySunriseUnix = weatheInfo?.sys.sunrise
    let todayDate = new Date(todaySunriseUnix * 1000);
    console.log('--------Sunrise Date --------', todayDate);
    var sunriseHours = "0" + todayDate.getHours();
    var sunriseMinutes = "0" + todayDate.getMinutes();
    var formattedTime = sunriseHours + ':' + sunriseMinutes.substr(-2)
    console.log('Sunrise Time', formattedTime);




    let todaySunsetUnix = weatheInfo?.sys.sunset
    let todayDatee = new Date(todaySunsetUnix * 1000);
    console.log('--------Sunset Dateee --------', todayDatee);

    var sunsetHours = todayDatee.getHours();
    var sunsetMinutes = "0" + todayDatee.getMinutes();
    var formattedTimee = sunsetHours + ':' + sunsetMinutes.substr(-2)
    console.log('Sunset Time', formattedTimee);

    function tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }

    const sunrise = tConvert(formattedTime);
    const sunset = tConvert(formattedTimee);

    console.log('12 Hour Sunrise Time', sunrise)
    console.log('12 Hour Sunset Time', sunset)






    function tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        console.log('time', time)

        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }

    const twelveHourtime = tConvert(formattedTimee);
    console.log('12 Hour Sunset Time', twelveHourtime)

    return (
        <View style={{
            ...styles.sunsetAndRiseCon,
            backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
        }}>
            <Text style={{
                ...styles.sunsetAndRiseText, color: darkMode ? '#2f2f2f' : '#FFFFFF',
            }}>
                Sunrise and Sunset
            </Text>

            <View style={{ alignItems: 'center' }}>

                {/* ---------- Circle Dashed ---------- */}
                <View style={{ ...styles.dashedCircel, borderColor: darkMode ? '#2f2f2f' : '#FFFFFF', alignItems: 'center' }}>

                    {/* ---------- Sunrise ---------- */}
                    <Text style={{
                        ...styles.sunriseAndSunsetText, color: darkMode ? '#2f2f2f' : '#FFFFFF', marginTop: 110 / 4.5,
                    }}>
                        Sunrise
                    </Text>

                    {/* ---------- Sunset ---------- */}
                    <Text style={{
                        ...styles.sunriseAndSunsetText, color: darkMode ? '#2f2f2f' : '#FFFFFF', marginTop: 110 / 1.65,
                    }}>
                        Sunset
                    </Text>

                </View>


                {/* ---------- Horizental Line ---------- */}
                <View style={{ ...styles.horizontalLine, borderColor: darkMode ? '#2f2f2f' : '#FFFFFF' }}>

                    {/* ---------- Sunrise & Sunset ---------- */}
                    <Text style={{
                        ...styles.sunsetAndRiseTime,
                        backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
                        color: darkMode ? '#2f2f2f' : '#FFFFFF',
                        right: -10
                    }}>
                        {sunset}
                    </Text>

                    <Text style={{
                        ...styles.sunsetAndRiseTime,
                        backgroundColor: darkMode ? '#fafafa' : '#3e3e42',
                        color: darkMode ? '#2f2f2f' : '#FFFFFF',
                        left: -10
                    }}>
                        {sunrise}
                    </Text>

                </View>

                <View style={{ ...styles.sunImgCon, backgroundColor: darkMode ? '#fafafa' : '#3e3e42' }}>
                    <Image style={{ width: 25, height: 25, }} source={Sun} />
                </View>

            </View >


        </View >
    )
}

const styles = StyleSheet.create({

    sunsetAndRiseCon: {
        height: 200,
        borderColor: '#eee',
        borderRadius: 10,
        borderTopRightRadius: 45,
        borderBottomLeftRadius: 40,
    },

    sunsetAndRiseText: {
        padding: 15,
        fontSize: 15,
        fontWeight: '500'
    },

    dashedCircel: {
        height: 110,
        width: 110,
        borderRadius: 110 / 2,
        borderWidth: 1,
        borderStyle: 'dashed',
    },

    sunriseAndSunsetText: {
        fontSize: 13,
        textAlign: 'center',
        position: 'absolute',
    },

    horizontalLine: {
        borderWidth: 1,
        width: 300,
        position: 'absolute',
        borderRadius: 3,
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 110 / 2,
    },

    sunsetAndRiseTime: {
        position: 'absolute',
        marginTop: -8,
        paddingHorizontal: 5,
        textAlign: 'center',
    },

    sunImgCon: {
        position: 'absolute',
        top: -11,
        paddingHorizontal: 3,
    },
})