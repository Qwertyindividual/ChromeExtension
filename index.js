//Log out "BUTTON CLICKED" when the  user clicks the SAVE INPUT BUTTON

// let inputBtn = document.getElementById("input-btn")

//Create two variables
//myLeads -> should be assigned to an empty array
//inputEL-> should be assigned to the text input field

let myLeads = [];
let oldLeads = [];
//Turn the myleads string into an array//Push a new value to the array
//Turn the array into a string again
//Console.log the string using typeof to verify that its a string

// myLeads.push("vfnfbdfbdgd") //This gives an error becuse myLeads is now  STRING AND THIS ONLY WORKS ON ARRAYS

// myLeads = JSON.parse(myLeads)
// console.log(myLeads);
// myLeads.push("vfnfbdfbdgd")
//This is to turn it from a string to an array- something like that

// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads);
//This turns it into a string

const inputEL = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");
const del = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
//Get the leads from the localStorage
//Store it in a variable, leadsFromLocalStrage
//Log out the variable

//["James". "Nick"] or null - these are the two possibilities in localstorage that needs to be accounted for
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);
// console.log(localStorage.getItem("myLeads"));

// 1. Check if leadsFromLocalStorage is truthy
// 2.If so, set my Leads to its value and call renderLeads()

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;

  //refractor the fucntion so that it takes a parameter, leads, that it uses
  //instead of the gloabal myLeads variable. Remember to update all invocations
  //of the fucntion as well
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  // console.log(tabs[0].url);
  //Grab the url of the current tab

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

// 1. Listen for double clicks ont he delete button
// 2. When clicked, clear localStorage, myLeads, adn the DOM
del.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  //Push the value from the inputEL into the myLeads array
  //instead of the hard-codeed "www.awesomelead.com" value
  //Google -> "get value from input field javascript"

  myLeads.push(inputEL.value);
  inputEL.value = "";
  //Save the myleads array to localStorage
  //PS:remember JSON.stringify()

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  //To verify that it works:
  console.log(localStorage.getItem(myLeads));

  render(myLeads);
});

//log out the items in the myLeads array using a for loop

//Render the leads in the unordered list using ulEl.textContent

//CREATE A VARIABLE, LISTITEMS, TO HOLD ALL THE HTML FOR THE LIST ITEMS
//ASSIGN IT TO AN EMPTY STRING TO BEGIN WITH

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // ulEL.textContent += myLeads[i] + " "

    //Add the item to the listitems, to hold all the Html for the list Items
    // listItems +="<li><a href= '"+ myLeads[i] + "' target= '_blank'>" + myLeads[i] + "</a></li>" ;
    listItems += `<li>
               <a href= "${leads[i]}" target= "_blank">
                ${leads[i]}
                </a>
                  </li>`;

    //create element
    //set text content
    //append to ul
    // const li= document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEL.append(li)
    console.log(listItems);
  }

  ulEL.innerHTML = listItems;
}

//Truthy and falsy statements

// const credits = 50000000

// if(credits > 0 ) {
//     console.log("lets play");
// } else {
//     console.log("Sorry, you have no credits");
// }

//These are the falsy values in JS
//false
//0
//""
//null - how you as a developer signalize emptiness
//underfined - how Javasscript signalizes emptiness
//NaN

// let trueOrFalse= Boolean("hello") - This is how you find out if it is a truhty or a falsey

// console.log(Boolean(""));//false
// console.log(Boolean("0"));///true
// console.log(Boolean(100));//true
// console.log(Boolean(null));//false
// console.log(Boolean([0]));//true
// console.log(Boolean(-0));//false - Whether is minus or plus zero. Zero remains a falsey letter

// console.log(trueOrFalse);

//LocalStorage

//1. Save a key-value pair in localstorage
//2. Refresh the page. get the value and log it tp the console
//3. Clear localStorage

//HINTS:
//localStorage.setItem(key, value)
//localStorage.getItem(key)
//localStorage.clear()
//PS: BOTH KEY AND VALUE NEEDS TO BE STRINGS

// ----------------------------------------------------------------------------

//Tempplate Strings - Backticks - Practice

// const recipient = "James"

// //refractor the email string to use template strings
// const email =
// `Hey ${recipient}!
//  How is it going? Cheers Me`

// console.log(email);

// --------------------------------------------------------------------------------------

//Practice1

//Grab the box from the DOM and store it in a variable
//Add a click event listener to the box
//Log out "I want to open the box" when its clicked

// let boxEL = document.getElementById("box")

// boxEL.addEventListener("click", function() {
//     console.log("I want to open the box");
// })

//Practice2 - InnerHTML
//use .innerHTML to render a Buy! button isndie the dix container

// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

//When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

// function buy() {
//    container.innerHTML += "<p>Thank you for buying with us!</p>"
// }
