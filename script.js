let books = []

function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

let Body = document.querySelector("body")
let Add = document.querySelector(".Add")
let Overlay = document.querySelector(".overlay")
let Main = document.querySelector(".Main")
let X = document.querySelector(".X")

Add.addEventListener("click", () => {
    Overlay.style.backgroundColor = "rgba(0, 0, 0, 0.4)"; 
    Main.style.background = "white";
    Main.style.boxShadow = "1px 1px 10px 2px black";
    X.style.opacity = "1";
    } 
)
X.addEventListener("click", () => {
    Overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    Main.style.background = "none";
    Main.style.boxShadow = "none";
    X.style.opacity = "0";
    } 
)



