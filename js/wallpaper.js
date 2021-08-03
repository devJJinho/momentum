const paintBg=(function(){
    const img=["1.jpg","2.jpg","3.jpg"];
    const chosenImg=img[Math.floor(Math.random()*(img.length))];
    document.getElementById("background-overlay").style.backgroundImage=`url(./img/${chosenImg})`;
})();

export {paintBg}


