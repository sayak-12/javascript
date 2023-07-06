var menuitems = document.querySelectorAll(".menuitem");
var sections = document.querySelectorAll(".sectioncontainer section");
menuitems.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
      var searchindex = el.getAttribute("index");
      sections.forEach((section) => {
        var matchindex = section.getAttribute("index");
        if (matchindex == searchindex) {
            section.classList.remove("active");
        }
      })
    } 
    else{
      menuitems.forEach((el1) => {
        if (el1.classList.contains("active")) {
          el1.classList.remove("active");
          var searchindex = el1.getAttribute("index");
          sections.forEach((section) => {
            var matchindex = section.getAttribute("index");
            if (matchindex == searchindex) {
                section.classList.remove("active");
            }
          })
        }
      });

      el.classList.add("active");
      var searchindex2  = el.getAttribute("index");
      sections.forEach((section) => {
        var matchindex = section.getAttribute("index");
        if (matchindex == searchindex2) {
            section.classList.add("active");
        }
      })
    }
  });
});
