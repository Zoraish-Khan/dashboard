const dataLayoutMode = localStorage.getItem('data-bs-theme');
const dataLayout = localStorage.getItem('data-layout');
const dataLayoutWidth = localStorage.getItem('data-layout-width');
const dataSidebarMode = localStorage.getItem('data-sidebar-mode');
const dataSidebar = localStorage.getItem('data-sidebar'); 

var mainMenu = document.querySelector(".navbar-menu").innerHTML;
var menuItem = 5;
//console.log('dataLayoutMode', dataLayoutMode)

const thememMode = localStorage.getItem('data-bs-theme');

  if (thememMode === 'dark') {
    document.querySelector('html').setAttribute('data-bs-theme', 'dark');
    document.getElementById('layout-dark').setAttribute('checked','true')
    console.log('called')
  }

  if (thememMode === 'light') {
    document.querySelector('html').setAttribute('data-bs-theme', 'light');
    document.getElementById('layout-light').setAttribute('checked','true')
    console.log('called')
  }
  if (thememMode === 'blue') {
    document.querySelector('html').setAttribute('data-bs-theme', 'blue');
    console.log('called')
  }
  if (thememMode === 'sea') {
    document.querySelector('html').setAttribute('data-bs-theme', 'sea');
    console.log('called')
  }

  if (thememMode === 'auto') {
    document.querySelector('html').setAttribute('data-bs-theme', 'auto');
    console.log('called')
  }

  if(dataLayoutWidth==='fullSize'){
    document.getElementById('layout-dark').setAttribute('checked','true')
  }
  if(dataLayoutWidth==='box'){
    document.getElementById('layout-dark').setAttribute('checked','true')
  }

  if(dataSidebarMode==='light'){
    document.getElementById('ls1').setAttribute('checked','true')
  }
  if(dataSidebarMode==='dark'){
    document.getElementById('ls2').setAttribute('checked','true')
  }
  if(dataSidebar==='fixed'){
    document.getElementById('ls3').setAttribute('checked','true')
  }
  if(dataSidebar==='scrollable'){
    document.getElementById('ls4').setAttribute('checked','true')
  }
  if(dataSidebar==='small'){
    document.getElementById('ls5').setAttribute('checked','true')
  }

  (function () {
    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })
   })

 
 
  // horizontal menu 

//const dataLayout = localStorage.setItem('data-layout');

const dataLayoutFunction = () => {
  const dataLayout = localStorage.getItem('data-layout');
  if (dataLayout) {
    document.querySelector('html').setAttribute('data-layout', dataLayout);
    
    if(dataLayout === 'vertical'){
      new SimpleBar(document.getElementById('scrollbarMenu'), { autoHide: false });
      document.getElementById('layout-vertical').setAttribute('checked','true')
      document.getElementById("scrollbarMenu").setAttribute("data-simplebar", ""), document.getElementById("navbar-nav").setAttribute("data-simplebar", ""), document.getElementById("scrollbarMenu").classList.add("h-100");
    }
     if (dataLayout === 'horizontal') {
      document.getElementById('layout-horizontal').setAttribute('checked','true')
      document.getElementById('side-layout-position').style.display = 'none', 
      document.getElementById("scrollbarMenu").removeAttribute("data-simplebar"), document.getElementById("scrollbarMenu").classList.remove("h-100");
       document.querySelector(".navbar-menu") && (document.querySelector(".navbar-menu").innerHTML = mainMenu), document.getElementById("scrollbarMenu").removeAttribute("data-simplebar"), document.getElementById("navbar-nav").removeAttribute("data-simplebar"), document.getElementById("scrollbarMenu").classList.remove("h-100");
        var a = menuItem,
            n = document.querySelectorAll("ul.navbar-nav > li.nav-item"),
            moreLiItem = "",
            liItem = "";
        Array.from(n).forEach(function(e, m) {
            m + 1 === a && (liItem = e), a < m + 1 && (moreLiItem += e.outerHTML, e.remove()), m + 1 === n.length && liItem.insertAdjacentHTML && liItem.insertAdjacentHTML("afterend", '<li class="nav-item"><a class="nav-link menu-link" href="#sidebarMore" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMore"><i class="bi bi-briefcase"></i> <span>More</span></a><div class="collapse menu-dropdown" id="sidebarMore"><ul class="nav nav-sm flex-column">' + moreLiItem + "</ul></div></li>")
           // console.log('hello ji....', moreLiItem)
        });
    
    }   
  }
}
dataLayoutFunction();



