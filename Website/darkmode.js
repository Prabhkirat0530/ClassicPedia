
var icon = document.getElementById("moon");
icon.onclick = function () {

    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {

        icon.src = "Images/dark theme icon/sun.png"

    }

    else {

        icon.src = "Images/dark theme icon/moon.png"

    }
}
