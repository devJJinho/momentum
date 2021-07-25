/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/clock.js":
/*!*********************!*\
  !*** ./js/clock.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paintClock\": () => (/* binding */ paintClock),\n/* harmony export */   \"hideClock\": () => (/* binding */ hideClock)\n/* harmony export */ });\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./js/constant.js\");\nconst clock=document.querySelector(\"h2#clock\");\n\n\n\nfunction setClock(){\n    const date=new Date();\n    const hour=String(date.getHours()).padStart(2,\"0\");\n    const min=String(date.getMinutes()).padStart(2,\"0\");\n    const sec=String(date.getSeconds()).padStart(2,\"0\");\n    clock.innerText=`${hour} : ${min} : ${sec}`;\n};\n\nfunction paintClock(){\n    clock.classList.remove(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.HIDDEN_CLASSNAME)\n    setClock();\n    setInterval(setClock,1000);\n};\n\nfunction hideClock(){\n    clock.classList.add(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.HIDDEN_CLASSNAME);\n}\n\n\n//# sourceURL=webpack://momentum/./js/clock.js?");

/***/ }),

/***/ "./js/constant.js":
/*!************************!*\
  !*** ./js/constant.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONSTANT\": () => (/* binding */ CONSTANT)\n/* harmony export */ });\nconst CONSTANT={\n    \"HIDDEN_CLASSNAME\" :\"hidden\",\n    \"USERNAME_KEY\" : \"username\",\n    \"TODOS_KEY\" : \"todos\",\n    \"WEATHER_KEY\" : \"weathers\",\n    \"TEMP_INDEX\" : 273.15\n}\n\n\n\n//# sourceURL=webpack://momentum/./js/constant.js?");

/***/ }),

/***/ "./js/geo.js":
/*!*******************!*\
  !*** ./js/geo.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initGeo\": () => (/* binding */ initGeo)\n/* harmony export */ });\n\nasync function initGeo(){\n    let lat;\n    let lng;\n    if(handleGeoInfo.isSet()){\n        const curPos=handleGeoInfo.getGeoInfo();\n        lat=curPos.lat;\n        lng=curPos.lng;\n        //return new Promise((resolve)=>{resolve({\"lat\":lat,\"lng\":lng})});\n    }\n    else{\n        const getPosition=function(){\n            return new Promise((resolve,reject)=>{\n                navigator.geolocation.getCurrentPosition(resolve,reject);\n            })\n        }\n        /*return*/ await getPosition()\n        .then((position)=>{\n            lat=position.coords.latitude;\n            lng=position.coords.longitude;\n            console.log(\"a\");\n            handleGeoInfo.setLoca(lat,lng);\n            handleGeoInfo.updateLoca();\n            console.dir(position);\n            return new Promise((position)=>{position({\"lat\":lat,\"lng\":lng})});\n        });\n    }\n\n    return new Promise((resolve)=>{resolve({\"lat\":lat,\"lng\":lng})});\n}\n/*\nfunction delay(ms){\n    return new Promise(resolve=>setTimeout(resolve,ms));\n}\nasync function delayreturn(){\n    await delay(3000);\n    return {\"lat\":44,\"lng\":33};\n}\n*/\nconst handleGeoInfo=(function(){\n    let lat;\n    let lng;\n    return {\n        updateLoca:function(){\n            localStorage.setItem(\"lat\",lat);\n            localStorage.setItem(\"lng\",lng);\n        },\n        setLoca:function(a,b){\n            lat=a;\n            lng=b;\n        },\n        isSet:function(){\n            lat=localStorage.getItem(\"lat\");\n            lng=localStorage.getItem(\"lng\");\n            console.log(lat);\n            if(lat!=null&&lng!=null){\n                console.log(\"true\");\n                return true;\n            }\n            else {\n                console.log(\"false\");\n                return false;\n            }\n        },\n        getGeoInfo:function(){\n            return {\"lat\": lat, \"lng\":lng};\n        }\n    }\n})();\n\n\n\n//# sourceURL=webpack://momentum/./js/geo.js?");

/***/ }),

