import { EntryListComponent } from "./JournalEntryList.js";
const applicationElement = document.querySelector("#entryLog");
const todayDate = document.getElementsByClassName("todaysDate");
let d = new Date();
todayDate[0].innerHTML += "Today's Date: " + d.toLocaleDateString();
const element1 = document.querySelector('.delImg');
const element2 = document.querySelector('.editImg');
const test =() =>{
  alert("Here I am.");
}
EntryListComponent();
document.getElementById('journalDate').value = new Date(Date.now()).toISOString().split('T')[0];
let btn = document.getElementById("journalSubmit");
document.getElementById('journalSubmit').addEventListener('click', (e) => {
  e.preventDefault();
  let journalObj = {};
  journalObj.date = document.getElementById('journalDate').value;
  journalObj.concept = document.getElementById('conceptsCovered').value;
  journalObj.entry = document.getElementById('journalEntry').value;
  journalObj.mood = document.getElementById('mood').value;
  journalObj.timestp = Date.now();
  console.log(journalObj);

});
document.getElementById('journalSubmit').addEventListener('mouseover', (e) => {
  console.log("You enter the submit are");
});
applicationElement.addEventListener("click", event => {
  console.log(event.target.id );
});
// let arr = [,null,8,4,2,9,"","a",0,NaN,undefined];
// let newArray = [];
// let falseyArray = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]){newArray.push(arr[i]);} else {falseyArray.push(arr[i])}
// }
// console.log(newArray);
// console.log(falseyArray);



