let navbar = document.querySelector(".navbar")
let links = document.querySelectorAll(".navbar--links ul li a")
let btn = document.querySelector(".navbar--links button")
let logo = document.querySelector(".navbar--logo img")

onscroll = function(){
    if(this.scrollY >= 100){
        navbar.classList.add("navbar-white")
        navbar.classList.remove("navbar")
        links.forEach((value)=>{
            value.style.color = "black"
        })
        btn.style.background = "#4caf50"
        btn.style.color = "white"
        logo.src = "img/logo-dark.png"
    }else {
        navbar.classList.remove("navbar-white")
        navbar.classList.add("navbar")
       links.forEach((value)=>{
            value.style.color = "white"
        })
        btn.style.background = "white"
        btn.style.color = "black"
        logo.src = "img/logo-light.png"
    }
}