/* =====================================================
   Resume section tabs and tab contents
===================================================== */

const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabsBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll('.resume-tab-content');


var resumeTabNav = function (resumeTabClick) {
   resumeTabContents.forEach((resumeTabContent) => {
      resumeTabContent.style.display = "none";
      resumeTabContent.classList.remove("active");
   });
   resumePortfolioTabsBtns.forEach((resumePortfolioTabsBtn) => {
      resumePortfolioTabsBtn.classList.remove("active");
   });

   resumeTabContents[resumeTabClick].style.display = "flex";

   setTimeout(() => {
      resumeTabContents[resumeTabClick].classList.add("active");
   }, 1000);

   resumePortfolioTabsBtns[resumeTabClick].classList.add("active");

};
resumePortfolioTabsBtns.forEach((resumePortfolioTabsBtn, resumeTabClick) => {
   resumePortfolioTabsBtn.addEventListener('click', () => {
      resumeTabNav(resumeTabClick);
   });



});




const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
   const serviceCard = serviceCardWithModal.querySelector(".service-card");
   const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
   const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");
   const serviceModal = serviceCardWithModal.querySelector(".service-modal");

   serviceCard.addEventListener('click', () => {
      serviceBackDrop.style.display = "flex";
      setTimeout(() => {
         serviceBackDrop.classList.add("active");
      }, 100);
      setTimeout(() => {
         serviceModal.classList.add("active");
      }, 1000);


   });
   modalCloseBtn.addEventListener('click', () => {
      setTimeout(() => {
         serviceBackDrop.style.display = "none";
      }, 500);
      setTimeout(() => {

         serviceBackDrop.classList.remove("active");
         serviceModal.classList.remove("active");
      }, 100);




   });
});


/* =====================================================
   Service modal open/close function
===================================================== */
// Filter portfolio cards according to portfolio tabs.

document.addEventListener('DOMContentLoaded', () => {
   const portfolioTabs = document.querySelector(".portfolio-tabs");
   const portfolioTabsBtns = portfolioTabs.querySelectorAll(".tab-btn");
   const carsdswithModal = document.querySelectorAll(".portfolio-container .card-with-modal");

   portfolioTabsBtns.forEach((tabBtn) => {
      tabBtn.addEventListener('click', () => {
         const filter = tabBtn.getAttribute("data-filter");

         carsdswithModal.forEach((cardWithModal) => {
            if (filter === "all" || cardWithModal.classList.contains(filter)) {
               cardWithModal.classList.remove("hidden");
               setTimeout(() => {
                  cardWithModal.style.opacity = "1";
                  cardWithModal.style.transition = ".5s ease";
                  
               }, 1000);
            }else{
               cardWithModal.classList.add("hidden");
               setTimeout(() => {
                  cardWithModal.style.opacity = "0";
                  cardWithModal.style.transition = ".5s ease";
                  
               }, 1000);

         }});
         
         portfolioTabsBtns.forEach((portfolioTabsBtn) => {
            portfolioTabsBtn.classList.remove("active");
         });
         tabBtn.classList.add("active");

      });
   });
});


/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */
const portfolioCardWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");
portfolioCardWithModals.forEach((portfolioCardWithModal) => {
   const portfolioCard= portfolioCardWithModal.querySelector(".portfolio-card");
   const portfolioBackdrop= portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
   const modalCloseBtn= portfolioCardWithModal.querySelector(".modal-close-btn");
   const portfolioModal= portfolioCardWithModal.querySelector(".portfolio-modal");
   

   portfolioCard.addEventListener('click', () => {
      portfolioBackdrop.style.display = "flex";
      setTimeout(() => {
         portfolioBackdrop.classList.add("active");
      }, 100);
      setTimeout(() => {
         portfolioModal.classList.add("active");
      }, 1000);
   });
   modalCloseBtn.addEventListener('click', () => {
      setTimeout(() => {
         portfolioBackdrop.style.display = "none";
      }, 500);
      setTimeout(() => {
         portfolioBackdrop.classList.remove("active");
         portfolioModal.classList.remove("active");
      }, 100);
   });
});

// Open/Close Portfolio modals.

/* =====================================================
   Testimonial Swiper
===================================================== */

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.

// Javascript to show bottom navigation menu on home(page load).

// Javascript to show/hide bottom navigation menu on home(scroll).

// Hide bottom navigation menu on click menu-hide-btn.

// Show bottom navigation menu on click menu-show-btn.

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

/* =====================================================
   Customized cursor on mousemove
===================================================== */

// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.

// Get saved theme icon and theme on document loaded.

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.

// Target elements and specify options to create reveal animations.