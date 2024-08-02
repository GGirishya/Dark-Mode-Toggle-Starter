/* The following function will run every time the dark mode button is clicked. */

function toggleDarkMode() {
  // access the page body using document.querySelector() and store it as  a variable
  const pageBody= document.querySelector("body");
  // access the dark mode buttom using document.getELementByID() or document.querrySelector() and store is it as a variable
  const button = document.querySelector("#dark-mode-button")

  // add the dark css class to all visual page elements
  pageBody.classList.toggle("dark");
  // IF the page is in dark mode, make the button say "light mode" r else if the page is in light mode, make the button say " dark mode"
  if (pageBody.classList.contains('dark')){
    // then make the button say "mode"
    button.innerText = "🌞 Light Mode";
  }
  // make it light mode if it is in light
  else{
    button.innerText="🌛 Dark Mode";
  }
}

