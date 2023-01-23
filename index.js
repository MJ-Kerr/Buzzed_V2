///////LOGIN PAGE////////
// Get the form element
//const loginForm = document.getElementById("login-form");
//
//// Listen for the form submission event
//loginForm.addEventListener("submit", (event) => {
//  // Prevent the default form submission behavior
//  event.preventDefault();
//
//  // Collect the form data
//  const formData = new FormData(loginForm);
//  const username = formData.get("username");
//  const password = formData.get("password");
//
//  // Send a request to the server to check the credentials
//  fetch("/login", {
//    method: "POST",
//    body: formData,
//  })
//    .then((response) => response.json())
//    .then((data) => {
//      if (data.status === "success") {
//        // Redirect the user to a new page or show a success message
//        window.location.href = "/home";
//      } else {
//        // Show an error message to the user
//        alert("Invalid username or password");
//      }
//    })
//    .catch((error) => {
//      console.error("Error:", error);
//    });
//});
////////RANDOMIZER/////////
// Get the button element
//const button = document.getElementById("randomize-button");
//
//// Listen for the button click event
//button.addEventListener("click", () => {
//  // Send a request to the API
//  fetch("https://api.example.com/randomize")
//    .then((response) => response.json())
//    .then((data) => {
//      // Update the page with the random data
//      document.getElementById("random-result").innerHTML = data.result;
//    })
//    .catch((error) => {
//      console.error("Error:", error);
//    });
//});
//
/////////SEARCH BY SPIRIT/COCKTAIL/////////
//const searchInput = document.getElementById("search-input");
//const searchBtn = document.getElementById("search-button");
//const resultDiv = document.getElementById("search-result");
//
//searchBtn.addEventListener("click", () => {
//  const searchTerm = searchInput.value;
//  
//  if(searchTerm === ""){
//    alert("Please enter a valid search term");
//    return;
//  }
//
//  fetch(`https://api.example.com/search?q=${searchTerm}`)
//    .then(response => response.json())
//    .then(data => {
//      if(data.results.length === 0){
//        resultDiv.innerHTML = "No results found";
//      }else{
//        let results = "";
//        data.results.forEach(result => {
//          results += `<div>${result.title}</div>`;
//        });
//        resultDiv.innerHTML = results;
//      }
//    })
//    .catch(error => {
//      console.error("Error:", error);
//    });
//});
//