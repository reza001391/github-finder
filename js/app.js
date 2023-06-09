// Selectors --------------------------------------------------------------
const github = new Github();
const ui = new UI();
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
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
// functions ----------------------------------------------------------------
