//When the page DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    initPage()
});

function initPage(){
    loadContent("accueil");

    document.getElementById("accueil").addEventListener("click", function (event) {
        event.preventDefault();
        loadContent("accueil");
    });

    document.getElementById("portfolio").addEventListener("click", function (event) {
        event.preventDefault();
        loadContent("portfolio");
    });

    document.getElementById("CV").addEventListener("click", function (event) {
        event.preventDefault();
        loadContent("CV");
    });

    document.getElementById("contact").addEventListener("click", function (event) {
        event.preventDefault();
        loadContent("contact");
    })


}

function loadContent(section) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax/" + section + ".html", true);
    xhttp.send();
}
