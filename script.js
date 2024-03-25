document.addEventListener("DOMContentLoaded", function() {
    var galleryImages = document.querySelectorAll(".gallery-img");
    galleryImages.forEach(function(img) {
        img.addEventListener("click", function(event) {
            event.stopPropagation(); // Tıklama olayının diğer elemanlara yayılmasını engellemek için

            var popupContent = img.dataset.popup;
            showPopup(img, popupContent);

            // Dışarıya tıklandığında pop-up'ı kapat
            document.addEventListener("click", closePopup);
        });
    });
});

function showPopup(img, content) {
    var popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = content;

    // Önce mevcut pop-up'ları kaldıralım
    var existingPopups = document.querySelectorAll(".popup");
    existingPopups.forEach(function(existingPopup) {
        existingPopup.parentNode.removeChild(existingPopup);
    });

    document.body.appendChild(popup);

    var rect = img.getBoundingClientRect();
    popup.style.top = (rect.top + window.scrollY) + "px";
    popup.style.left = rect.left + "px";
}

function closePopup(event) {
    var popups = document.querySelectorAll(".popup");
    popups.forEach(function(popup) {
        if (!popup.contains(event.target)) {
            popup.parentNode.removeChild(popup);
            document.removeEventListener("click", closePopup); // Event listener'ı kaldır
        }
    });
}


// $('.navbar-toggler-icon').on('onclick', function() {
//     $('.navbar-collapse').toggleClass('show');
//   });

  /* $('.navbar-toggler').on('click', function() {
    $('.navbar-collapse').toggleClass('show');
  }); */

  document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
  
    navbarToggler.addEventListener("click", function() {
      navbarCollapse.classList.toggle("show");
    });
  });
  
  
  


  