// function navigationItemActive() {
//       var el = "/" == location.pathname ? "/" : location.pathname.substring(1);
//       (el = el.substring(el.lastIndexOf("/") + 1)) && (el = document.getElementById("navbar-nav").querySelector('[href="' + el + '"]')) && (el.classList.add("active"), 
//       el = el.closest(".collapse.menu-dropdown")) && (el.classList.add("show"), 
//       el.parentElement.children[0].classList.add("active"), 
//       el.parentElement.children[0].setAttribute("aria-expanded", "true"), 
//       el.parentElement.closest(".collapse.menu-dropdown")) && (el.parentElement.closest(".collapse").classList.add("show"), 
//       el.parentElement.closest(".collapse").previousElementSibling && el.parentElement.closest(".collapse").previousElementSibling.classList.add("active"), 
//       el.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown")) && (el.parentElement.parentElement.parentElement.parentElement.closest(".collapse").classList.add("show"), 
//       el.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling) && (el.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling.classList.add("active"), 
//       "horizontal" == document.documentElement.getAttribute("data-layout")) && el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.closest(".collapse") && el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling.classList.add("active")
//   }
//   navigationItemActive()



if (dataLayoutWidth) {
  document.querySelector('html').setAttribute('data-layout-width', dataLayoutWidth);
  document.getElementById('boxView').setAttribute('checked','true')
}
if (dataSidebarMode) {
  document.querySelector('html').setAttribute('data-sidebar-mode', dataSidebarMode);
  document.getElementById('layout-dark').setAttribute('checked','true')
  
}
if (dataSidebar) {
  document.querySelector('html').setAttribute('data-sidebar', dataSidebar);
}



const handleAttributes = (key, value) => {
  console.log(key,value)
  
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
  }
  localStorage.setItem(key, value);
  if (key === 'data-layout' && value === 'horizontal') {
    document.getElementById('side-layout-position').style.display = 'none';
  } 
  else {
    document.getElementById('side-layout-position').style.display = 'block';
  }
  document.querySelector('html').setAttribute(key, value);
  if(key === 'data-bs-theme' && value === 'auto'){
    document.querySelector('html').setAttribute('data-sidebar-mode', 'dark');
    localStorage.setItem('data-sidebar-mode', 'dark')
  }
  if(key === 'data-bs-theme' && value === 'light'){
    document.querySelector('html').setAttribute('data-sidebar-mode', 'light');
    localStorage.setItem('data-sidebar-mode', 'light')
  }
  dataLayoutFunction();
  
};



// const handleLayoutMode = () => {
//   const thememMode = localStorage.getItem('data-bs-theme');
//   if (thememMode === 'light' || !thememMode) {
//     document.querySelector('html').setAttribute('data-bs-theme', 'dark');
//     localStorage.setItem('data-bs-theme', 'dark');
//   } else {
//     document.querySelector('html').setAttribute('data-bs-theme', 'light');
//     localStorage.setItem('data-bs-theme', 'light');
//   }

// };

window.addEventListener('resize', function () {
  if (this.innerWidth < 767.9) {
    document.querySelector('html').setAttribute('data-sidebar', 'large');
  }
  else if (this.innerWidth >= 768 && this.innerWidth < 991.9) {
    document.querySelector('html').setAttribute('data-sidebar', 'small');
  } 
  else if (this.innerWidth > 992.9) {
    document.querySelector('html').setAttribute('data-sidebar', 'large');
    
  }
  console.log('Width =>>>>>>>>', this.innerWidth);
});

const handleResetSettings = () => {
  console.log('called 333')
  document.querySelector('html').setAttribute('data-bs-theme', 'auto');
  localStorage.setItem('data-bs-theme', 'auto');
  document.querySelector('html').setAttribute('data-layout', 'vertical');
  localStorage.setItem('data-layout', 'vertical');
  document.querySelector('html').setAttribute('data-layout-width', 'fullSize');
  localStorage.setItem('data-layout-width', 'fullSize');
  document.querySelector('html').setAttribute('data-sidebar-mode', 'dark');
  localStorage.setItem('data-sidebar-mode', 'dark');
  document.querySelector('html').removeAttribute('data-sidebar', 'fixed');
  localStorage.setItem('data-sidebar', 'fixed');
};

