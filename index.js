


fetch("http://localhost:3000/cocktails/1")
    .then(response => response.json())
    .then((data) => (console.log(data)));












////////RANDOMIZER/////////
//Get the button element
const button = document.getElementById("randomize-button");

// Listen for the button click event
button.addEventListener("click", () => {
  // Send a request to the API
  fetch("http://localhost:3000/cocktails")
    .then((response) => response.json())
    .then((data) => {
      // Update the page with the random data
      document.getElementById("random-result").innerHTML = data.result;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

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