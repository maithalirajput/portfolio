window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled"); // Add class when scrolling
    } else {
      navbar.classList.remove("scrolled"); // Remove class when at the top
    }
  });

  function toggleMenu() {
    let menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    let menu = document.getElementById("dropdownMenu");
    let icon = document.querySelector(".menu-icon");

    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.style.display = "none";
    }
});
/*!menu.contains(event.target) → True if the clicked element is outside the menu.
 !icon.contains(event.target) → True if the clicked element is not the menu icon.*/

                         // about page
 let text = "Achievements";
let index = 0;

function type_main_content() {
  const el = document.querySelector("#achieve");
  if (!el) return; // element not found, stop

  if (index < text.length) {
    el.textContent += text.charAt(index);
    index++;
    setTimeout(type_main_content, 100);
  }
}

window.onload = function () {
  setTimeout(type_main_content, 100);
};

  let a = document.querySelector("#read-more-btn");

if (a) {
  a.addEventListener("click", () => {
    let moreContent = document.querySelector("#more-content");
    if (
      moreContent.style.display === "none" ||
      moreContent.style.display === ""
    ) {
      moreContent.style.display = "block";
      a.innerHTML = "Read Less";
    } else {
      moreContent.style.display = "none";
      a.innerHTML = "Read More";
    }
  });
}


  document.querySelector("#about").addEventListener("click", function(e){
    e.preventDefault();
  })
  document.querySelector(".container").scrollIntoView({behavior:"smooth"})
 