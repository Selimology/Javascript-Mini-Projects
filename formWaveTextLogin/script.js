const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    //split it from string into seperate letters array ["E","X","A","M","P","L"E"]
    .split("")
    //which then map that into span array
    .map(
      (letter, index) => `<span
    style="transition-delay:${index * 100}ms">${letter}</span>`
    )
    //and then turn it back to string
    .join("");
});
