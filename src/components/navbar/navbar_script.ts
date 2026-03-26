import { useLocation } from "react-router-dom";
//import type { NavbarLink } from "../../types/navbar.types";
//import { useState } from "react";

//console.log(window);

window.onload = function() {
    const pagesContainer = document.getElementById("pages-container");

    if(!pagesContainer) {
        console.log("Could not access container for navbar links.");
    }
    else {
        let navbarLinks = Array.from(pagesContainer!.children);
        //console.log(navbarLinks);

        updateNavbar(navbarLinks);

        //Add event listeners
        navbarLinks.forEach((l: Element) => {
            l.addEventListener('click', () => {
                l.classList.toggle("navbar-link-active")
            });
        });
    }
}

window.onpopstate = function() {
    const pagesContainer = document.getElementById("pages-container");

    let navLinks = Array.from(document.getElementsByClassName("nav-link"));
    console.log(navLinks);

    updateNavbar(navLinks);
}

//Match url to navbarLinks item
function updateNavbar(navbarLinks: Array<Element>) {
    navbarLinks.forEach((l: Element) => {
        if(!l.getAttribute("href")) {
            console.log("Navbar Link " + String(l) + " has no href attribute");
        }

        let linkTarget: string = l.getAttribute("href")!;
        //console.log(linkTarget);

        if((window.location.href).includes(linkTarget)) {
            //console.log(window.location.href);
            l.setAttribute("href", "#");
            l.classList.add("navbar-link-active");
            console.log("Added class navbar-link-active to " + l);
        }
    });
}