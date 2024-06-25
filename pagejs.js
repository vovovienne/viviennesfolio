function openMenu() {
    document.getElementById("navbarcontents").classList.toggle("visible");
  }


function opensamplesite(iframeid) {
  const alliframes = document.getElementsByTagName("iframe");
  const iframe = document.getElementById(iframeid);

  for (const ifr of alliframes) {
    if (ifr.id != iframeid) {
      ifr.classList.remove("visible");
    }
  }

  iframe.classList.toggle("visible");

}

function movetextup(textid) {
  const text = document.getElementById(textid);

  text.classList.add(".splashtextraise")
}

function reverttext(textid) {
  const text = document.getElementById(textid);

  text.classList.remove(".splashtextraise")
}

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
