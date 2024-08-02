/* The following function will run every time the dark mode button is clicked. */

function toggleDarkMode() {
  // access the page body using document.querySelector() and store it as  a variable
  const pageBody= document.querySelector("body");
  // access the dark mode buttom using document.getELementByID() or document.getElelment byID and store is it as a variable
  const button = document.getElementById("#dark-mode-button")

  // add the dark css class to all visual page elements
  pageBody.classList.toggle("dark");
  // 

}