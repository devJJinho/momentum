import { initGeo } from "./geo.js";
import {CONSTANT} from "./constant.js";
import {stringify} from "../node_modules/querystring/index";

const weatherDiv=document.querySelector("#weatherDiv");
const weatherInfo=document.querySelector("#weatherInfo");
const weatherIcon=document.querySelector("#weatherDiv img");
const weatherCity=document.querySelector("#weatherCity");

const BASE_URL="https://devjjinho7hideapikey.netlify.app"
const PATH=".netlify/functions/weather";

function paintWeather(weather){
    const temp=(weather.main.temp-CONSTANT.TEMP_INDEX).toFixed(1);
    weatherCity.innerText=weather.name;
    weatherInfo.innerText=`Temp : ${temp}°`;
    weatherIcon.src=`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
    weatherIcon.onload=()=>{weatherIcon.classList.remove(CONSTANT.SPINNING)}
    weatherDiv.classList.remove(CONSTANT.HIDDEN_CLASSNAME);
}

function hideWeather(){
    weatherDiv.classList.add(CONSTANT.HIDDEN_CLASSNAME);
}

async function initWeather(){
    console.log("initWeather");
    if(handleWeatherInfo.doesExist()){
        paintWeather(handleWeatherInfo.getWeather());
    }
    else{
        await getWeather();
        if(handleWeatherInfo.isError==false){
            paintWeather(handleWeatherInfo.getWeather());
        }
        else{
            hideWeather();
        }
    }
}

async function getWeather(){
    const geoInfo=await initGeo();
    
    const url=new URL(PATH,BASE_URL);
    const param=stringify({
        lat:geoInfo.lat,
        lng:geoInfo.lng
    });
    url.search=param;
    try{
        const response=await fetch(url);
        const body=await response.json();
        if(body.error){
            throw("");
        }
        handleWeatherInfo.setWeather(body);
    }
    catch(error){
        handleWeatherInfo.setError();
    };
}

const handleWeatherInfo=(function(){
    let weatherInfo=[];
    let isError=false;
    return {
        doesExist:function(){
            const get=localStorage.getItem(CONSTANT.WEATHER_KEY);
            if(get!==null){
                const parseWeather=JSON.parse(get);
                const date=new Date();
                const curTimeStamp=date.getTime();
                if(curTimeStamp-parseWeather.timeStamp>=3600000){
                    return false;
                }
                weatherInfo=parseWeather;
                isError=false;
                return true;
            }
            else return false;
        },
        getWeather:function(){
            if(isError){
                return false;
            }
            else{ 
                return weatherInfo;
            }
        },
        setWeather:function(weather){
            try{
                weatherInfo=JSON.parse(weather);
            }
            catch{
                weatherInfo=weather
            }
            const date=new Date();
            const timeStamp=date.getTime();
            weatherInfo.timeStamp=timeStamp;
            isError=false;
            localStorage.setItem(CONSTANT.WEATHER_KEY,JSON.stringify(weatherInfo));
        },
        setError:function(){
            isError=true;
        }
    }
})();


export {initWeather,hideWeather};
