// carousel Controller
var carouselController = (function() {
  var DOMstrings = {
    // carousel-2
    carouselTwoContainer: ".carousel-2__container",
    carouselTwo: "carousel-2",
    carouselTwoLeftBtn: "carousel-2__left-btn",
    carouselTwoRightBtn: "carousel-2__right-btn"
  };

    var setupEventListeners = function() {
  document
    .getElementById(DOMstrings.carouselTwoLeftBtn)
    .addEventListener("click", function() {
      document.getElementById(DOMstrings.carouselTwo).style.transform =
        "translateX(0px)";
      document
        .getElementById(DOMstrings.carouselTwoRightBtn)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.carouselTwoLeftBtn)
        .classList.toggle("hidden");
    });

  document
    .getElementById(DOMstrings.carouselTwoRightBtn)
    .addEventListener("click", function() {
      var carouselContainerWidth = document.querySelector(
        DOMstrings.carouselTwoContainer
      ).offsetWidth;
      var carouselWidth = document.getElementById(DOMstrings.carouselTwo)
        .offsetWidth;
      // console.log(carouselWidth - carouselContainerWidth);
      document.getElementById(DOMstrings.carouselTwo).style.transform =
        "translateX(-" + (carouselWidth - carouselContainerWidth) + "px)";
      document
        .getElementById(DOMstrings.carouselTwoRightBtn)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.carouselTwoLeftBtn)
        .classList.toggle("hidden");
    });

  /* re-center carousel-2 on window resize */
  const myObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      if (entry.contentRect.width >= 1106 || entry.contentRect.width <= 765) {
        document.getElementById(DOMstrings.carouselTwo).style.transform =
          "translateX(0)";
        if (
          document
            .getElementById(DOMstrings.carouselTwoRightBtn)
            .classList.contains("hidden")
        ) {
          document
            .getElementById(DOMstrings.carouselTwoRightBtn)
            .classList.remove("hidden");
          document
            .getElementById(DOMstrings.carouselTwoLeftBtn)
            .classList.add("hidden");
        }
      }
    });
  });

  const carouselTwoElem = document.querySelector(
    DOMstrings.carouselTwoContainer
  );
  myObserver.observe(carouselTwoElem);
  }
  
  return {
    init: function() {
      setupEventListeners();
    }
  };
})();

carouselController.init(); // initialize EventListeners
