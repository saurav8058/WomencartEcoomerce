
// header menu script start 

const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu__inner");
const menuArrow = menu.querySelector(".menu__arrow");
const menuTitle = menu.querySelector(".menu__title");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

// Navbar Menu Toggle Function
function toggleMenu() {
  menu.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
}

// Show Mobile Submenu Function
function showSubMenu(children) {
  subMenu = children.querySelector(".submenu");
  subMenu.classList.add("is-active");
  subMenu.style.animation = "slideLeft 0.35s ease forwards";
  const menuTitle = children.querySelector("i").parentNode.childNodes[0]
    .textContent;
  menu.querySelector(".menu__title").textContent = menuTitle;
  menu.querySelector(".menu__header").classList.add("is-active");
}

// Hide Mobile Submenu Function
function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.35s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("is-active");
  }, 300);

  menu.querySelector(".menu__title").textContent = "";
  menu.querySelector(".menu__header").classList.remove("is-active");
}

function toggleSubMenu(e) {
  if (!menu.classList.contains("is-active")) {
    return;
  }
  if (e.target.closest(".menu__dropdown")) {
    const children = e.target.closest(".menu__dropdown");
    showSubMenu(children);
  }
}


window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    if (menu.classList.contains("is-active")) {
      toggleMenu();
    }
  }
});


(function () {
  let darkMode = localStorage.getItem("darkMode");
  const darkSwitch = document.getElementById("switch");


  const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
  };


  if (darkMode === "enabled") {
    enableDarkMode();
  }


  darkSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
})();


burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuTitle.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);



// header menu script end 


// sec_three_scroll script start 

$('.sec_three_scroll.owl-carousel').owlCarousel({
  loop: true,
  nav: false,
  prev: true,
  next: true,
  dot: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  smartSpeed: 1500,
  responsive: {
    0: {
      items: 2,
      margin: 8
    },
    600: {
      items: 3,
      margin: 10
    },
    1000: {
      items: 3
    },
    1024: {
      items: 3,
      margin: 25,
    }

  }
});

// sec_three_scroll script end 

// categories_slider script start 


$('.categories_slider.owl-carousel').owlCarousel({
  loop: true,

  nav: false,
  prev: true,
  next: true,
  dot: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  smartSpeed: 1500,
  navText: ['<span> <img src="assets/img/category_arrow_left.png" alt=""></span>', '<span> <img src="assets/img/category_arrow_right.png" alt=""> </span>'],
  responsive: {
    0: {
      items: 3,
      margin: 5,

    },
    600: {
      items: 6,
      margin: 5,

    },
    800: {
      items: 7,

    },
    1000: {
      items: 7
    },
    1024: {
      items: 7,

    }

  }
});


// categories_slider script end 

// waiting_cart_slider script start 


$('.waiting_cart_slider.owl-carousel').owlCarousel({
  loop: true,
  nav: false,
  prev: true,
  next: true,
  dot: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  smartSpeed: 1500,
  navText: ['<span> <img src="assets/img/category_arrow_left.png" alt=""></span>', '<span> <img src="assets/img/category_arrow_right.png" alt=""> </span>'],
  responsive: {
    0: {
      items: 2,
      margin: 8
    },
    600: {
      items: 4,
      margin: 10
    },
    800: {
      items: 5,
      margin: 10
    },
    1000: {
      items: 5
    },
    1024: {
      items: 5,
      margin: 20,
    }

  }
});

// waiting_cart_slider script end 

// exclusive_makeup_slider script start 


$('.exclusive_makeup_slider.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  prev: true,
  next: true,
  dot: true,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  smartSpeed: 1500,
  navText: ['<span> <img src="assets/img/category_arrow_left.png" alt=""></span>', '<span> <img src="assets/img/category_arrow_right.png" alt=""> </span>'],
  responsive: {
    0: {
      items: 3,
      margin: 8
    },
    600: {
      items: 5,
      margin: 5,

    },
    800: {
      items: 6,
      margin: 10
    },
    1000: {
      items: 7
    },
    1024: {
      items: 7,
      margin: 20,
    }

  }
});
// exclusive_makeup_slider script end 


// top_brands_slider script start 


$('.top_brands_slider.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  // prev: true,
  // next: true,
  dot: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  smartSpeed: 1500,
  navText: ['<span> <img src="assets/img/category_arrow_left.png" alt=""></span>', '<span> <img src="assets/img/category_arrow_right.png" alt=""> </span>'],
  responsive: {
    0: {
      items: 2,
      margin: 0
    },
    600: {
      items: 5,
      margin: 10,
      nav: true,
    },
    1000: {
      items: 6
    },
    1024: {
      items: 6,
      margin: 0,
    }

  }
});

// top_brands_slider script end 







// explore_gifting_slider script start 


