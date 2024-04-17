var swiper = new Swiper(".default-swiper", {
    autoplay:{
        delay: 2000,
    }
});
// navigation
var swiper = new Swiper(".navigation-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay:{
        delay: 2500,
    }
  });
// pagination
var swiper = new Swiper(".pagination-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    
  });
  // pagination progress
  var swiper = new Swiper(".pagination-progress", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // pagination fraction
  var swiper = new Swiper(".pagination-fraction", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // pagination custom
  var swiper = new Swiper(".pagination-custom", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
  // vertical
  var swiper = new Swiper(".vertical-swiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:true
  });
  // keyboard-control
  var swiper = new Swiper(".keyboard-control", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // mousewheel control
  var swiper = new Swiper(".mousewheel-control", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // responsive brekpoint
  var swiper = new Swiper(".responsive-breakpoint", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });