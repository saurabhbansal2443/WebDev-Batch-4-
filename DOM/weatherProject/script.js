let inputTag = document.querySelector("#input");
let searchBtn = document.querySelector("#sbtn");    
let key = "ed8c37818a944c29adf40311232510"

let cityTag = document.querySelector("#city")
let tempTag  = document.querySelector("#temp")
let statusTag = document.querySelector("#status")
let humidityTag = document.querySelector("#humidity")
let timeTag = document.querySelector("#time")
let windspeedTag = document.querySelector("#wspeed")
let icontag = document.querySelector("#icon")


// function searchFunction(){
//    let city = inputTag.value;
//   console.log(city);
//   inputTag.value=""
//   fetchData(city);
// }
// searchBtn.addEventListener('click',searchFunction);
// inputTag.addEventListener("keydown",function(e){
    
//   if(e.key == "Enter"){
//     searchFunction();
//   }
// })

async function fetchData(city){
    let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`);
    let obj = await data.json();
    console.log(obj);
    screenUpdate(obj);
}

fetchData("gwalior");

function screenUpdate(obj){
  let temp = obj.current.feelslike_c  ;
  let windspeed = obj.current.gust_kph ;
  let icon = obj.current.condition.icon ;
  let city = obj.location.name ;
  let time = obj.location.localtime  ;
  let status = obj.current.condition.text ;
  let humidity =  obj.current.humidity ;

  // console.log(temp , windspeed , humidity ,city ,time , icon , status );

  cityTag.innerHTML=city;
  humidityTag.innerHTML=humidity;
  windspeedTag.innerHTML = windspeed;
  timeTag.innerHTML=time;
  statusTag.innerHTML=status;
  tempTag.innerHTML=temp;
  icontag.setAttribute("src",icon);

}


