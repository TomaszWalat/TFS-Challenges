const apiKey = "https://www.themealdb.com/api/json/v1/1/";

const nameSearch = "search.php?s=";
const firstLetterSearch = "search.php?f=";
const idSearch = "lookup.php?i=";

const randomMeal = "random.php";
const mealCategoriesList = "categories.php";

const categoriesList = "list.php?c=list";
const areaList = "list.php?a=list";
const ingerdientsList = "list.php?i=list";

const ingredientFilter = "filter.php?i=";
const categorieFilter = "filter.php?c=";
const areaFilter = "filter.php?a=";

const searchButton = document.querySelector('.search-button');
const inputElement = document.querySelector('.user-input');
const searchResults = document.querySelector('.search-results');

async function searchForMeal_byID(id) {
    
    let request = apiKey + idSearch + id;

    try {
        const response = await fetch(request);

        if(!response.ok) {
            throw new Error(`Response error: ${response.status}`);
        }

        const result = await response.json();

        console.log("Requested data : ", result);

        return result;

    } catch (error) {
        console.error("Error : ", error);
    }
}

async function searchForMeal_byName(name) {
    
    let request = apiKey + nameSearch + name;

    try {
        const response = await fetch(request);

        if(!response.ok) {
            throw new Error(`Response error: ${response.status}`);
        }

        const result = await response.json();

        console.log("Requested data : ", result);

        return result;

    } catch (error) {
        console.error("Error : ", error);
    }
}

async function searchForMeal() {

    console.log("test");

    const newParagraph = document.createElement("p");

    console.log("user input : ", inputElement.value);

    const result = await searchForMeal_byName(inputElement.value);

    console.log("results on the other side : ", result["meals"]);

    for(const meal of result["meals"]) {
        createRecipeCard(meal);
    }

    //newParagraph.textContent = result;

    //searchResults.appendChild(newParagraph);
}

searchButton.addEventListener("click", searchForMeal);

searchForMeal();