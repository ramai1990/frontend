import Dropdown from "../dropdown/Dropdown";
if (
  document.querySelector(
    ".dropdown-checkbox__title",
    ".dropdown-checkbox__list"
  )
) {
  new Dropdown(".dropdown-checkbox__title", ".dropdown-checkbox__list");
}
