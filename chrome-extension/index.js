let myLeads = ["www.google.com"];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");

const deleteBtn = document.getElementById("delete-all");
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
  console.log("deleted");
});

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [{ url: "http://www.google.com" }];

tabBtn.addEventListener("click", function () {
  //console.log(tabs[0].url);
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    //console.log(myLeads[i]);
    listItems += `<li>
        <a target = '_blank' href= '${leads[i]}'> ${leads[i]}</a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
  console.log("button clicked from event listener");

  myLeads.push(inputEl.value);
  //console.log(myLeads);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  inputEl.value = "";
  render(myLeads);

  console.log(localStorage.getItem("myLeads"));
});
