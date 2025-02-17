


function createRecipeCard(recipeData) {
    const searchResults = document.querySelector('.search-results');

    console.log("recipe data inside card : ", recipeData);

    const newCard = document.createElement("div");
    newCard.setAttribute("class", "card");

    const newH2Name = document.createElement("p");
    newH2Name.innerText = recipeData["strMeal"];

    const newParID = document.createElement("p");
    newParID.innerHTML = recipeData["idMeal"];

    const newParCat = document.createElement("p");
    newParCat.innerHTML = recipeData["strCategory"];

    const newParArea = document.createElement("p");
    newParArea.innerHTML = recipeData["strArea"];

    const newThumbnail = document.createElement("img");
    newThumbnail.setAttribute("src", recipeData["strMealThumb"]);

    newCard.appendChild(newH2Name);
    newCard.appendChild(newThumbnail);
    newCard.appendChild(newParID);
    newCard.appendChild(newParCat);
    newCard.appendChild(newParArea);

    searchResults.appendChild(newCard);

}