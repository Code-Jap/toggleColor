

let btn = document.getElementById("mybutton")
let btn2 = document.getElementById("mybutton2")



clickAlert = () => {
    alert("button clicked!");
}


toggleColor = () => {

   document.body.classList.toggle("red-background");
};


btn.addEventListener("click", function() {
    clickAlert()
});


btn2.addEventListener("click", function() {
    toggleColor()

});


