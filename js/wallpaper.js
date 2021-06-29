const img=["1.jpg","2.jpg","3.jpg"];

function paintBg(){
const chosenImg=img[Math.floor(Math.random()*(img.length))];
console.log(Math.floor(Math.random()*(img.length)));
const bgImage=document.createElement("img");
bgImage.src=`img/${chosenImg}`;
document.body.appendChild(bgImage);
}

paintBg();
