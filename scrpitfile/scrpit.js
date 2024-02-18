document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    var yourGuidesBtn = document.getElementById('yourGuidesBtn');
    var recommendBtn = document.getElementById('recommendBtn');
    var mainContent = document.querySelector('main');
    var recommendContainer = document.getElementById('recommend-container');

    yourGuidesBtn.addEventListener('click', function () {
        mainContent.style.display = "block";
        recommendContainer.style.display = "none";
    });

    recommendBtn.addEventListener('click', function () {
        mainContent.style.display = "none";
        recommendContainer.style.display = "block";
    });
});

function openLink() {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLScU_U5bzzwiDoC1EHL9OL-ab7I2b_oYWuHijSvGra08ktNamg/viewform?usp=pp_url", "_blank");
}
function simulateLink() {
  window.location.href = "index.html";
}
function goToMessagePagee() {
  window.location.href = "home.html";
}
function goToMessagePage() {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSdUsJGfz9l0wljjmmEhsbRB_V6YWpzd5ginxu42BMeYb4HxWw/viewform?usp=sf_link");
}