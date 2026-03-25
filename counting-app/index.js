//document.getElementById("count-el").innerText = 5;

let count = 0;
let htmlDom = document.getElementById("count-el");
let totalCount = document.getElementById("total-count");

console.log(totalCount);

function increment() {
  console.log("clicked");
  count = count + 1;
  htmlDom.innerText = count;
}

function save() {
  let totalCountStr = count + " - ";
  totalCount.textContent += totalCountStr;

  count = 0;
  htmlDom.innerText = count;
}
