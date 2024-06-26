function openMenu() {
    document.getElementById("navbarcontents").classList.toggle("visible");
  }
  


  function opensamplesite(iframeid, samplesitesrc) {
    const divcont = document.getElementById("samplesitecont");
    const alliframes = divcont.getElementsByTagName("iframe");
    const iframe = document.getElementById(iframeid);
  
    const addsamplesite = document.createElement('iframe');
    addsamplesite.src = (samplesitesrc);
    addsamplesite.classList.add("samplesite");
    addsamplesite.setAttribute("id", iframeid);

    for (const ifr of alliframes) {
      if ((ifr.id != iframeid) || (iframe != null)) {
        divcont.removeChild(ifr);
      }
    }
    
    if (iframe == null) {
      divcont.appendChild(addsamplesite);
    }
  }

  const imageMasks = {
    "introtexthello1": "icons/splashtext/masks/hello_mask1.png",
    "introtexthello2": "icons/splashtext/masks/hello_mask2.png",
    "introtexthello3": null,
    "introtexthello4": null,
    "introtexthello5": "icons/splashtext/masks/hello_mask3.png",
    "introtextwelcome1": "icons/splashtext/masks/welcome_mask1.png",
    "introtextwelcome2": "icons/splashtext/masks/welcome_mask2.png",
    "introtextwelcome3": null,
    "introtextwelcome4": "icons/splashtext/masks/welcome_mask3.png",
    "introtextwelcome5": "icons/splashtext/masks/welcome_mask4.png",
    "introtextwelcome6": "icons/splashtext/masks/welcome_mask5.png",
    "introtextwelcome7": "icons/splashtext/masks/welcome_mask6.png",
    "introtextto1": null,
    "introtextto2": "icons/splashtext/masks/to_mask1.png",
    "introtextmy1": "icons/splashtext/masks/my_mask1.png",
    "introtextmy2": "icons/splashtext/masks/my_mask2.png",
    "introtextfolio1": null,
    "introtextfolio2": "icons/splashtext/masks/folio_mask1.png",
    "introtextfolio3": null,
    "introtextfolio4": null,
    "introtextfolio5": "icons/splashtext/masks/folio_mask2.png",
  }
  
 
  const container = document.getElementById("introtext");
  
  async function init() {
  
    // Pixel map containing the owning image element.
    const idPixelMap = Array(container.clientWidth * container.clientHeight).fill("");
    await Promise.all(Object.keys(imageMasks)
      .map(id => getImageAndMask(id).then(([mask, img]) => {
        const pixels = getImagePixels(mask);
        for (let i = 0; i < pixels.length; i += 4) {
          // If the alpha is not transparent
          if (pixels[i + 3] > 0) {
            idPixelMap[Math.floor(i / 4)] = img;
          }
        }
      })));
  
    const images = Object.keys(imageMasks).map(id => document.getElementById(id));
    const rect = container.getBoundingClientRect();
    container.addEventListener("mousemove", (e) => {
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      const target = idPixelMap[y * container.clientWidth + x];
      for (const img of images) {
        if (img !== target) {
          unbop(img);
        } else {
          bop(img);
        }
      }
    })
  }
  
  function getImagePixels(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  }
  
  function unbop(target) {
    target.style.translate = "";
    target.style.scale = "";
  }
  
  function bop(target) {
    target.style.translate = "0 -5%";
    target.style.scale = "105%";
  }
  
  async function getImageAndMask(id) {
    const actualImg = document.getElementById(id);
    const mask = imageMasks[id];
    if (mask) {
      return [await loadImage(imageMasks[id], actualImg.clientWidth, actualImg.clientHeight), actualImg];
    }
    return [actualImg, actualImg];
  }
  
  async function loadImage(url, width, height) {
    return new Promise(r => {
      const img = new Image();
      img.src = url;
      img.width = width;
      img.height = height;
      img.onload = () => r(img);
    });
  }
  
  init();
  
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
/*
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
