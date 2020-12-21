// slideshow Controller
var slideshowController = (function() {
  var DOMstrings = {
    // primary slideshow - left/right arrows
    primarySlideshowButtons: ".primary-slideshow__btn",
    primarySlideshowPlayBtnContainer: "primary-slideshow__play-btn",
    primarySlideshowPauseBtn: "primary-slideshow__play-btn__pause",
    primarySlideshowPlayBtn: "primary-slideshow__play-btn__play",
    // primary slideshow - slide indicators
    primarySlideshowSlideIndicatorOne: "primary-slideshow_slide-indicator-1",
    primarySlideshowSlideIndicatorTwo: "primary-slideshow_slide-indicator-2",
    primarySlideshowCurrentSlide: "primary-slideshow__current-slide",
    // primary slideshow - slide one
    primarySlideshowSlideOneInfo: "primary-slideshow__slide-one__info",
    primarySlideshowSlideOneInfoContainer:
      "primary-slideshow__slide-one__info-container",
    primarySlideshowSlideOneImg: ".primary-slideshow__slide-one__img",
    primarySlideshowSlideOneInfoAnimation:
      "primary-slideshow__slide-one__info-appear",
    primarySlideshowSlideOneImgAnimation:
      "primary-slideshow__slide-one__img-appear",
    // primary slideshow - slide two
    primarySlideshowSlideTwoInfo: "primary-slideshow__slide-two__info",
    primarySlideshowSlideTwoInfoContainer:
      "primary-slideshow__slide-two__info-container",
    primarySlideshowSlideTwoImg: ".primary-slideshow__slide-two__img",
    primarySlideshowSlideTwoInfoAnimation:
      "primary-slideshow__slide-two__info-appear",
    primarySlideshowSlideTwoImgAnimation:
      "primary-slideshow__slide-two__img-appear",
    // secondary slideshow - left/right arrows
    secondarySlideshowButtons: ".secondary-slideshow__btn",
    secondarySlideshowPlayBtnContainer: "secondary-slideshow__play-btn",
    secondarySlideshowPauseBtn: "secondary-slideshow__play-btn__pause",
    secondarySlideshowPlayBtn: "secondary-slideshow__play-btn__play",
    // secondary slideshow - slide indicators
    secondarySlideshowSlideIndicatorOne:
      "secondary-slideshow_slide-indicator-1",
    secondarySlideshowSlideIndicatorTwo:
      "secondary-slideshow_slide-indicator-2",
    secondarySlideshowCurrentSlide: "secondary-slideshow__current-slide",
    // secondary slideshow - slide one
    secondarySlideshowSlideOneInfo: "secondary-slideshow__slide-one__info",
    secondarySlideshowSlideOneInfoContainer:
      "secondary-slideshow__slide-one__info-container",
    secondarySlideshowSlideOneImg: ".secondary-slideshow__slide-one__img",
    secondarySlideshowSlideOneInfoAnimation:
      "secondary-slideshow__slide-one__info-appear",
    secondarySlideshowSlideOneImgAnimation:
      "secondary-slideshow__slide-one__img-appear",
    // secondary slideshow - slide two
    secondarySlideshowSlideTwoInfoContainer:
      "secondary-slideshow__slide-two__info-container",
    secondarySlideshowSlideTwoInfo: "secondary-slideshow__slide-two__info",
    secondarySlideshowSlideTwoImg: ".secondary-slideshow__slide-two__img",
    secondarySlideshowSlideTwoInfoAnimation:
      "secondary-slideshow__slide-two__info-appear",
    secondarySlideshowSlideTwoImgAnimation:
      "secondary-slideshow__slide-two__img-appear",
  };

  /* intialize automatic slideshow */
  var primarySlideshow = setInterval(primarySlideshowNextSlide, 6000);
  var secondarySlideshow = setInterval(secondarySlideshowNextSlide, 6000);

  // declare functions

  /* toggle the slide indicators */
  function toggleSlideIndicators(
    slideIndicatorOne,
    slideIndicatorTwo,
    currentSlide
  ) {
    document.getElementById(slideIndicatorOne).classList.toggle(currentSlide);
    document.getElementById(slideIndicatorTwo).classList.toggle(currentSlide);
  }

  // primary slideshow - next slide
  function primarySlideshowNextSlide() {
    /* toggle appearance of primary carousel slides */
    if (
      !document
        .getElementById(DOMstrings.primarySlideshowSlideOneInfoContainer)
        .classList.contains("hidden") &&
      !document
        .getElementById(DOMstrings.primarySlideshowSlideOneInfoContainer)
        .classList.contains(DOMstrings.primarySlideshowSlideOneInfoAnimation)
    ) {
      // hide slide-one
      document
        .getElementById(DOMstrings.primarySlideshowSlideOneInfo)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.primarySlideshowSlideOneInfoContainer)
        .classList.toggle("hidden");
      document
        .querySelector(DOMstrings.primarySlideshowSlideOneImg)
        .classList.toggle("hidden");
      // show slide-two
      document
        .getElementById(DOMstrings.primarySlideshowSlideTwoInfo)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.primarySlideshowSlideTwoInfoContainer)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.primarySlideshowSlideTwoInfoContainer)
        .classList.toggle(DOMstrings.primarySlideshowSlideTwoInfoAnimation);
      document
        .querySelector(DOMstrings.primarySlideshowSlideTwoImg)
        .classList.toggle("hidden");
      document
        .querySelector(DOMstrings.primarySlideshowSlideTwoImg)
        .classList.toggle(DOMstrings.primarySlideshowSlideTwoImgAnimation);
      if (
        // if the pause btn is hidden, reset the slideshow timer
        !document
          .getElementById(DOMstrings.primarySlideshowPauseBtn)
          .classList.contains("hidden")
      ) {
        clearInterval(primarySlideshow);
        primarySlideshow = setInterval(primarySlideshowNextSlide, 6000);
      }
    } else {
      // toggle appearance of slide-one
      document
        .getElementById(DOMstrings.primarySlideshowSlideOneInfo)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.primarySlideshowSlideOneInfoContainer)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.primarySlideshowSlideOneInfoContainer)
        .classList.toggle(DOMstrings.primarySlideshowSlideOneInfoAnimation);
      document
        .querySelector(DOMstrings.primarySlideshowSlideOneImg)
        .classList.toggle("hidden");
      document
        .querySelector(DOMstrings.primarySlideshowSlideOneImg)
        .classList.toggle(DOMstrings.primarySlideshowSlideOneImgAnimation);
      // toggle appearance of slide-two
      document
        .getElementById(DOMstrings.primarySlideshowSlideTwoInfo)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.primarySlideshowSlideTwoInfoContainer)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.primarySlideshowSlideTwoInfoContainer)
        .classList.toggle(DOMstrings.primarySlideshowSlideTwoInfoAnimation);
      document
        .querySelector(DOMstrings.primarySlideshowSlideTwoImg)
        .classList.toggle("hidden");
      document
        .querySelector(DOMstrings.primarySlideshowSlideTwoImg)
        .classList.toggle(DOMstrings.primarySlideshowSlideTwoImgAnimation);
      if (
        // if the pause btn is hidden, reset the slideshow timer
        !document
          .getElementById(DOMstrings.primarySlideshowPauseBtn)
          .classList.contains("hidden")
      ) {
        clearInterval(primarySlideshow);
        primarySlideshow = setInterval(primarySlideshowNextSlide, 6000);
      }
    }
  }

  // secondary slideshow - next slide
  function secondarySlideshowNextSlide() {
    /* toggle appearance of secondary carousel slides */
    if (
      !document
        .getElementById(DOMstrings.secondarySlideshowSlideOneInfoContainer)
        .classList.contains("hidden") &&
      !document
        .getElementById(DOMstrings.secondarySlideshowSlideOneInfoContainer)
        .classList.contains(DOMstrings.secondarySlideshowSlideOneInfoAnimation)
    ) {
      // hide slide-one
      document
        .getElementById(DOMstrings.secondarySlideshowSlideOneInfo)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.secondarySlideshowSlideOneInfoContainer)
        .classList.toggle("hidden");
      document
        .querySelector(DOMstrings.secondarySlideshowSlideOneImg)
        .classList.toggle("hidden");
      // show slide-two
      document
        .getElementById(DOMstrings.secondarySlideshowSlideTwoInfo)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.secondarySlideshowSlideTwoInfoContainer)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.secondarySlideshowSlideTwoInfoContainer)
        .classList.toggle(DOMstrings.secondarySlideshowSlideTwoInfoAnimation);
      document
        .querySelector(DOMstrings.secondarySlideshowSlideTwoImg)
        .classList.toggle("hidden");
      document
        .querySelector(DOMstrings.secondarySlideshowSlideTwoImg)
        .classList.toggle(DOMstrings.secondarySlideshowSlideTwoImgAnimation);
      if (
        // if the pause btn is hidden, reset the slideshow timer
        !document
          .getElementById(DOMstrings.secondarySlideshowPauseBtn)
          .classList.contains("hidden")
      ) {
        clearInterval(secondarySlideshow);
        secondarySlideshow = setInterval(secondarySlideshowNextSlide, 6000);
      }
    } else {
      // toggle appearance of slide-one
      document
        .getElementById(DOMstrings.secondarySlideshowSlideOneInfo)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.secondarySlideshowSlideOneInfoContainer)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.secondarySlideshowSlideOneInfoContainer)
        .classList.toggle(DOMstrings.secondarySlideshowSlideOneInfoAnimation);
      document
        .querySelector(DOMstrings.secondarySlideshowSlideOneImg)
        .classList.toggle("hidden");
      document
        .querySelector(DOMstrings.secondarySlideshowSlideOneImg)
        .classList.toggle(DOMstrings.secondarySlideshowSlideOneImgAnimation);
      // toggle appearance of slide-two
      document
        .getElementById(DOMstrings.secondarySlideshowSlideTwoInfo)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.secondarySlideshowSlideTwoInfoContainer)
        .classList.toggle("hidden");
      document
        .getElementById(DOMstrings.secondarySlideshowSlideTwoInfoContainer)
        .classList.toggle(DOMstrings.secondarySlideshowSlideTwoInfoAnimation);
      document
        .querySelector(DOMstrings.secondarySlideshowSlideTwoImg)
        .classList.toggle("hidden");
      document
        .querySelector(DOMstrings.secondarySlideshowSlideTwoImg)
        .classList.toggle(DOMstrings.secondarySlideshowSlideTwoImgAnimation);
      if (
        // if the pause btn is hidden, reset the slideshow timer
        !document
          .getElementById(DOMstrings.secondarySlideshowPauseBtn)
          .classList.contains("hidden")
      ) {
        clearInterval(secondarySlideshow);
        secondarySlideshow = setInterval(secondarySlideshowNextSlide, 6000);
      }
    }
  }

  // show slide
  function showSlideshowSlide(
    info,
    infoContainer,
    infoAnimation,
    img,
    imgAnimation
  ) {
    document.getElementById(info).classList.remove("hidden");
    document.getElementById(infoContainer).classList.remove("hidden");
    document.getElementById(infoContainer).classList.add(infoAnimation);
    document.querySelector(img).classList.remove("hidden");
    document.querySelector(img).classList.add(imgAnimation);
  }

  // hide slide
  function hideSlideshowSlide(
    info,
    infoContainer,
    infoAnimation,
    img,
    imgAnimation
  ) {
    document.getElementById(info).classList.add("hidden");
    document.getElementById(infoContainer).classList.add("hidden");
    document.getElementById(infoContainer).classList.remove(infoAnimation);
    document.querySelector(img).classList.add("hidden");
    document.querySelector(img).classList.remove(imgAnimation);
  }

  var setupEventListeners = function() {
    // primary slideshow - left/right arrow event listeners
    Array.prototype.slice
      .call(document.querySelectorAll(DOMstrings.primarySlideshowButtons))
      .forEach(function(item) {
        item.addEventListener("click", function() {
          toggleSlideIndicators(
            DOMstrings.primarySlideshowSlideIndicatorOne,
            DOMstrings.primarySlideshowSlideIndicatorTwo,
            DOMstrings.primarySlideshowCurrentSlide
          );
          primarySlideshowNextSlide();
        });
      });

    // primary slideshow - play-btn event listener
    document
      .getElementById(DOMstrings.primarySlideshowPlayBtnContainer)
      .addEventListener("click", function() {
        /* on click toggle pause/play img */
        document
          .getElementById(DOMstrings.primarySlideshowPauseBtn)
          .classList.toggle("hidden");
        document
          .getElementById(DOMstrings.primarySlideshowPlayBtn)
          .classList.toggle("hidden");
        if (
          document
            .getElementById(DOMstrings.primarySlideshowPauseBtn)
            .classList.contains("hidden")
        ) {
          // if pause btn is hidden, stop the automatic slideshow
          clearInterval(primarySlideshow);
        } else {
          // reset the automatic slideshow timer
          clearInterval(primarySlideshow);
          primarySlideshow = setInterval(primarySlideshowNextSlide, 6000);
        }
      });

    // primary slideshow - slide-indicator-1 event listener
    document
      .getElementById(DOMstrings.primarySlideshowSlideIndicatorOne)
      .addEventListener("click", function() {
        if (
          document
            .getElementById(DOMstrings.primarySlideshowSlideOneInfo)
            .classList.contains("hidden")
        ) {
          // show slide-one
          showSlideshowSlide(
            DOMstrings.primarySlideshowSlideOneInfo,
            DOMstrings.primarySlideshowSlideOneInfoContainer,
            DOMstrings.primarySlideshowSlideOneInfoAnimation,
            DOMstrings.primarySlideshowSlideOneImg,
            DOMstrings.primarySlideshowSlideOneImgAnimation
          );
          // hide slide-two
          hideSlideshowSlide(
            DOMstrings.primarySlideshowSlideTwoInfo,
            DOMstrings.primarySlideshowSlideTwoInfoContainer,
            DOMstrings.primarySlideshowSlideTwoInfoAnimation,
            DOMstrings.primarySlideshowSlideTwoImg,
            DOMstrings.primarySlideshowSlideTwoImgAnimation
          );
          // set slide-indicator-1 as current slide
          document
            .getElementById(DOMstrings.primarySlideshowSlideIndicatorOne)
            .classList.add(DOMstrings.primarySlideshowCurrentSlide);
          document
            .getElementById(DOMstrings.primarySlideshowSlideIndicatorTwo)
            .classList.remove(DOMstrings.primarySlideshowCurrentSlide);
          if (
            // if the pause btn is displaying, reset the slideshow timer
            !document
              .getElementById(DOMstrings.primarySlideshowPauseBtn)
              .classList.contains("hidden")
          ) {
            clearInterval(primarySlideshow);
            primarySlideshow = setInterval(primarySlideshowNextSlide, 6000);
          }
        }
      });

    // primary slideshow - slide-indicator-2 event listener
    document
      .getElementById(DOMstrings.primarySlideshowSlideIndicatorTwo)
      .addEventListener("click", function() {
        if (
          document
            .getElementById(DOMstrings.primarySlideshowSlideTwoInfo)
            .classList.contains("hidden")
        ) {
          // show slide-one
          showSlideshowSlide(
            DOMstrings.primarySlideshowSlideTwoInfo,
            DOMstrings.primarySlideshowSlideTwoInfoContainer,
            DOMstrings.primarySlideshowSlideTwoInfoAnimation,
            DOMstrings.primarySlideshowSlideTwoImg,
            DOMstrings.primarySlideshowSlideTwoImgAnimation
          );
          // hide slide-two
          hideSlideshowSlide(
            DOMstrings.primarySlideshowSlideOneInfo,
            DOMstrings.primarySlideshowSlideOneInfoContainer,
            DOMstrings.primarySlideshowSlideOneInfoAnimation,
            DOMstrings.primarySlideshowSlideOneImg,
            DOMstrings.primarySlideshowSlideOneImgAnimation
          );
          // set slide-indicator-1 as current slide
          document
            .getElementById(DOMstrings.primarySlideshowSlideIndicatorTwo)
            .classList.add(DOMstrings.primarySlideshowCurrentSlide);
          document
            .getElementById(DOMstrings.primarySlideshowSlideIndicatorOne)
            .classList.remove(DOMstrings.primarySlideshowCurrentSlide);
          if (
            // if the pause btn is displaying, reset the slideshow timer
            !document
              .getElementById(DOMstrings.primarySlideshowPauseBtn)
              .classList.contains("hidden")
          ) {
            clearInterval(primarySlideshow);
            primarySlideshow = setInterval(primarySlideshowNextSlide, 6000);
          }
        }
      });

    // secondary slideshow - left/right arrow event listeners
    Array.prototype.slice
      .call(document.querySelectorAll(DOMstrings.secondarySlideshowButtons))
      .forEach(function(item) {
        item.addEventListener("click", function() {
          toggleSlideIndicators(
            DOMstrings.secondarySlideshowSlideIndicatorOne,
            DOMstrings.secondarySlideshowSlideIndicatorTwo,
            DOMstrings.secondarySlideshowCurrentSlide
          );
          secondarySlideshowNextSlide();
        });
      });

    // secondary slideshow - play-btn event listener
    document
      .getElementById(DOMstrings.secondarySlideshowPlayBtnContainer)
      .addEventListener("click", function() {
        /* on click toggle pause/play img */
        document
          .getElementById(DOMstrings.secondarySlideshowPauseBtn)
          .classList.toggle("hidden");
        document
          .getElementById(DOMstrings.secondarySlideshowPlayBtn)
          .classList.toggle("hidden");
        if (
          document
            .getElementById(DOMstrings.secondarySlideshowPauseBtn)
            .classList.contains("hidden")
        ) {
          // if pause btn is hidden, stop the automatic slideshow
          clearInterval(secondarySlideshow);
        } else {
          // reset the automatic slideshow timer
          clearInterval(secondarySlideshow);
          secondarySlideshow = setInterval(secondarySlideshowNextSlide, 6000);
        }
      });

    // secondary slideshow - slide-indicator-1 event listener
    document
      .getElementById(DOMstrings.secondarySlideshowSlideIndicatorOne)
      .addEventListener("click", function() {
        if (
          document
            .getElementById(DOMstrings.secondarySlideshowSlideOneInfo)
            .classList.contains("hidden")
        ) {
          // show slide-one
          showSlideshowSlide(
            DOMstrings.secondarySlideshowSlideOneInfo,
            DOMstrings.secondarySlideshowSlideOneInfoContainer,
            DOMstrings.secondarySlideshowSlideOneInfoAnimation,
            DOMstrings.secondarySlideshowSlideOneImg,
            DOMstrings.secondarySlideshowSlideOneImgAnimation
          );
          // hide slide-two
          hideSlideshowSlide(
            DOMstrings.secondarySlideshowSlideTwoInfo,
            DOMstrings.secondarySlideshowSlideTwoInfoContainer,
            DOMstrings.secondarySlideshowSlideTwoInfoAnimation,
            DOMstrings.secondarySlideshowSlideTwoImg,
            DOMstrings.secondarySlideshowSlideTwoImgAnimation
          );
          // set slide-indicator-1 as current slide
          document
            .getElementById(DOMstrings.secondarySlideshowSlideIndicatorOne)
            .classList.add(DOMstrings.secondarySlideshowCurrentSlide);
          document
            .getElementById(DOMstrings.secondarySlideshowSlideIndicatorTwo)
            .classList.remove(DOMstrings.secondarySlideshowCurrentSlide);
          if (
            // if the pause btn is displaying, reset the slideshow timer
            !document
              .getElementById(DOMstrings.secondarySlideshowPauseBtn)
              .classList.contains("hidden")
          ) {
            clearInterval(secondarySlideshow);
            secondarySlideshow = setInterval(secondarySlideshowNextSlide, 6000);
          }
        }
      });

    // secondary slideshow - slide-indicator-2 event listener
    document
      .getElementById(DOMstrings.secondarySlideshowSlideIndicatorTwo)
      .addEventListener("click", function() {
        if (
          document
            .getElementById(DOMstrings.secondarySlideshowSlideTwoInfo)
            .classList.contains("hidden")
        ) {
          // show slide-one
          showSlideshowSlide(
            DOMstrings.secondarySlideshowSlideTwoInfo,
            DOMstrings.secondarySlideshowSlideTwoInfoContainer,
            DOMstrings.secondarySlideshowSlideTwoInfoAnimation,
            DOMstrings.secondarySlideshowSlideTwoImg,
            DOMstrings.secondarySlideshowSlideTwoImgAnimation
          );
          // hide slide-two
          hideSlideshowSlide(
            DOMstrings.secondarySlideshowSlideOneInfo,
            DOMstrings.secondarySlideshowSlideOneInfoContainer,
            DOMstrings.secondarySlideshowSlideOneInfoAnimation,
            DOMstrings.secondarySlideshowSlideOneImg,
            DOMstrings.secondarySlideshowSlideOneImgAnimation
          );
          // set slide-indicator-1 as current slide
          document
            .getElementById(DOMstrings.secondarySlideshowSlideIndicatorTwo)
            .classList.add(DOMstrings.secondarySlideshowCurrentSlide);
          document
            .getElementById(DOMstrings.secondarySlideshowSlideIndicatorOne)
            .classList.remove(DOMstrings.secondarySlideshowCurrentSlide);
          if (
            // if the pause btn is displaying, reset the slideshow timer
            !document
              .getElementById(DOMstrings.secondarySlideshowPauseBtn)
              .classList.contains("hidden")
          ) {
            clearInterval(secondarySlideshow);
            secondarySlideshow = setInterval(secondarySlideshowNextSlide, 6000);
          }
        }
      });
  };

  return {
    init: function() {
      setupEventListeners();
    }
  };
})();

slideshowController.init(); // initialize EventListeners
