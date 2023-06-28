import * as data from "./myLibrary.js"


var heading = document.createElement("h1")
heading.innerHTML = data.purpose
document.body.appendChild(heading)

data.displayintro()

var mandy = new data.brothers(36, "mandeep")

mandy.showdetails()