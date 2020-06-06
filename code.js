let sticky = document.getElementById("sticky");
      let limit = document.getElementById("limiting-element-div");
      sticky.style.height = "91vh";
      window.onscroll = function () {
        let topOffset = limit.getBoundingClientRect().bottom;
        let windowHeight = window.innerHeight;
        if (topOffset > windowHeight + 80) {
          sticky.style.position = "fixed";
          sticky.style.bottom = "0";
          sticky.style.right = "0";
          sticky.style.top = "";
        } else {
          let top = limit.clientHeight;
          sticky.style.position = "absolute";
          sticky.style.top = top - sticky.clientHeight + "px";
          sticky.style.right = "0";
        }
      };

// some improvements and basically change to entire method

// Now, it detects based on exact height of a reference div or parent div!
