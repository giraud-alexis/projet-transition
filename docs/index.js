document.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    document.body.classList.add("page-transition");

    setTimeout(function () {
      window.location.href = link.href;
    }, 1500); // Attendre la durée de l'animation avant de changer de page
  });
});
//console.log("test");
document.querySelector("a").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#goten").classList.add("active");
  document.querySelector("#trunks").classList.add("active");
});
