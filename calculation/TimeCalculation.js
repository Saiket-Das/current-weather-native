import { useEffect, useState } from 'react';

const useTimeCalculation = (formattedTime) => {

    const [time, setTime] = useState(false);
    // const [adminLoading, setAdminLoading] = useState(true);
    // Check correct time format and split into components
    useEffect(() => {
        formattedTime = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (formattedTime.length > 1) { // If time format correct
            formattedTime = formattedTime.slice(1);  // Remove full string match value
            formattedTime[5] = +formattedTime[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            formattedTime[0] = +formattedTime[0] % 12 || 12; // Adjust hours
        }
        setTime(time.join('')); // return adjusted time or original string
        // const twelveHourtime = tConvert(formattedTime);
        // console.log('12 Hour Sunset Time', twelveHourtime)

    }, [formattedTime])

    return [time]
};

export default useTimeCalculation;