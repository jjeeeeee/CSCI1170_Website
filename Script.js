const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const bridge = document.getElementById("bridge");
const badminton = document.getElementById("badminton");
const waterfall = document.getElementById("waterfall");


burger.addEventListener("click", () => {
    burger.classList.toggle("on");
    navMenu.classList.toggle("on");
});


window.addEventListener("resize", () => {
    if(window.innerWidth > 880) {
        burger.classList.remove("on");
        navMenu.classList.remove("on");
    }
});


bridge.addEventListener("mouseenter", () => {
    bridge.style.transform = "scale(1.125)";
    bridge.style.transition = "0.5s";
    bridge.style.zIndex = "2";

});


bridge.addEventListener("mouseleave", () => {
    bridge.style.transform = "scale(1.0)";
    bridge.style.transition = "0.5s";
    bridge.style.zIndex = "1";
});


badminton.addEventListener("mouseenter", () => {
    badminton.style.transform = "scale(1.125)";
    badminton.style.transition = "0.5s";
    badminton.style.zIndex = "2";
});


badminton.addEventListener("mouseleave", () => {
    badminton.style.transform = "scale(1.0)";
    badminton.style.transition = "0.5s";
    badminton.style.zIndex = "1";
});


waterfall.addEventListener("mouseenter", () => {
    waterfall.style.transform = "scale(1.125)";
    waterfall.style.transition = "0.5s";
    waterfall.style.zIndex = "2";
});


waterfall.addEventListener("mouseleave", () => {
    waterfall.style.transform = "scale(1.0)";
    waterfall.style.transition = "0.5s";
    waterfall.style.zIndex = "1";
});


function changeColour() {
    let root = document.querySelector(":root");
    const more = document.getElementById("colourChangeSelector");
    if (more.value == "Default"){
        root.style.setProperty("--font-color", "#091039");
        root.style.setProperty("--nav-background", "#F9F9ED");
        root.style.setProperty("--element-background", "#E1DBFD");
        root.style.setProperty("--hover-color", "#6E5FAF");
        root.style.setProperty("--border-color", "#BAB0E6");
        root.style.setProperty("--list-color", "#EAE4FA");
    }
    else if (more.value == "Protanopia") 
    {
        root.style.setProperty("--font-color", "#0D0227");
        root.style.setProperty("--nav-background", "#FFF2EB");
        root.style.setProperty("--element-background", "#7BE4FF");
        root.style.setProperty("--hover-color", "#4784FF");
        root.style.setProperty("--border-color", "#0A5978");
        root.style.setProperty("--list-color", "#B1ECFF");
    } 
    else if (more.value == "Deuteranopia") 
    {
        root.style.setProperty("--font-color", "#023969");
        root.style.setProperty("--nav-background", "#FFF6BC");
        root.style.setProperty("--element-background", "#ABCFEA");
        root.style.setProperty("--hover-color", "#426DEB");
        root.style.setProperty("--border-color", "#5b84c2");
        root.style.setProperty("--list-color", "#C0D9EB");
    }
}


function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const feedback = document.getElementById("feedback");


    if ((name.value == "") || (email.value == "") || (feedback.value == "")) {
        let blankFields = "\n";


        if (name.value == "") {
            blankFields += "==>Name\n";
        }
        if (email.value == "") {
            blankFields += "==>Email\n";
        }
        if (feedback.value == "") {
            blankFields += "==>Message"
        }


        window.alert("WARNING: The following fields are empty: " + blankFields);
        return false;
    }
}