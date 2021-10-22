function myFunction() {
    var burger = document.getElementById("burger");
    var myLinks = document.getElementById("myLinks");

    if (myLinks.style.display === "flex") {
        myLinks.style.display = "none";
    } else {
        myLinks.style.display = "flex";
    }
}

export default myFunction;