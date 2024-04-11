'use strict';

import { updateWeather, error404} from "./app.js";
const defaultLocation ="#/weather?lat=12.8698101&lon=74.8430082"; //Mangaluru

/*To retrive current location*/
const currentLocation=function(){
    window.navigator.geolocation.getCurrentPosition(res =>{
        const {latitude, longitude} = res.coords; /*res.coords is an object that contains the coordinates of the user's current position.*/

        updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    }, err => {
        window.location.hash= defaultLocation;
    }
    );

}

/**
 * 
 * @param {string} query Searched query
 */
const serachedLocation = query => updateWeather(...query.split("&"));
//updateWeather("lat=51.5073219", "lon=-0.1276474")


const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", serachedLocation]
]);

const checkHash = function(){
    const requestURL = window.location.hash.slice(1);

    const [route, query] = requestURL.includes ? requestURL.split("?"): [requestURL];

    routes.get(route) ? routes.get(route)(query) : error404();
}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function(){
    if(!this.window.location.hash){
        this.window.location.hash="#/current-location";
    }
    else{
        checkHash();
    }
});

