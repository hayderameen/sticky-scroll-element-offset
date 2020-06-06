document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    if (screen.width > 759) {
      let carousel = document.getElementById("stickyHalf");
      let limit = document.getElementById("set-height-resize");
      carousel.style.height = "91vh";
      if (screen.width / screen.height < 1) {
        // It is a tablet
        if (screen.orientation.angle === 0) {
          carousel.style.height = "44vh";
        } else {
          carousel.style.height = "79vh";
        }
        document.getElementById("slideshow-holder").style.height = "auto";
        document.getElementById("slideshow-holder").style.width =
          "calc(40vw - 6px)";
      }
      window.onscroll = function () {
        let topOffset = limit.getBoundingClientRect().bottom;
        let windowHeight = window.innerHeight;
        if (topOffset > windowHeight + 80) {
          carousel.style.position = "fixed";
          carousel.style.bottom = "0";
          carousel.style.right = "0";
          carousel.style.top = "";
        } else {
          let top = document.getElementById("set-height-resize").clientHeight;
          carousel.style.position = "absolute";
          carousel.style.top = top - carousel.clientHeight + "px";
          carousel.style.right = "0";
        }
      };
      // When tablets change orientation
      window.onorientationchange = function () {
        if (screen.orientation.angle === 0) {
          carousel.style.height = "44vh";
        } else {
          carousel.style.height = "79vh";
        }
      };
    }
  }
};

// some improvements and basically change to entire method

// Now, it detects based on exact height of a reference div or parent div!

// Added for tablets, and it tracks the orientation of tablets too.
