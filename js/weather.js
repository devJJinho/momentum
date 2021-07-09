import { initGeo } from "./geo.js";


async function initWeather(){
    await initGeo().then((resolve)=>{
        console.log(resolve);
    });
    console.log("hi");
}

export {initWeather}