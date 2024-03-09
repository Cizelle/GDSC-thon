var box1 = document.querySelector(".outerbox:nth-child(1)");
var box2 = document.querySelector(".outerbox:nth-child(2)");
var box3 = document.querySelector(".outerbox:nth-child(3)");
var box4 = document.querySelector(".outerbox:nth-child(4)");
var box5 = document.querySelector(".outerbox:nth-child(5)");
var innerBox1 = document.querySelector("#box1 .box");
var innerBox2 = document.querySelector("#box2 .box");
var innerBox3 = document.querySelector("#box3 .box");
var innerBox4 = document.querySelector("#box4 .box");
var innerBox5 = document.querySelector("#box5 .box");

window.addEventListener("scroll", function() {
    // Get the current scroll position
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        box1.style.borderBottomColor = "pink";
        box1.style.borderLeftColor = "pink";
        box2.style.borderTopColor = "pink";
        

        innerBox1.classList.add("float-in");
        innerBox1.style.opacity = 1;
    } else {
        box1.style.borderBottomColor = "#333";
        box1.style.borderLeftColor = "#333";
        box2.style.borderTopColor = "#333";

        innerBox1.classList.remove("float-in");
        innerBox1.style.opacity = 0;

    }

    if (scrollPosition > 100) {
        box2.style.borderBottomColor = "pink";
        box2.style.borderRightColor = "pink";
        box3.style.borderTopColor = "pink";
        
        innerBox2.classList.add("float-out");
        innerBox2.style.opacity = 1;
    } else {
        box2.style.borderBottomColor = "#333";
        box2.style.borderRightColor = "#333";
        box3.style.borderTopColor = "#333";
        
        innerBox2.classList.remove("float-out");
        innerBox2.style.opacity = 0;
    }

    if (scrollPosition > 180) {
        box3.style.borderTopColor = "pink";
        box3.style.borderLeftColor = "pink";
        box2.style.borderBottomColor = "pink";
        innerBox3.classList.add("float-in");
        innerBox3.style.opacity = 1;
    } else {
        box3.style.borderTopColor = "#333";
        box3.style.borderLeftColor = "#333";
        box2.style.borderBottomColor = "#333";
        
        innerBox3.classList.remove("float-in");
        innerBox3.style.opacity = 0;
    }
    if (scrollPosition > 250) {
        box4.style.borderTopColor = "pink";
        box4.style.borderRightColor = "pink";
        box3.style.borderBottomColor = "pink";
        innerBox4.classList.add("float-out");
        innerBox4.style.opacity = 1;
    } else {
        box4.style.borderTopColor = "#333";
        box4.style.borderRightColor = "#333";
        box3.style.borderBottomColor = "#333";
        
        innerBox4.classList.remove("float-out");
        innerBox4.style.opacity = 0;
    }
    if (scrollPosition > 320) {
        box5.style.borderTopColor = "pink";
        box5.style.borderLeftColor = "pink";
        box4.style.borderBottomColor = "pink";
        innerBox5.classList.add("float-in");
        innerBox5.style.opacity = 1;
    } else {
        box5.style.borderTopColor = "#333";
        box5.style.borderLeftColor = "#333";
        box4.style.borderBottomColor = "#333";
        
        innerBox5.classList.remove("float-in");
        innerBox5.style.opacity = 0;
    }

 
  
});