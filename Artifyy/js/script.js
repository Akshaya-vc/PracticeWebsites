//sidepanel for mobile
function openNav() {
    document.getElementById("sidepanelid").style.width = "80%";
    document.getElementById("sidepanelid").style.display = "block";
    //document.getElementById("brandid").style.filter="brighness(50%)";
}

function closeNav() {
    document.getElementById("sidepanelid").style.display = "none";
    document.getElementById("sidepanelid").style.width = "0%";
}
console.log("hello");
var myIndex = 0;
slideshow();

function slideshow() {
    var j;
    var y = document.getElementsByClassName("imgitem");
    console.log(y.length);
    for (j = 0; j < y.length; j++) {
        y[j].style.display = "none";
    }
    myIndex++;
    if (myIndex > y.length) {
        myIndex = 1
    }
    y[myIndex - 1].style.display = "block";
    setTimeout(slideshow, 2000)
}