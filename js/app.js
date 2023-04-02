// Selectors --------------------------------------------------------------
const github = new Github();
const searchUser = document.getElementById("searchUser");

// Event Listeners ---------------------------------------------------------------

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
      } else {
        // Show profile
      }
    });
  } else {
    // Clear profile
  }
});
// functions ----------------------------------------------------------------
