'use strict';
export const weekDayNames =[
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

export const monthNames=[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 * @param {number} dataUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. formate: "Sunday 10, Jan"
 */

export const getDate = function(dataUnix, timezone){
    const date=new Date((dataUnix + timezone)*1000); /*dataUnix is presumably a Unix timestamp. It represents the number of seconds since the Unix Epoch (January 1, 1970).  Multiplying by 1000 converts the result from seconds to milliseconds,*/
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}
/**
 * @param {number} timeUnix  Unix date in seconds
 * @param {number} timezone  Timezone shift from UTC in seconds
 * @returns {string} Time string. format: "HH:MM AM/PM"
 */
export const getTime=function(timeUnix, timezone){
    const date=new Date((timeUnix+timezone)*1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >=12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * @param {number} timeUnix  Unix date in seconds
 * @param {number} timezone  Timezone shift from UTC in seconds
 * @returns {string} Time string. format: "HH AM/PM"
 */
export const getHours=function(timeUnix, timezone){
    const date=new Date((timeUnix+timezone)*1000);
    const hours = date.getUTCHours();
    const period = hours >=12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}

/**
 * 
 * @param {number} mps Meter per seconds
 * @returns {number} kilometer per hour
 */
export const mps_to_kmh = mps=>{
    const mph = mps*3600;
    return mph/1000;
}

export const aqiText ={
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk"
    },
2:{
    level:"Fair",
    message: "Air quality is acceptable; However, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
  },
3:{
    level: "Moderate",
    messagr: "Members of sensitive groups may experience health effects. The general public is not likely to be affected."
   },
4:{
    level: "Poor",
    messagr: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects."
   },
5:{
    level: "Very Poor",
    messagr: "Health warnings of emergency conditions. The entire population is more likely to be affected."
   }  

}

