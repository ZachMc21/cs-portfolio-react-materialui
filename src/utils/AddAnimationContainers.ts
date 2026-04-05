
/*
Function goal: Animate .tech-logos without adding extra divs to Skills.tsx
- Go through Skills page, get all items with .tech-logo
- Create a parent div with .tech-logo-container,
-   and set each .tech-logo to have a parent .tech-logo-container
*/


function AddAnimationContainers() {
    var allAnimations = document.getElementsByClassName("tech-logo");
    for(let i=0; i<allAnimations.length; i++) {
        //Note: declaring all animated items will have a parent element
        var origParent = allAnimations[i].parentElement!;
        var imgWrapper = document.createElement("div");
        imgWrapper.classList.add("tech-logo-container");
        origParent.replaceChild(imgWrapper, allAnimations[i]);
        imgWrapper.appendChild(allAnimations[i]);
    }
}

export default AddAnimationContainers;