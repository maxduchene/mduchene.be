//When the page DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    initPage()
});

function initPage(){
    loadContent("accueil");

    document.getElementById("accueil").addEventListener("click", function (event) {
        event.preventDefault();
        loadContent("accueil");
        changeTitle("Accueil");
    });

    document.getElementById("portfolio").addEventListener("click", function (event) {
        event.preventDefault();
        loadContent("portfolio");
        changeTitle("Portfolio");
    });

    document.getElementById("CV").addEventListener("click", function (event) {
        event.preventDefault();
        loadContent("CV");
        changeTitle("CV");
    });
}

function loadContent(page) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax/" + page + ".html", true);
    xhttp.send();
}

function changeTitle(page){
    let title = page + " | Maxime Duchene";
    document.getElementById("title").innerHTML = title;
}
