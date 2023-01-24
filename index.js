const cocktailName = document.getElementById("name"
)
const cocktailImage = document.getElementById("image"
)
const cocktailIngredients = document.getElementById("ingredients")
//const cocktailInstructions = document.getElementById("instructions")
const cocktailInfo = document.getElementById("info")
const url = "http://localhost:3000/cocktails"



function renderCocktail(cocktail){
    const li = document.createElement("li")
    li.className = "list-li";

    const img = document.createElement("img");
    img.src = cocktail.image_url;
    img.alt = cocktail.name;
    li.appendChild(img);

    const h3 = document.createElement("h3");
    h3.textContent = cocktail.name;
    li.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = `Ingredients: ${cocktail.ingredients}`;
    li.appendChild(p);

    const button = document.createElement("button");
    button.textContent = "Add to Cocktail List";
    li.appendChild(button);

    

    
};










//////////RANDOMIZER/////////
////Get the button element
//const button = document.getElementById("randomize-button");
//
//// Listen for the button click event
//button.addEventListener("click", () => {
//  // Send a request to the API
//  fetch("http://localhost:3000/cocktails/1")
//    .then((response) => response.json())
//    .then((data) => {
//      // Update the page with the random data
//      document.getElementById("random-result").innerHTML = data.result;
//    })
//    .catch((error) => {
//      console.error("Error:", error);
//    });
//});

///////////SEARCH BY SPIRIT/COCKTAIL/////////
////const searchInput = document.getElementById("search-input");
////const searchBtn = document.getElementById("search-button");
////const resultDiv = document.getElementById("search-result");
////
////searchBtn.addEventListener("click", () => {
////  const searchTerm = searchInput.value;
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