/***/ "./js/greeting.js":
/*!************************!*\
  !*** ./js/greeting.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paintGreeting\": () => (/* binding */ paintGreeting),\n/* harmony export */   \"hideGreeting\": () => (/* binding */ hideGreeting)\n/* harmony export */ });\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./js/constant.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./js/main.js\");\nconst loginInput=document.querySelector(\"#login-form input\");\nconst loginForm=document.querySelector(\"#login-form\");\n\nconst greetingDiv=document.querySelector(\"#greetingDiv\")\nconst h1Title=document.querySelector(\"#greetingDiv h1\");\nconst resetBtn=document.querySelector(\"#greetingDiv button\");\n\nconst todoDiv=document.querySelector(\"#todoDiv\");\n\n\n\n\n\nfunction paintGreeting(username){\n    resetBtn.addEventListener(\"click\",onResetPage);\n    const date=new Date();\n    const hour=date.getTime();\n    let greetingMsg=\"\";\n    if(hour<11) {greetingMsg=\"Good morning\";}\n    else if(hour<18) {greetingMsg=\"Good afternoon\";}\n    else greetingMsg=\"Good evening\";\n    h1Title.innerText=`${greetingMsg} ${username}`;\n    h1Title.classList.remove(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.HIDDEN_CLASSNAME);\n    greetingDiv.classList.remove(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.HIDDEN_CLASSNAME);\n}\nfunction hideGreeting(){\n    greetingDiv.classList.add(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.HIDDEN_CLASSNAME);\n}\n\nfunction onResetPage(){\n    localStorage.clear();\n    (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.paintLogin)();\n}\n\n\n\n//# sourceURL=webpack://momentum/./js/greeting.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paintLogin\": () => (/* binding */ paintLogin)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./js/todo.js\");\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.js */ \"./js/clock.js\");\n/* harmony import */ var _greeting_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./greeting.js */ \"./js/greeting.js\");\n/* harmony import */ var _quotes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes.js */ \"./js/quotes.js\");\n/* harmony import */ var _wallpaper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallpaper.js */ \"./js/wallpaper.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constant.js */ \"./js/constant.js\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather.js */ \"./js/weather.js\");\n\n\n\n\n\n\n\n\nconst loginInput=document.querySelector(\"#login-form input\");\nconst loginForm=document.querySelector(\"#login-form\");\n\nconst username=(function username(name){\n    let username=\"\";\n    return {\n        setName:function(name) {\n            username=name;\n            localStorage.setItem(_constant_js__WEBPACK_IMPORTED_MODULE_5__.CONSTANT.USERNAME_KEY,name);\n        },\n        getName:function(){\n            return username;\n        },\n        isLogin:function(){\n            if(username==\"\") {\n                return false;\n            }\n            else{\n                return true;\n            }\n        },\n        syncName:function(){\n            const get=localStorage.getItem(_constant_js__WEBPACK_IMPORTED_MODULE_5__.CONSTANT.USERNAME_KEY);\n            if(get!=null){\n                username=get;\n            }\n        }\n    }\n})();\n\nwindow.onload=function(){\n    _wallpaper_js__WEBPACK_IMPORTED_MODULE_4__.paintBg;\n    username.syncName();\n    if(username.isLogin()){\n        pageInit();\n    }\n    else{\n        paintLogin();\n    }\n}\n\nfunction pageInit(){\n    ;(0,_greeting_js__WEBPACK_IMPORTED_MODULE_2__.paintGreeting)(username.getName());\n    //paintClock();\n    _quotes_js__WEBPACK_IMPORTED_MODULE_3__.handleQuotes.paintQuotes();\n    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.todoInit)();\n    (0,_weather_js__WEBPACK_IMPORTED_MODULE_6__.initWeather)();\n}\n\nfunction handleLoginSubmit(events){\n    events.preventDefault();\n    const inputName=loginInput.value;\n    loginInput.value=\"\";\n    username.setName(inputName);\n    hideLogin();\n    pageInit();\n}\n\nfunction paintLogin(){\n    (0,_clock_js__WEBPACK_IMPORTED_MODULE_1__.hideClock)();\n    (0,_greeting_js__WEBPACK_IMPORTED_MODULE_2__.hideGreeting)();\n    _quotes_js__WEBPACK_IMPORTED_MODULE_3__.handleQuotes.hideQuotes();\n    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.hideTodo)();\n    (0,_weather_js__WEBPACK_IMPORTED_MODULE_6__.hideWeather)();\n\n    loginForm.classList.remove(_constant_js__WEBPACK_IMPORTED_MODULE_5__.CONSTANT.HIDDEN_CLASSNAME);\n    loginForm.addEventListener(\"submit\",handleLoginSubmit); \n}\n\nfunction hideLogin(){\n    loginForm.classList.add(_constant_js__WEBPACK_IMPORTED_MODULE_5__.CONSTANT.HIDDEN_CLASSNAME);\n}\n\nwindow.onfocus=()=>{\n    (0,_weather_js__WEBPACK_IMPORTED_MODULE_6__.initWeather)()\n};\n\n\n\n//# sourceURL=webpack://momentum/./js/main.js?");

