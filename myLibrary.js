export var purpose = "this is about family"
export var manintro = "He is a physics faculty"
export var sanintro = "He is a cricket player"

export function displayintro(){
    let si = document.createElement("h1")
    let mi = document.createElement("h1")
    si.innerHTML = sanintro
    mi.innerHTML = manintro
    document.body.appendChild(si)
    document.body.appendChild(mi)
}

export class brothers{

    constructor(age, nam){
        brothers.Name = nam
        brothers.age = age
        brothers.father = "rajbir Singh"
        brothers.mother = "Sushila Devi"
    }
    showdetails(){
        var tb = document.createElement("table")
        tb.id = "table"
        document.body.appendChild(tb)
        var thead = document.createElement("tr")
        thead.id = "headings"
        var thead1 = document.createElement("th")
        thead1.innerHTML = "Name"
        var thead2 = document.createElement("th")
        thead2.innerHTML = "Age"
        var thead3 = document.createElement("th")
        thead3.innerHTML = "Father Name"
        var thead4 = document.createElement("th")
        thead4.innerHTML = "Mother Name"
        tb.appendChild(thead)
        thead.appendChild(thead1)
        thead.appendChild(thead2)
        thead.appendChild(thead3)
        thead.appendChild(thead4)

        var newrow = document.createElement("tr")
        newrow.id = "row2"
        var newrow1 = document.createElement("td")
        newrow1.innerHTML = brothers.Name
        var newrow2 = document.createElement("td")
        newrow2.innerHTML = brothers.age
        var newrow3 = document.createElement("td")
        newrow3.innerHTML = brothers.father
        var newrow4 = document.createElement("td")
        newrow4.innerHTML = brothers.mother
        tb.appendChild(newrow)
        newrow.appendChild(newrow1)
        newrow.appendChild(newrow2)
        newrow.appendChild(newrow3)
        newrow.appendChild(newrow4)
    }
}