
async function initGeo(){
    let lat;
    let lng;
    if(handleGeoInfo.isSet()){
        const curPos=handleGeoInfo.getGeoInfo();
        lat=curPos.lat;
        lng=curPos.lng;
        //return new Promise((resolve)=>{resolve({"lat":lat,"lng":lng})});
    }
    else{
        const getPosition=function(){
            return new Promise((resolve,reject)=>{
                navigator.geolocation.getCurrentPosition(resolve,reject);
            })
        }
        /*return*/ await getPosition()
        .then((position)=>{
            lat=position.coords.latitude;
            lng=position.coords.longitude;
            console.log("a");
            handleGeoInfo.setLoca(lat,lng);
            handleGeoInfo.updateLoca();
            console.dir(position);
            return new Promise((position)=>{position({"lat":lat,"lng":lng})});
        });
    }

    return new Promise((resolve)=>{resolve({"lat":lat,"lng":lng})});
}
/*
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function delayreturn(){
    await delay(3000);
    return {"lat":44,"lng":33};
}
*/
const handleGeoInfo=(function(){
    let lat;
    let lng;
    return {
        updateLoca:function(){
            localStorage.setItem("lat",lat);
            localStorage.setItem("lng",lng);
        },
        setLoca:function(a,b){
            lat=a;
            lng=b;
        },
        isSet:function(){
            lat=localStorage.getItem("lat");
            lng=localStorage.getItem("lng");
            console.log(lat);
            if(lat!=null&&lng!=null){
                console.log("true");
                return true;
            }
            else {
                console.log("false");
                return false;
            }
        },
        getGeoInfo:function(){
            return {"lat": lat, "lng":lng};
        }
    }
})();

export {initGeo}