/***/ }),

/***/ "./js/quotes.js":
/*!**********************!*\
  !*** ./js/quotes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleQuotes\": () => (/* binding */ handleQuotes)\n/* harmony export */ });\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./js/constant.js\");\nconst quote=document.querySelector(\"#quoteDiv span:first-child\");\nconst author=document.querySelector(\"#quoteDiv span:last-child\");\n\n\n\nconst handleQuotes=(function(){\n    const quotes=[\n    {\n        quotes:\"삶이 있는 한 희망은 있다.\",\n        author:\"키케로\"\n    },\n    {\n        quotes:\"산다는것 그것은 치열한 전투이다.\",\n        author:\"로망로랑\"\n    },\n    {\n        quotes:\"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.\",\n        author:\"사무엘존슨\"\n    },\n    {\n        quotes:\"언제나 현재에 집중할수 있다면 행복할것이다.\",\n        author:\"파울로 코엘료\"\n    },\n    {\n        quotes:\"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해\",\n        author:\"찰리 채플린\"\n    },\n    {\n        quotes:\"먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에\",\n        author:\"엘사 맥스웰\"\n    },\n    {\n        quotes:\"자신감 있는 표정을 지으면 자신감이 생긴다.\",\n        author:\"찰스다윈\"\n    }\n\n];\n\n    return { \n        paintQuotes: function(){\n        const selected=quotes[Math.round(Math.random()*(quotes.length-1))];\n        quote.innerText=selected.quotes;\n        author.innerText=selected.author;\n        quote.classList.remove(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.HIDDEN_CLASSNAME);\n        author.classList.remove(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.HIDDEN_CLASSNAME);\n        },\n        hideQuotes: function(){\n            quote.classList.add(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.HIDDEN_CLASSNAME);\n            author.classList.add(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.HIDDEN_CLASSNAME);\n        }\n    }\n})();\n\n\n\n//# sourceURL=webpack://momentum/./js/quotes.js?");

/***/ }),

