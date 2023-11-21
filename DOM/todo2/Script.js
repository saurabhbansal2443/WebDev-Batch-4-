let inputTag = document.querySelector("#inputTag");

let btn = document.querySelector("#bt");

let list = document.querySelector("#list");

btn.addEventListener("click", function () {
  // console.log(inputTag.value)

  let inputText = inputTag.value;
  inputTag.value = "";
  if (inputText != "") {
    let liTag = document.createElement("li");
    liTag.innerHTML = inputText;
    list.appendChild(liTag);
  } else {
    alert("Pls write something in Input ");
  }
});
