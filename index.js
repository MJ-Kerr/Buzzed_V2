const cocktailName = document.getElementById("name"
)
const cocktailImage = document.getElementById("imageUrl"
)
const cocktailPrep = document.getElementById("prep")
const cocktailIngredients = document.getElementById("ingredients")
const cocktailInfo = document.getElementById("info")
const url = "http://localhost:3000/cocktails"
const cocktails = document.getElementById("cocktails")

fetch(url)
    .then(response => response.json())
    .then((cocktails) => cocktails.forEach(renderCocktail))
    //.then((data) => console.log(data))
    
    
function renderCocktail(cocktail){
    
    const li = document.createElement("li");
    li.className = "cocktail-li";

    const img = document.createElement("img");
    img.src = cocktail.imageUrl;
    img.alt = cocktail.name;
    img.title = cocktail.name;
    li.appendChild(img);

    const main = document.createElement("div");
    main.className = "form-container";
    main.textContent = cocktail.name;
    li.appendChild(main);

    const p = document.createElement("p");
    p.textContent = ` Profile: ${cocktail.profile}`;
    li.appendChild(p);
    const p1 = document.createElement("p");
    p1.textContent = `Info: ${cocktail.info}`;
    li.appendChild(p1);
    const p2 = document.createElement("p");
    p2.textContent = `Ingredients: ${cocktail.ingredients}`;
    li.appendChild(p2);
    const p3 = document.createElement("p");
    p3.textContent = `Prep: ${cocktail.prep}`;
    li.appendChild(p3);
    
    
    

    const button = document.createElement("button");
    button.textContent = "Add to Cocktail List";
    li.appendChild(button);

    const cocktailInfo = document.getElementById("cocktail-list");
    cocktailInfo.appendChild(li);

    //button.addEventListener("submit", )

}
let currentCocktail = [0];

function navigateList(direction) {
    // Check if direction is 'next' or 'prev'
    if (direction === 'next') {
        // Check if currentCocktail is at the end of the list
        if (currentCocktail === cocktails.length - 1) {
            console.log("You are already at the end of the list.");
        } else {
            currentCocktail++;
            displayCocktail();
        }
    } else if (direction === 'prev') {
        // Check if currentCocktail is at the beginning of the list
        if (currentCocktail === 0) {
            console.log("You are already at the beginning of the list.");
        } else {
            currentCocktail--;
            displayCocktail();
        }
    }
}

function displayCocktail() {
    cocktailName.textContent = cocktails[currentCocktail].name;
    cocktailImage.src = cocktails[currentCocktail].imageUrl;
    cocktailPrep.textContent = cocktails[currentCocktail].prep;
    cocktailIngredients.textContent = cocktails[currentCocktail].ingredients;
    cocktailInfo.textContent = cocktails[currentCocktail].info;
}

// Add event listeners to the 'next' and 'prev' buttons
//document.getElementById("next-btn").addEventListener("click", () => navigateList("next"));
//document.getElementById("prev-btn").addEventListener("click", () => navigateList("prev"));


// Get the button by its ID
//const button = document.getElementById("randomize-button");
//
//// Add an event listener to the button to trigger the randomizer function on click
//button.addEventListener("click", getRandomItem);
//
//function getRandomItem() {
//  // Make a GET request to the local API
//  fetch('url')
//    .then(response => response.json())
//    .then((data) => console.log(data))
//    .then(data => {
//      // Get the length of the array
//      let length = data.length;
//      // Generate a random index
//      let randomIndex = Math.floor(Math.random() * length);
//      // Get the random item from the array
//      let randomItem = data[randomIndex];
//      // Do something with the random item
//      console.log(randomItem);
//    })
//    .catch(error => console.log(error));
//}
//
//