/***/ "./js/todo.js":
/*!********************!*\
  !*** ./js/todo.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoInit\": () => (/* binding */ todoInit),\n/* harmony export */   \"hideTodo\": () => (/* binding */ hideTodo)\n/* harmony export */ });\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./js/constant.js\");\nconst todoForm=document.getElementById(\"todo-form\");\nconst todoList=document.getElementById(\"todo-list\");\nconst todoInput=document.querySelector(\"#todo-form input\");\nconst todoDiv=document.querySelector(\"#todoDiv\");\n\n\n\ntodoForm.addEventListener(\"submit\",handleToDoSubmit);\n\nconst todoArray=function todoArray(){\n    let todos=[];\n    return {\n        setArray:function(array){\n            todos=array;\n            this.syncArray();\n        },\n        addElement:function(element){\n            todos.push(element);\n            this.syncArray();\n        },\n        initArray:function(){\n            return new Promise((resolve,reject)=>{\n                const get=localStorage.getItem(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.TODOS_KEY);\n                if(get!==null){\n                    const parseArray=JSON.parse(get);\n                    todos=parseArray;\n                }\n                else{\n                    todos=[];\n                }\n                resolve();\n            })\n        },\n        syncArray:function(){\n            localStorage.setItem(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.TODOS_KEY,JSON.stringify(todos));\n        },\n        getArray:function(){\n            console.log(\"get Array:\"+todos);\n            return todos;\n        },\n        //수정 필요\n        delElement:function(index){\n            todos.splice(index,1);\n            this.syncArray();\n        }\n    }\n}();\n\nfunction handleToDoSubmit(event){\n    event.preventDefault();\n    const newTodo=todoInput.value;\n    todoInput.value=\"\";\n    paintToDo(newTodo);\n    todoArray.addElement(newTodo);\n};\n\nfunction paintTodoDiv(){\n    todoDiv.classList.remove(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.HIDDEN_CLASSNAME);\n}\n//삭제를 어떻게 구현해야될지?\nconst paintToDo=(function(){\n    let cnt=0;\n    return (newTodo)=> {\n    const listItem=document.createElement(\"li\");\n    const span=document.createElement(\"span\");\n    const btn=document.createElement(\"button\");\n    span.id=cnt;\n    cnt=cnt+1;\n    span.innerText=newTodo;\n    btn.innerText=\"❌\";\n    btn.addEventListener(\"click\",deleteToDo);\n    listItem.appendChild(btn);\n    listItem.appendChild(span);\n    todoList.appendChild(listItem);\n    }\n})();\n\nfunction deleteToDo(event){\n    /*\n    Array 내장 함수로 del을 구현하면, 값이 같은 todo list 중 하나를 삭제하면 순서가 뒤죽박죽이 된다.\n    때문에 localStorage와 todos[]의 배열이 항상 같다는 가정 하에 특정 순서의 요소를 삭제하는 것으로 구현함.\n    */\n    const deleteObject=event.target.parentNode;\n    const id=deleteObject.querySelector(\"span\").id;\n    const spanArray=deleteObject.parentNode.querySelectorAll(\"span\");\n    const index=(function(){\n        let cnt=0;\n        spanArray.forEach((value)=>{\n            if(value.id!=id){cnt=cnt+1\n            }\n            else{return false}\n        });\n        return cnt;\n    })();\n    todoArray.delElement(index);\n    deleteObject.remove();\n};\n\nasync function todoInit(){\n    await todoArray.initArray();\n    const todos=todoArray.getArray();\n    todos.forEach(paintToDo);\n    paintTodoDiv();\n};\n\nfunction hideTodo(){\n    const todoSpan=todoList.querySelectorAll(\"span\")\n    todoSpan.forEach((item)=>{item.parentElement.remove()});\n    console.log(todoSpan);\n    todoDiv.classList.add(_constant_js__WEBPACK_IMPORTED_MODULE_0__.CONSTANT.HIDDEN_CLASSNAME);\n};\n\n\n//# sourceURL=webpack://momentum/./js/todo.js?");

/***/ }),

/***/ "./js/wallpaper.js":
/*!*************************!*\
  !*** ./js/wallpaper.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paintBg\": () => (/* binding */ paintBg)\n/* harmony export */ });\nconst paintBg=(function(){\n    const img=[\"1.jpg\",\"2.jpg\",\"3.jpg\"];\n    const chosenImg=img[Math.floor(Math.random()*(img.length))];\n    const bgImage=document.createElement(\"img\");\n    bgImage.src=`img/${chosenImg}`;\n    document.body.appendChild(bgImage);\n})();\n\n\n\n\n\n\n//# sourceURL=webpack://momentum/./js/wallpaper.js?");

/***/ }),

