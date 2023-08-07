const carauselButtons = document.querySelectorAll(
  ".carausel__seciton .cr__btn__container .cr__btn"
);

const carauselCardContainer = document.querySelector(
  ".carausel__card__container .cards"
);

let position = 0;
const cardWidth = 200;
carauselButtons.forEach((btn, index) => {
  btn.classList.remove("active__button");
  btn.classList.add("inactive__button");

  btn.addEventListener("click", (e) => {
    carauselButtons.forEach((button) => {
      button.classList.remove("active__button");
      button.classList.add("inactive__button");
    });

    console.log("button clicked", e);
    btn.classList.remove("inactive__button");

    btn.classList.add("active__button");

    position = index * cardWidth; // Calculate the new position based on card width

    carauselCardContainer.scrollTo({
      left: position,
      behavior: "smooth", // Add smooth scrolling effect (optional)
    });
    // console.log(position);
  });
});

const leftScrollButton = document.querySelector(
  ".carausel__card__container  .fa-chevron-left"
);

leftScrollButton.addEventListener("click", () => {
  console.log("buttonclick");
  if (position > 0) {
    position = position - cardWidth;
    carauselCardContainer.scrollTo({
      left: position,
      behavior: "smooth", // Add smooth scrolling effect (optional)
    });
  }
});
const rightScrollButton = document.querySelector(
  ".carausel__card__container  .fa-chevron-right"
);

rightScrollButton.addEventListener("click", () => {
  console.log("buttonclick");
  if (position < 1400) {
    position = position + cardWidth;
    carauselCardContainer.scrollTo({
      left: position,
      behavior: "smooth", // Add smooth scrolling effect (optional)
    });
  }
});
