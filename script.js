let users = [{ username: "admin", password: "1234" }];
let songRequests = JSON.parse(localStorage.getItem("songRequests")) || [];

// Initialize on page load
window.onload = () => {
  displaySongs();
};

// Login functionality
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("songList").style.display = "block";
    displaySongs();
  } else {
    alert("Falsche Zugangsdaten!");
  }
}

// Logout functionality
function logout() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("songList").style.display = "none";
}

// Toggle login form
function toggleLogin() {
  const loginContainer = document.getElementById("login-container");
  loginContainer.style.display =
    loginContainer.style.display === "block" ? "none" : "block";
}

// Song submission functionality
document.getElementById("songForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const songName = document.getElementById("songName").value;
  const artist = document.getElementById("artist").value;

  songRequests.push({ songName, artist });
  localStorage.setItem("songRequests", JSON.stringify(songRequests));

  document.getElementById("songName").value = "";
  document.getElementById("artist").value = "";

  displaySongs();
});

// Display song requests
function displaySongs() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  songRequests.forEach((request) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${request.songName} - ${request.artist}`;
    list.appendChild(listItem);
  });
}