/***/ "./js/weather.js":
/*!***********************!*\
  !*** ./js/weather.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initWeather\": () => (/* binding */ initWeather),\n/* harmony export */   \"hideWeather\": () => (/* binding */ hideWeather)\n/* harmony export */ });\n/* harmony import */ var _geo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geo.js */ \"./js/geo.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ \"./js/constant.js\");\n/* harmony import */ var _node_modules_querystring_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/querystring/index */ \"./node_modules/querystring/index.js\");\n\n\n//import {fetch as nodeFetch} from \"../node_modules/node-fetch\";\n\n\n//const querystring =require(\"querystring\");\nconst weatherDiv=document.querySelector(\"#weatherDiv\");\nconst weatherInfo=document.querySelector(\"#weatherInfo\");\nconst weatherIcon=document.querySelector(\"#weatherDiv img\");\nconst weatherCity=document.querySelector(\"#weatherCity\");\n\nconst BASE_URL=\"https://devjjinho7hideapikey.netlify.app\"\nconst PATH=\".netlify/functions/weather\";\n\nfunction paintWeather(weather){\n    const temp=(weather.main.temp-_constant_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.TEMP_INDEX).toFixed(1);\n    weatherCity.innerText=weather.name;\n    weatherInfo.innerText=`Temp:${temp}`;\n    weatherIcon.src=`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;\n    weatherDiv.classList.remove(_constant_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.HIDDEN_CLASSNAME);\n}\n\nfunction hideWeather(){\n    weatherDiv.classList.add(_constant_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.HIDDEN_CLASSNAME);\n}\n\nasync function initWeather(){\n    console.log(\"initWeather\");\n    if(handleWeatherInfo.doesExist()){\n        paintWeather(handleWeatherInfo.getWeather());\n    }\n    else{\n        await getWeather();\n        if(handleWeatherInfo.getWeather!==false){\n            paintWeather(handleWeatherInfo.getWeather());\n        }\n        else{\n            hideWeather();\n        }\n        \n    }\n}\n\nasync function getWeather(){\n    const geoInfo=await (0,_geo_js__WEBPACK_IMPORTED_MODULE_0__.initGeo)();\n    \n    const url=new URL(PATH,BASE_URL);\n    const param=(0,_node_modules_querystring_index__WEBPACK_IMPORTED_MODULE_2__.stringify)({\n        lat:geoInfo.lat,\n        lng:geoInfo.lng\n    });\n    url.search=param;\n    console.log(url);\n    try{\n        const response=await fetch(url);\n        const body=await response.json();\n        console.log(body);\n        handleWeatherInfo.setWeather(body);\n        if(body.error){\n            handleWeatherInfo.setError();\n            }\n    }\n    catch(error){\n        console.log(error);\n        handleWeatherInfo.setError();\n    };\n    \n}\n\nconst handleWeatherInfo=(function(){\n    let weatherInfo=[];\n    let isError=false;\n    return {\n        doesExist:function(){\n            const get=localStorage.getItem(_constant_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.WEATHER_KEY);\n            if(get!==null){\n                const parseWeather=JSON.parse(get);\n                const date=new Date();\n                const curTimeStamp=date.getTime();\n                if(curTimeStamp-parseWeather.timeStamp>=3600000){\n                    return false;\n                }\n                weatherInfo=parseWeather;\n                isError=false;\n                return true;\n            }\n            else return false;\n        },\n        getWeather:function(){\n            if(isError){\n                return false;\n            }\n            else{ \n                return weatherInfo;\n            }\n        },\n        setWeather:function(weather){\n            try{\n                weatherInfo=JSON.parse(weather);\n            }\n            catch{\n                weatherInfo=weather\n            }\n            const date=new Date();\n            const timeStamp=date.getTime();\n            weatherInfo.timeStamp=timeStamp;\n            isError=false;\n            localStorage.setItem(_constant_js__WEBPACK_IMPORTED_MODULE_1__.CONSTANT.WEATHER_KEY,JSON.stringify(weatherInfo));\n        },\n        setError:function(){\n            isError=true;\n        }\n    }\n})();\n\n\n\n\n\n//# sourceURL=webpack://momentum/./js/weather.js?");

