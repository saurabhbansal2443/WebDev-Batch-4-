let apiKey = "pub_343096e83ca33bc4e6ca3922fbf3d4a4005ae";
let mainCont = document.querySelector(".mainContainer");
let sInput = document.querySelector("#searchInput");
let btn = document.querySelector("#searchButton");

console.log(mainCont)

// btn.addEventListener("click" , function(){
//   console.log(sInput.value)
//   callQuery(sInput.value);
// })
// function callQuery (query="latest News" ){
//   console.log(query);
//   getData(query)
// }

// async function getData(query){
//     let data = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&q=${query}&language=en`)
//     let obj = await data.json();
//     ScreenUpdate(obj.results);
// }

// getData("programming");

function ScreenUpdate(arr){
  mainCont.innerHTML="";
    for(let i=0;i<arr.length;i++){
        let obj = arr[i];
    let imageLink = obj.image_url;
    let heading = obj.title;
    let link = obj.link;
    let des = obj.content;

    let myele = document.createElement('div');
    myele.innerHTML =  ` <div class="card" style="width: 18rem; overflow:scroll; max-height:30rem; margin-top:3rem">
    <img class="card-img-top" src=${imageLink} alt="Card image cap style="height:50%; width:50%" ">
    <div class="card-body">
      <h5 class="card-title">${heading}</h5>
      <p class="card-text">${des}</p>
      <a href=${link} class="btn btn-primary">More Info</a>
    </div>
  </div>`;

  mainCont.appendChild(myele);

    }


}