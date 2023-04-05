//Assigning constants with selected nodes in DOM
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const bridge = document.getElementById("bridge");
const badminton = document.getElementById("badminton");
const waterfall = document.getElementById("waterfall");

//Adding event listener for a user clicking on burger menu 
//This is (one of) my event handler(s) for the assignement requirements
burger.addEventListener("click", () => {
    //Toggling classes to the burger and navMenu nodes applying/removing specific CSS rules
    burger.classList.toggle("on");
    navMenu.classList.toggle("on");
});

//Adding event listener for when the window has been resized
window.addEventListener("resize", () => {
    //Checking if the width of the window is greater than 880px i.e. when the nav bar is no longer a dropdown
    //This is my conditional for the assignment requirements
    if(window.innerWidth > 880) {
        //Removing added classes and hence removing the applied CSS rules
        burger.classList.remove("on");
        navMenu.classList.remove("on");
    }
});

//Adding event listener for when the mouse enters the space that the bridge container takes up
bridge.addEventListener("mouseenter", () => {
    //Making the image larger by a scale of 1.125 so that the attention is drawn to that image
    bridge.style.transform = "scale(1.125)";
    //Making the transition not immediate
    bridge.style.transition = "0.5s";
    //Increasing the z-index so that it is placed overtop the other images
    bridge.style.zIndex = "2";

});

//Adding event listener for when the mouse leaves the space that the bridge contianer takes up
bridge.addEventListener("mouseleave", () => {
    //Resetting the scale to 1
    bridge.style.transform = "scale(1.0)";
    //Making transition not immediate
    bridge.style.transition = "0.5s";
    //Resetting z-index so that other images may be placed overtop this one if they are hovered over
    bridge.style.zIndex = "1";
});

//Adding event listener for when the mouse enters the space that the badminton container takes up
badminton.addEventListener("mouseenter", () => {
    //Making the image larger by a scale of 1.125 so that the attention is drawn to that image
    badminton.style.transform = "scale(1.125)";
    //Making the transition not immediate
    badminton.style.transition = "0.5s";
    //Increasing the z-index so that it is placed overtop the other images
    badminton.style.zIndex = "2";
});

//Adding event listener for when the mouse leaves the space that the badminton container takes up
badminton.addEventListener("mouseleave", () => {
    //Resetting the scale to 1
    badminton.style.transform = "scale(1.0)";
    //Making transition not immediate
    badminton.style.transition = "0.5s";
    //Resetting z-index so that other images may be placed overtop this one if they are hovered over
    badminton.style.zIndex = "1";
});

//Adding event listener for when the mouse enters the space that the waterfall container takes up
waterfall.addEventListener("mouseenter", () => {
    //Making the image larger by a scale of 1.125 so that the attention is drawn to that image
    waterfall.style.transform = "scale(1.125)";
    //Making the transition not immediate
    waterfall.style.transition = "0.5s";
    //Increasing the z-index so that it is placed overtop the other images
    waterfall.style.zIndex = "2";
});

//Adding event listener for when the mouse leaves the space that the waterfall container takes up
waterfall.addEventListener("mouseleave", () => {
    //Resetting the scale to 1
    waterfall.style.transform = "scale(1.0)";
    //Making transition not immediate
    waterfall.style.transition = "0.5s";
    //Resetting z-index so that other images may be placed overtop this one if they are hovered over
    waterfall.style.zIndex = "1";
});

//Function that applies colour change to webpage
//This is the colour changer for the assignment requirements
function changeColour() {
    //Getting root element and colour changer node
    let root = document.querySelector(":root");
    const colour = document.getElementById("colourChangeSelector");

    //Checking if selected value is default
    if (colour.value == "Default"){
        //Changing root CSS variables to match defult colour scheme
        root.style.setProperty("--font-color", "#091039");
        root.style.setProperty("--nav-background", "#F9F9ED");
        root.style.setProperty("--element-background", "#E1DBFD");
        root.style.setProperty("--hover-color", "#6E5FAF");
        root.style.setProperty("--border-color", "#BAB0E6");
        root.style.setProperty("--list-color", "#EAE4FA");
    }
    //Checking if selected value is Protanopia
    else if (colour.value == "Protanopia") 
    {
        //Changing root CSS variables to match protanopia colour scheme
        root.style.setProperty("--font-color", "#0D0227");
        root.style.setProperty("--nav-background", "#FFF2EB");
        root.style.setProperty("--element-background", "#7BE4FF");
        root.style.setProperty("--hover-color", "#4784FF");
        root.style.setProperty("--border-color", "#4AACF7");
        root.style.setProperty("--list-color", "#B1ECFF");
    } 
    //Checking if the selected value is Deuteranopia
    else if (colour.value == "Deuteranopia") 
    {
        //Changing root CSS variables to match deuteranopia colour scheme
        root.style.setProperty("--font-color", "#023969");
        root.style.setProperty("--nav-background", "#FFF6BC");
        root.style.setProperty("--element-background", "#ABCFEA");
        root.style.setProperty("--hover-color", "#426DEB");
        root.style.setProperty("--border-color", "#5b84c2");
        root.style.setProperty("--list-color", "#C0D9EB");
    }
}

//Function that is used to validate the feedback form
function validateForm() {
    //Setting constants to the user input field nodes
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const feedback = document.getElementById("feedback");

    //Checking if the values of any of the fields are empty
    if ((name.value == "") || (email.value == "") || (feedback.value == "")) {
        //String that will hold which fields are empty
        let blankFields = "\n";

        //Checking if the name field is empty
        if (name.value == "") {
            //Appending to the message string
            blankFields += "==>Name\n";
        }

        //Checking if the email field is empty
        if (email.value == "") {
            //Appending to the message string
            blankFields += "==>Email\n";
        }

        //Checking if the feedback textarea field is empty
        if (feedback.value == "") {
            //Appending to the message string
            blankFields += "==>Message"
        }

        //Alert is prompted indicating which fields are empty
        //This is the notification for the assignment requirements
        window.alert("WARNING: The following fields are empty: " + blankFields);
        return false;
    }
}