/***/ }),

/***/ "./node_modules/querystring/decode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/decode.js ***!
  \********************************************/
/***/ ((module) => {

eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\n// If obj.hasOwnProperty has been overridden, then calling\n// obj.hasOwnProperty(prop) will break.\n// See: https://github.com/joyent/node/issues/1707\nfunction hasOwnProperty(obj, prop) {\n  return Object.prototype.hasOwnProperty.call(obj, prop);\n}\n\nmodule.exports = function(qs, sep, eq, options) {\n  sep = sep || '&';\n  eq = eq || '=';\n  var obj = {};\n\n  if (typeof qs !== 'string' || qs.length === 0) {\n    return obj;\n  }\n\n  var regexp = /\\+/g;\n  qs = qs.split(sep);\n\n  var maxKeys = 1000;\n  if (options && typeof options.maxKeys === 'number') {\n    maxKeys = options.maxKeys;\n  }\n\n  var len = qs.length;\n  // maxKeys <= 0 means that we should not limit keys count\n  if (maxKeys > 0 && len > maxKeys) {\n    len = maxKeys;\n  }\n\n  for (var i = 0; i < len; ++i) {\n    var x = qs[i].replace(regexp, '%20'),\n        idx = x.indexOf(eq),\n        kstr, vstr, k, v;\n\n    if (idx >= 0) {\n      kstr = x.substr(0, idx);\n      vstr = x.substr(idx + 1);\n    } else {\n      kstr = x;\n      vstr = '';\n    }\n\n    k = decodeURIComponent(kstr);\n    v = decodeURIComponent(vstr);\n\n    if (!hasOwnProperty(obj, k)) {\n      obj[k] = v;\n    } else if (Array.isArray(obj[k])) {\n      obj[k].push(v);\n    } else {\n      obj[k] = [obj[k], v];\n    }\n  }\n\n  return obj;\n};\n\n\n//# sourceURL=webpack://momentum/./node_modules/querystring/decode.js?");

/***/ }),

/***/ "./node_modules/querystring/encode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/encode.js ***!
  \********************************************/
/***/ ((module) => {

eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar stringifyPrimitive = function(v) {\n  switch (typeof v) {\n    case 'string':\n      return v;\n\n    case 'boolean':\n      return v ? 'true' : 'false';\n\n    case 'number':\n      return isFinite(v) ? v : '';\n\n    default:\n      return '';\n  }\n};\n\nmodule.exports = function(obj, sep, eq, name) {\n  sep = sep || '&';\n  eq = eq || '=';\n  if (obj === null) {\n    obj = undefined;\n  }\n\n  if (typeof obj === 'object') {\n    return Object.keys(obj).map(function(k) {\n      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;\n      if (Array.isArray(obj[k])) {\n        return obj[k].map(function(v) {\n          return ks + encodeURIComponent(stringifyPrimitive(v));\n        }).join(sep);\n      } else {\n        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));\n      }\n    }).filter(Boolean).join(sep);\n\n  }\n\n  if (!name) return '';\n  return encodeURIComponent(stringifyPrimitive(name)) + eq +\n         encodeURIComponent(stringifyPrimitive(obj));\n};\n\n\n//# sourceURL=webpack://momentum/./node_modules/querystring/encode.js?");

/***/ }),

/***/ "./node_modules/querystring/index.js":
/*!*******************************************!*\
  !*** ./node_modules/querystring/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.decode = exports.parse = __webpack_require__(/*! ./decode */ \"./node_modules/querystring/decode.js\");\nexports.encode = exports.stringify = __webpack_require__(/*! ./encode */ \"./node_modules/querystring/encode.js\");\n\n\n//# sourceURL=webpack://momentum/./node_modules/querystring/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;