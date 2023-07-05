const body = document.body;
const saveInfo = {}
function getData() {
  fetch("./userInfo.json")
    .then((response) => response.json())
    .then((jsons) => jsons.json())
}
const info = getData();
console.log(info)
// once username is entered, a check is run on the array to confirm if it is free
const err = document.querySelector(".error")