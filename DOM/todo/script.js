// let h1tag = document.querySelector("h1");

let ptag = document.getElementById("pt")

//  console.log(tag)

// h1tag.innerHTML = "Saurabh Bansal"

// let color = "red"

// h1tag.classList.add("red");

// h1tag.classList.remove("red")

// h1tag.classList.toggle("red");

// h1tag.classList.toggle("red");

// console.log(h1tag.classList)

// h1tag.setAttribute("bg" , "black");

// let myele = document.createElement("div");

// let parent = document.querySelector(".parent");

// myele.innerHTML="This is our div ";

// parent.appendChild(myele);

// parent.removeChild(myele);
let count = 0 ;
function red(){  // event handler 

 ptag.classList.toggle("red");
}


ptag.addEventListener("dblclick",blue); // event listners 

function blue(){
    ptag.setAttribute("bg","black");

}

let inputTag = document.querySelector("#input");

inputTag.addEventListener("keyup",function(event){
    // console.log(event.key);

    console.log(inputTag.value);
})
