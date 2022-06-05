const BASE_URL = "http://localhost:3000";

// Populates users list
async function userListing () {
  const users = await axios.get(`${BASE_URL}/users`);

  for (let each of users.data) {
    $("#user-list").append($("<li>", {text: `${each.firstName} ${each.lastName} - ${each.state}`}));
    }
}

// Submits information to backend and redirects user to admin.html
async function register(e) {
  e.preventDefault();
    const email = $("#input-email").val()
    const firstName = $("#input-firstName").val()
    const lastName = $("#input-lastName").val()
    const users = await axios.post(
      `${BASE_URL}/users`,
      {email, firstName, lastName});
    window.location.href = "/admin.html"
}

// Called for admin.html
if ($("#user-list").length){
  userListing();
}

// event listener called for signup.html
if ($("#signup-form").length){
  $("#signup-form").submit(register);
}