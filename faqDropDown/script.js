const btnToggle = document.querySelectorAll(".faq-toggle");

btnToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    //.toggle means, if it is exists remove it, if it doesn't add it.
    toggle.parentNode.classList.toggle("active");
  });
});
