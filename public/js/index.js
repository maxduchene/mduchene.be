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
    let title = page + " | Maxime Duchêne";
    document.getElementById("title").innerHTML = title;
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("go-top-button").style.display = "block";
    } else {
        document.getElementById("go-top-button").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
