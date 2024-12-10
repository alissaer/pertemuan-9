// Selecng Elements with byId
let little = document.getElementById("title");

// Selecting Elements byClass
let header = document.getElementsByClassName("header1");

// Selecting Elmnts byTag
let p = document.querySelector("p");


// Membuat Trigger DOM - Event
let btn = document.getElementById("btn-changes");
let myList = document.getElementById("my-list");
btn.addEventListener("click", () => {

// Manipulating Element title => DOM Manipulating
title.innerHTML = "DOM Manipulation";
// Manipulating Style Header
header[0].style.color = "blue";
header[0].style.fontsize = "50px";
header[0].style.backgroundColor = "yellow";
// Manipulating Paragraph
p.innerHTML = "New Paragraph Content";
// Create New Elmnt List
let ul = document.createElement("ul");
let li = document.createElement("li");
let li2 = document.createElement("li");
li.textContent = "Item 1";
li2.textContent = "Item 2";
ul.appendChild(li);
ul.appendChild(li2);
myList.appendChild(ul);

});