$('.explore_gifting_slider.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  prev: true,
  next: true,
  dot: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  smartSpeed: 1500,
  navText: ['<span> <img src="assets/img/category_arrow_left.png" alt=""></span>', '<span> <img src="assets/img/category_arrow_right.png" alt=""> </span>'],
  responsive: {
    0: {
      items: 3,
      margin: 8
    },
    600: {
      items: 5,
      margin: 10
    },
    1000: {
      items: 6
    },
    1024: {
      items: 6,
      margin: 20,
    }

  }
});

// explore_gifting_slider script end 


// sparkle_shine_slider script start 


$('.sparkle_shine_slider.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  prev: true,
  next: true,
  dot: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp',
  smartSpeed: 3000,
  navText: ['<span> <img src="assets/img/category_arrow_left.png" alt=""></span>', '<span> <img src="assets/img/category_arrow_right.png" alt=""> </span>'],
  responsive: {
    0: {
      items: 3,
      margin: 8
    },
    600: {
      items: 5,
      margin: 10
    },
    1000: {
      items: 5
    },
    1024: {
      items: 5,
      margin: 20,
    }

  }

});

// sparkle_shine_slider script end 




// comfy_slider script start 


$('.comfy_slider.owl-carousel').owlCarousel({
  loop: false,
  nav: true,
  prev: true,
  next: true,
  dot: true,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp',
  smartSpeed: 3000,
  navText: ['<span> <img src="assets/img/category_arrow_left.png" alt=""></span>', '<span> <img src="assets/img/category_arrow_right.png" alt=""> </span>'],
  responsive: {
    0: {
      items: 2,
      margin: 8
    },
    600: {
      items: 4,
      margin: 10
    },
    1000: {
      items: 4
    },
    1024: {
      items: 4,
      margin: 20,
    }

  }

});

// comfy_slider script end 


// new_on_slider script start 



$('.new_on_slider.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  prev: true,
  next: true,
  dot: true,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp',
  smartSpeed: 3000,
  navText: ['<span> <img src="assets/img/category_arrow_left.png" alt=""></span>', '<span> <img src="assets/img/category_arrow_right.png" alt=""> </span>'],
  responsive: {
    0: {
      items: 2,
      margin: 8
    },
    600: {
      items: 4,
      margin: 10
    },
    1000: {
      items: 4
    },
    1024: {
      items: 4,
      margin: 20,
    }

  }

});

// new_on_slider script end 


// budget_slider script start 

$('.budget_slider.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  prev: true,
  next: true,
  dot: true,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp',
  smartSpeed: 3000,
  navText: ['<span> <img src="assets/img/category_arrow_left.png" alt=""></span>', '<span> <img src="assets/img/category_arrow_right.png" alt=""> </span>'],
  responsive: {
    0: {
      items: 2,
      margin: 8
    },
    600: {
      items: 5,
      margin: 5
    },
    1000: {
      items: 6
    },
    1024: {
      items: 6,
      margin: 20,
    }

  }

});

// budget_slider script end 






// product details vertical slider script start 

const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {

  direction: 'vertical',
  slidesPerView: 6,
  spaceBetween: 24,
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev'
  },
  freeMode: true,
  breakpoints: {
    0: {
      direction: 'horizontal',
    },
    768: {
      direction: 'vertical',
    }
  }
});




const sliderImages = new Swiper('.slider__images .swiper-container', {

  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 32,
  mousewheel: true,
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev'
  },
  grabCursor: true,
  thumbs: {
    swiper: sliderThumbs
  },
  breakpoints: {
    0: {
      direction: 'horizontal',
    },
    768: {
      direction: 'vertical',
    }
  }
});


// product details vertical slider script end 


// button link script start 

$("button.link").click(function () {
  $("button.link").css("border-color", "none");
  $(this).css("border-color", "#ff2d9e");
});

// button link script end 


// filter script start 

const mediaQuerymobile = window.matchMedia("(max-width: 768.98px)");

if (mediaQuerymobile.matches) {
  $(".sort-drop").on("show.bs.dropdown", function () {
    $(".overlay").show();
  });
  $(".sort-drop").on("hide.bs.dropdown", function () {
    $(".overlay").hide();
  });
}


$(".filter-btn").click(function () {
  $(".sidebar").addClass("open");
  $("body").addClass("overflow-hidden vh-100");
});
$(".filter-close-btn").click(function () {
  $(".sidebar").removeClass("open");
  $("body").removeClass("overflow-hidden vh-100");
});



const mediaQuerySM = window.matchMedia('(min-width: 768px)')
if (mediaQuerySM.matches) {
  var sidebar = new StickySidebar('.sidebar', {
    topSpacing: 80,
    bottomSpacing: 20,
    containerSelector: '.main-content',
    innerWrapperSelector: '.sidebar__inner'
  });
}

// filter script end 



