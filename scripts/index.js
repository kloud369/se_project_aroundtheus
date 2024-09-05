const initialCards = [
  {
    name: "Malibu Creek State Park",
    link: "./images/malibu_creek.jpg",
  },
  {
    name: "Joshua Tree",
    link: "./images/joshua_tree.jpg",
  },
  {
    name: "Mt. Evans Wilderness Area",
    link: "./images/evans_wilderness.jpg",
  },
  {
    name: "Yosemite Valley",
    link: "./images/yosemite.jpg",
  },
  {
    name: "Salt Flats, Bonneville",
    link: "./images/salt_flats.jpg",
  },
  {
    name: "Angel's Landing",
    link: "./images/angels_landing.jpg",
  },
];

console.log(initialCards);

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profileEditModal");

profileEditButton.addEventListener("click", () => {
  profileEditModal.classList.add("modal_opened");
});

const profileEditCloseButton = document.querySelector("#modal-close-button");

profileEditCloseButton.addEventListener("click", () => {
  profileEditModal.classList.remove("modal_opened");
});