/// hamburger icon js
/// hamburger icon js
document.querySelector('#hamburgerIcon').addEventListener('click', function (e) {
  e.preventDefault();
  [].map.call(document.querySelectorAll('.hamburger-icon'), function (el) {
    el.classList.toggle('open');
      document.querySelector('body').classList.toggle('vertical-menu-show')
      // document.querySelector('html').setAttribute('data-sidebar', 'small');
         //added js for toggle icon 
    let layoutSidebarType=document.documentElement.getAttribute("data-sidebar");
    if (layoutSidebarType === "small") {
      document.documentElement.setAttribute("data-sidebar", "");
    }else {
      document.documentElement.setAttribute("data-sidebar", "small");
    } 
  });
});
// hmaburger menu for lin

// this code is creating problem to change layout vertical to horizontal
// document.addEventListener('click', function (e) {
//   e.preventDefault();
//   if (document.getElementsByClassName('navbar-menu')[0].contains(e.target) || document.getElementById("hamburgerIcon").contains(e.target)){
//     // Clicked in box
//   } else{
//     // Clicked outside the box
//     document.querySelector('body').classList.remove('vertical-menu-show')
//     document.getElementById('hamburgerIcon').classList.remove('open')
//   }
//  });

const handleEmailToggle = () =>{
  let emailToggle = document.getElementById("emailMenu");
  emailToggle.classList.toggle("email-menu-show");
  document.querySelector('body').classList.remove('email-menu-show')
}



//new SimpleBar(document.getElementById('notificationScroll'));


window.addEventListener("scroll", function () {
  const nav = document.getElementById("sticky-nav");
  if (nav) { // only proceed if nav is not null
    console.log(nav);
    nav.classList.toggle("sticky", window.scrollY > 0);
  }
});


//

const navSidebar = [
  {
    title: 'Overview',
    href: 'overview',
    icon: ''
  },
  {
    title: 'Brand',
    href: 'brand',
    icon: ''
  }
]

const navHorizentl = [
  {
    title: 'Overview',
    href: 'overview',
    icon: ''
  },
  {
    title: 'Brand',
    href: 'brand',
    icon: ''
  },
  {
    title: 'Overview',
    href: 'overview',
    icon: ''
  },
  {
    title: 'Brand',
    href: 'brand',
    icon: ''
  },
  {
    title: 'Overview',
    href: 'overview',
    icon: ''
  },
  {
    title: 'More',
    href: 'brand',
    icon: '',
    classname: '',
    subMenu: [
      {
        title: 'Brand',
        href: 'brand',
        icon: ''
      },
      {
        title: 'Overview',
        href: 'overview',
        icon: ''
      },
    ]
  },

]

// for fullscreen 
document.getElementById('fullscreen-btn').addEventListener('click', function() {
    const icon = this.querySelector('i');

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            icon.classList.remove('bi-fullscreen');
            icon.classList.add('bi-fullscreen-exit');
        });
    } else {
        document.exitFullscreen().then(() => {
            icon.classList.remove('bi-fullscreen-exit');
            icon.classList.add('bi-fullscreen');
        });
    }
});

//for navigation 
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') == currentPath) {
            link.classList.add('active');
            const parentDropdown = link.closest('.collapse');
            if (parentDropdown) {
                new bootstrap.Collapse(parentDropdown, {
                    toggle: false
                }).show();
                const parentNavLink = parentDropdown.previousElementSibling;
                if (parentNavLink) {
                    parentNavLink.classList.add('active');
                }
            }
        }
    });
});
//search

// document.addEventListener('DOMContentLoaded', function() {
//   // Your JavaScript code to handle recent searches and other functionality
//   const searchBox = document.getElementById('search-box');
//   const recentSearches = document.getElementById('recent-searches');

//   searchBox.addEventListener('keyup', function(event) {
//     // logic to show/hide recent searches
//     if (searchBox.value.length > 0) {
//       // Simulate searching and showing results
//       recentSearches.innerHTML = '<p>How to setup...</p><p>Buttons...</p>';
//     } else {
//       recentSearches.innerHTML = '';
//     }
//   });
  
//   // View all button functionality
//   const viewAllButton = document.getElementById('view-all');
//   viewAllButton.addEventListener('click', function() {
//     // Logic to view all results
//     alert('View all results clicked!');
//   });
// });