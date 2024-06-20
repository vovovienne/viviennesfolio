function openMenu() {
    document.getElementById("navbarcontents").classList.toggle("visible");
  }


const navbar = document.getElementById("navbar");




/*
window.addEventListener("scroll", (event) => {
    const changesection = document.getElementById("webcontentpage");
    const sectrect = changesection.getBoundingClientRect();
    const buttonrect = document.getElementsByClassName("menubutton")[0].getBoundingClientRect();
  
    let toSet;
    if (buttonrect.top >= sectrect.top) {
      if (sectrect.top >= 0) {
        toSet = sectrect.top + "px";
      } else {
        toSet = "0px";
      }
    } else {
      toSet = Math.min(sectrect.top, window.innerHeight * 0.3) + "px"
    }
  
    navbar.style.top = toSet;
  });


window.onclick = function(e) {
    if ((!e.target.matches('.menubutton')) || (!e.target.matches('.navcontents')) || (!e.target.matches('.navcontents')) || (!e.target.matches('.nav'))) {
    var myDropdown = document.getElementById("navbarcontents");
      if (myDropdown.classList.contains('visible')) {
        myDropdown.classList.remove('visible');
        }
    }
}
*/
