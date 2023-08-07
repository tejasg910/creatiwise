const cartContainer = document.querySelector("#cart");
const listContainer = document.querySelector(
  ".second__nav__container .cart__container .listing"
);
cartContainer.addEventListener("mouseenter", () => {
  listContainer.classList.remove("hidden");
});

cartContainer.addEventListener("mouseleave", () => {
  listContainer.classList.add("hidden");
});
