function myFunction(){
    var x = document.getElementsByClassName("side_nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else{
        x.style.display = "block";
    }
}