function confirmExit(event) {
    
    if (!confirm("Tem certeza que deseja sair?")) {
       
        event.preventDefault();
    }
}

document.getElementById("container").addEventListener("click", function() {
    var div = document.getElementById("minhaDiv");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
});