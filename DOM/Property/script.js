let inputOne = document.querySelector("#i1");
let inputTwo = document.querySelector("#i2");
let inputThree = document.querySelector("#i3");
let addbtn = document.querySelector("#add");
let delBtn = document.querySelector("#delete");
let ticCont = document.querySelector(".ticketContainer");

let flag = false ;

addbtn.addEventListener("click", function () {
  let val1 = inputOne.value;
  let val2 = inputTwo.value;
  let val3 = inputThree.value;

  let ticketEle = document.createElement("div");

  ticketEle.classList.add("ticket");

  ticketEle.innerHTML = 
  `<ul>
    <li>${val1}</li>
    <li>${val2}</li>
    <li>${val3}</li>
</ul>`;

ticketEle.addEventListener("dblclick",function(){
    if(flag==true){
        ticCont.removeChild(ticketEle);
    }
})

ticCont.appendChild(ticketEle);


});

delBtn.addEventListener("click",function(){
  if(flag == false){
    flag = true ;
    delBtn.style.color = "red"
  }else{
    flag = false;
    delBtn.style.color = "black"
  }
})
