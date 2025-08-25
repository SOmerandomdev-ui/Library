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

//This is for when x is clicked and it exits the menu 
X.addEventListener("click", () => {
    Overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    Main.style.background = "none";
    Main.style.boxShadow = "none";
    Appear.forEach(element => {
        element.style.opacity = "0";
    })
}
)

//This is for when a new book entry has to be created 

Form.addEventListener("submit", (e) => {

    e.preventDefault()
    let Name = document.querySelector("#Name").value
    let mybook = new book(Name)
    alert(mybook.title)
})







