let inputTag = document.querySelector("#input");
let searchBtn = document.querySelector("#sbtn");    
let key = "ed8c37818a944c29adf40311232510"

let myApi = "https://api.weatherapi.com/v1/current.json?key=ed8c37818a944c29adf40311232510&q=gwalior&aqi=no"
function searchFunction(){
   let city = inputTag.value;
  console.log(city);
  inputTag.value=""
}
searchBtn.addEventListener('click',searchFunction);
inputTag.addEventListener("keydown",function(e){
    
  if(e.key == "Enter"){
    searchFunction();
  }
})