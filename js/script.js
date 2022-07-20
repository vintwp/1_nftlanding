
$(document).ready(function () {

   const navbarButton = $('.navbar-toggler')
   navbarButton.click(function (event) {
      console.log('clicked')
      $('.animated-icon').toggleClass('active');
   });


   /*CHANGE COLOR THEME*/
   const themeSwitcher = $('.theme__change')
   let currentTheme = localStorage.getItem('data-theme');
   themeSwitcher.click(function (event) {
      applyTheme(this.dataset.theme)
   });


   function applyTheme(themeName) {
      localStorage.setItem("data-theme", themeName);
      if (themeName === 'dark') {
         document.documentElement.setAttribute("data-theme", 'dark');
         $("img[data-theme$='dark']").css('display', 'none');
         $("img[data-theme$='light']").css('display', 'block');
      }
      if (themeName === 'light' || themeName === 'null') {
         document.documentElement.setAttribute("data-theme", 'light');
         $("img[data-theme$='dark']").css('display', 'block');
         $("img[data-theme$='light']").css('display', 'none');
      }
   }

   if (currentTheme === null) {
      applyTheme('light');
   } else {
      applyTheme(currentTheme);
   }


   let splide = new Splide('.splide', {
      type: 'loop',
      perPage: 4,
      rewind: true,
      autoWidth: false,
      width: '100%',
      fixedWidth: '290px',
      gap: '40px',
      pagination: false,
      arrows: false,
      breakpoints: {
        1024: {
          perPage: 3,

        },
        991: {
          perPage: 2,

        },
        640: {
          perPage: 1,
          fixedWidth: '290px'

        },
        360: {
          perPage: 1,
          fixedWidth: '230px'

        },
      },
    });

    splide.mount();


});




