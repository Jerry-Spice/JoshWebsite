var menuButton = document.getElementById("menuButton");


function returnDebug() {
    console.log(true);
}

function showSidebar() {
    var sidebarDiv = document.getElementById("sidebar");
    if (sidebarDiv.style.visibility == "hidden") {
        sidebarDiv.style.visibility = "visible";
        console.log("opened sidebar")
    } else {
        sidebarDiv.style.visibility = "hidden";
        console.log("closed sidebar")
    }
    
}
showSidebar();


menuButton.addEventListener("click", showSidebar);