///////////RANDOMIZER/////////
//////Get the button element
////const button = document.getElementById("randomize-button");
////
////// Listen for the button click event
////button.addEventListener("click", () => {
////  // Send a request to the API
////  fetch("http://localhost:3000/cocktails/1")
////    .then((response) => response.json())
////    .then((data) => {
////      // Update the page with the random data
////      document.getElementById("random-result").innerHTML = data.result;
////    })
////    .catch((error) => {
////      console.error("Error:", error);
////    });
////});
//
/////////////SEARCH BY SPIRIT/COCKTAIL/////////
//////const searchInput = document.getElementById("search-input");
//////const searchBtn = document.getElementById("search-button");
//////const resultDiv = document.getElementById("search-result");
//////
//////searchBtn.addEventListener("click", () => {
//////  const searchTerm = searchInput.value;
////  
////  if(searchTerm === ""){
////    alert("Please enter a valid search term");
////    return;
////  }
////
////  fetch(`https://api.example.com/search?q=${searchTerm}`)
////    .then(response => response.json())
////    .then(data => {
////      if(data.results.length === 0){
////        resultDiv.innerHTML = "No results found";
////      }else{
////        let results = "";
////        data.results.forEach(result => {
////          results += `<div>${result.title}</div>`;
////        });
////        resultDiv.innerHTML = results;
////      }
////    })
////    .catch(error => {
////      console.error("Error:", error);
////    });
////});
////


// Create a form element
const form = document.createElement("form");

// Create input elements
const inputName = document.createElement("input");
const inputImage = document.createElement("input");
const inputIngredients = document.createElement("input");
const inputProfile = document.createElement("input");
const inputInfo = document.createElement("input");
const inputPrep = document.createElement("input");

// Add attributes to the input elements
inputName.setAttribute("type", "text");
inputName.setAttribute("placeholder", "Name");
inputImage.setAttribute("type", "file");
inputImage.setAttribute("placeholder", "Image");
inputIngredients.setAttribute("type", "text");
inputIngredients.setAttribute("placeholder", "Ingredients");
inputProfile.setAttribute("type", "text");
inputProfile.setAttribute("placeholder", "Profile");
inputInfo.setAttribute("type", "text");
inputInfo.setAttribute("placeholder", "Info");
inputPrep.setAttribute("type", "text");
inputPrep.setAttribute("placeholder", "Prep");

// Add the input elements to the form
form.appendChild(inputName);
form.appendChild(inputImage);
form.appendChild(inputIngredients);
form.appendChild(inputProfile);
form.appendChild(inputInfo);
form.appendChild(inputPrep);

// Create a submit button
const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");

// Add the submit button to the form
form.appendChild(submitButton);

// Add an event listener to the form to handle the submit event
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // Get the values of the input elements
  const name = inputName.value;
  const image = inputImage.value;
  const ingredients = inputIngredients.value;
  const profile = inputProfile.value;
  const info = inputInfo.value;
  const prep = inputPrep.value;
  console.log("Name: " + name);
  console.log("Image: " + image);
  console.log("Ingredients: " + ingredients);
  console.log("Profile: " + profile);
  console.log("Info: " + info);
  console.log("Prep: " + prep);
});

// Append the form to the body of the page
document.body.appendChild(form);
    //function renderCocktail(cocktail){
//        const li = document.createElement("li")
//        li.className = "list-li";
//
//        const img = document.createElement("img");
//        img.src = cocktail.image_url;
//        img.alt = cocktail.name;
//        li.appendChild(img);
//
//        const h3 = document.createElement("h3");
//        h3.textContent = cocktail.name;
//        li.appendChild(h3);
//
//        const p = document.createElement("p");
//        p.textContent = `Ingredients: ${cocktail.ingredients}`;
//        li.appendChild(p);
//
//        const button = document.createElement("button");
//        button.textContent = "Add to Cocktail List";
//        li.appendChild(button);
//
        //cocktailInfo.appendChild(li);

   // const button = document.createElement("button");
    //button.textContent = "Add to Cocktail List";
    //li.appendChild(button);

    
//};


    
//};

//// Get the button by its ID
//const button = document.getElementById("randomize-button");
//
//// Add an event listener to the button to trigger the randomizer function on click
//button.addEventListener("click", getRandomItem);
//
//function getRandomItem() {
//  // Make a GET request to the local API
//  fetch('url')
//    .then(response => response.json())
//    .then((data) => console.log(data))
//    .then(data => {
//      // Get the length of the array
//      let length = data.length;
//      // Generate a random index
//      let randomIndex = Math.floor(Math.random() * length);
//      // Get the random item from the array
//      let randomItem = data[randomIndex];
//      // Do something with the random item
//      console.log(randomItem);
//    })
//    .catch(error => console.log(error));
//}
//
//
//
//
//




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