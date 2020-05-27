// Toggle menu mobile
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

// modal on img
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var x = document.getElementsByClassName("interieur-fotos");
var img = document.getElementsByClassName("pic");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  console.log(this.src);
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
