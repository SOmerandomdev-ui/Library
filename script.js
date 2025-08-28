let books = []

//Sets up the book object 
function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//Defines the different elements
let Body = document.querySelector("body")
let Add = document.querySelector(".Add")
let Overlay = document.querySelector(".overlay")
let Main = document.querySelector(".Main")
let Appear = document.querySelectorAll("form, .title, .X")
let X = document.querySelector(".X")
let Form = document.querySelector("form")
let Grid = document.querySelector(".Grid")

//This is for when the add button is clicked and the menu is opened up 
Add.addEventListener("click", () => {
    Overlay.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    Main.style.background = "white";
    Main.style.boxShadow = "1px 1px 10px 2px black";
    Appear.forEach(element => {
        element.style.opacity = "1";
    })
}
)

//This is for when x or submit is clicked and it exits the menu 

let Exit = () => { 
    Overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    Main.style.background = "none";
    Main.style.boxShadow = "none";
    Appear.forEach(element => {
        element.style.opacity = "0";})
}

X.addEventListener("click", () => {
    Exit()
    }
)


//This is for when a new book entry has to be created 

Form.addEventListener("submit", (e) => {
    e.preventDefault()
    let Div = document.createElement("div")
    let Name = document.querySelector("#Name").value
    let Author = document.querySelector("#Author").value
    let Pages = document.querySelector("#Pages").value
    let Read = document.querySelector("#State").value
    let mybook = new book(Name, Author, Pages)
    books.push(mybook.title)
    Grid.appendChild(Div)
    
    let DivTitle = document.createElement("div")
    Div.appendChild(DivTitle)
    DivTitle.textContent = mybook.title;

    let DivContent = document.createElement("div")
    Div.appendChild(DivContent)

    for (i = 0; i < 3; i++) {
        let body = document.createElement("p")
        DivContent.appendChild(body)

        if (i == 0) {body.textContent= ("Author: " + mybook.author)}

        else if (i == 1) {body.textContent = ("Pages: " + mybook.pages)}

        else if (i == 2) {body.textContent = ("Already Read?: " + Read)}
    }

    Exit()
})










