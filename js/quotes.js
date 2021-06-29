const quotes=[
    {
        quotes:"삶이 있는 한 희망은 있다.",
        author:"키케로"
    },
    {
        quotes:"산다는것 그것은 치열한 전투이다.",
        author:"로망로랑"
    },
    {
        quotes:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author:"사무엘존슨"
    },
    {
        quotes:"언제나 현재에 집중할수 있다면 행복할것이다.",
        author:"파울로 코엘료"
    },
    {
        quotes:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
        author:"찰리 채플린"
    },
    {
        quotes:"먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
        author:"엘사 맥스웰"
    },
    {
        quotes:"자신감 있는 표정을 지으면 자신감이 생긴다.",
        author:"찰스다윈"
    }

]

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

function paintQuotes(){
    const selected=quotes[Math.round(Math.random()*(quotes.length-1))];
    quote.innerText=selected.quotes;
    author.innerText=selected.author;
}

paintQuotes();