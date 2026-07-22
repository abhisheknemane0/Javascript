console.log("event and event bubbling lecture");
let button = document.getElementById("btn")
let button2 = document.getElementById("b2")

let button3 = document.getElementById("b3")
let button4 = document.getElementById("b4")
button.addEventListener("click",()=> {
    alert("I was clinked")
    document.querySelector(".box").innerHTML ="<b> Yayy you were clicked </b> enjoy your clicked!"

})


button2.addEventListener("click",()=> {
    alert("I was open")
    document.querySelector(".box").innerHTML ="<b> Yayy you were clicked </b> enjoy your clicked!"

})

button3.addEventListener("click",()=> {
    alert("Enjoy you click")
    document.querySelector(".box").innerHTML ="<b> Yayy you were clicked </b> enjoy your clicked!"

})

button4.addEventListener("keydown",()=> {
    // alert("I was clinked")
    console.log(e.key,e.keycode)
    })

