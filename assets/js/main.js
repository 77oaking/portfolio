
const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabsBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll('.resume-tab-content');
// const dayjs = require('dayjs');

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
            } else {
               cardWithModal.classList.add("hidden");
               setTimeout(() => {
                  cardWithModal.style.opacity = "0";
                  cardWithModal.style.transition = ".5s ease";

               }, 1000);

            }
         });

         portfolioTabsBtns.forEach((portfolioTabsBtn) => {
            portfolioTabsBtn.classList.remove("active");
         });
         tabBtn.classList.add("active");

      });
   });
});


const portfolioCardWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");
portfolioCardWithModals.forEach((portfolioCardWithModal) => {
   const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
   const portfolioBackdrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
   const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");
   const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");


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

/* var swiper = new Swiper(".sue-client-swiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
 */



sueContactForm = document.getElementById("sue-contact-form");
sueContactFormAlert= document.querySelector(".contact-form-alert");
sueContactForm.addEventListener('submit', function(event) {
   event.preventDefault();
   // these IDs from the previous steps
   emailjs.sendForm('service_welxzeh', 'template_6om4x4l', '#sue-contact-form')
       .then(() => {
         console.log('SUCCESS!');
         sueContactFormAlert.innerHTML = "<span>Your Message sent Successfully</span>";
         setTimeout(() => {
            
            sueContactForm.innerHTML='';
         }, 5000);
       }, (error) => {
         console.log('FAILED...', error);
         sueContactFormAlert.innerHTML = "<span>Message Not Sent<i class='ri-error-warning-fill'></i></span>";
         sueContactFormAlert.title = error;
       });
});

/* window.addEventListener("scroll", ()=>{
   const navMenuSections = document.querySelectorAll(".nav-menu-section");
   const scrollY = window.pageYOffset;
   navMenuSections.forEach((navMenuSection)=>{
      let sectionHeight = navMenuSection.offsetHeight;
      let sectionTop=navMenuSection.offsetHeight-50;
      let id= navMenuSection.getAttribute("id");
      if(scrollY > sectionTop && scrollY<=sectionTop + sectionHeight){
         document.querySelector(".bottom-nav .menu li a[href*=*"+id+"]").classList.add('current');
      }else{
         document.querySelector(".bottom-nav .menu li a[href*=*"+id+"]").classList.remove('current');

      }
   });
}); */

window.addEventListener("scroll", () => {
   const navMenuSections = document.querySelectorAll(".nav-menu-section");
   const scrollY = window.pageYOffset;
   
   navMenuSections.forEach((navMenuSection) => { // Fixed variable name
      let sectionHeight = navMenuSection.offsetHeight;
      let sectionTop = navMenuSection.offsetTop - 50; // Fixed sectionTop calculation
      let id = navMenuSection.getAttribute("id");

      let link = document.querySelector(".bottom-nav .menu li a[href*='" + id + "']"); // Fixed selector

      if (link) { // Added null check to prevent errors
         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add("current");
         } else {
            link.classList.remove("current");
         }
      }
   });
});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", ()=>{
   themeBtn.classList.toggle('active-sun-icon');
   document.body.classList.toggle('light-theme');
});


//Show Date and Time in header
function updateTime() {
   const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
   document.getElementById("port-time").innerHTML = now;
 }
 updateTime();
 setInterval(updateTime, 1000);