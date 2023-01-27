const cocktailName = document.getElementById("name"
)
const cocktailImage = document.getElementById("imageUrl"
)
const cocktailPrep = document.getElementById("prep")
const cocktailIngredients = document.getElementById("ingredients")
const cocktailInfo = document.getElementById("info")
const url = "http://localhost:3000/cocktails"
const cocktails = document.getElementById("cocktails")

const form  = document.querySelector("#cocktail-form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const cocktails = e.target.title.value
    const ingredients = e.target.ingredients.value
    const imageUrl = e.target.imageUrl.value
    const profile = e.target.profile.value
    const prep = e.target.prep.value
    const newCocktail = {
        name: cocktails,
        ingredients: ingredients,
        profile: profile,
        image: imageUrl,
        info: prep

    }
    
    renderCocktail(newCocktail)

})



fetch(url)
    .then(response => response.json())
    .then((cocktails) => cocktails.forEach(renderCocktail))
    //.then((data) => console.log(data))
    
    
function renderCocktail(cocktail){
    
    const li = document.createElement("li");
    li.className = "cocktail-li";

    const img = document.createElement("img");
    img.src = cocktail.image;
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

    const like = document.createElement("button");
    like.textContent = "❤️"
    li.appendChild(like);
    like.id = cocktail.id;
    like.addEventListener("click", (e) => {
        fetch("http://localhost:3000/liked", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(cocktail)
})
.then(response => response.json())
.then(response => renderedLiked(response))
    })
    
    

  
    const cocktailInfo = document.getElementById("cocktail-list");
    cocktailInfo.appendChild(li);

    //button.addEventListener("submit", )

}
function getLiked(){

fetch("http://localhost:3000/liked")
.then(response => response.json())
.then(data => data.forEach((liked)=>{
    renderedLiked(liked)
}))
}
const favorites = document.querySelector(".fav-list");
function renderedLiked(cocktail){
     
        const favLi = document.createElement('li')
        
    const favName = document.createElement('p')
    
    const favProfile = document.createElement('p')
    const favImg = document.createElement('img')
    const favInformation = document.createElement('p')
    const deleteButton = document.createElement('button')
    deleteButton.textContent = "trash"
    deleteButton.id = cocktail.id

    favName.textContent = cocktail.name;
    favProfile.textContent = cocktail.profile;
    favImg.src = cocktail.image;
    favInformation.textContent = cocktail.info

    favLi.append(favName, favProfile, favImg, favInformation, deleteButton)
    favorites.append(favLi)

    deleteButton.addEventListener('click', ()=>{
        fetch(`http://localhost:3000/liked/${deleteButton.id}`, {
            method: 'DELETE'
            
        })
        .then(response => response.json())
        .then(()=> favLi.innerHTML = "")
    })

}
