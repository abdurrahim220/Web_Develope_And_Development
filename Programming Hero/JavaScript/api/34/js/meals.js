
const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    // console.log(meals);
    // step 1: container element
    const mealContainer = document.getElementById('meals-container');
    mealContainer.innerHTML = '';

    meals.forEach(meal => {
        console.log(meal)
        // step 2:create child for each element
        const mealDiv = document.createElement('div')
        // step 3 set content of the child

        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Launch demo modal
                </button>
            </div>
        </div>
        `;
        // 4 append child
        mealContainer.appendChild(mealDiv)

    });

};

const loadMealDetails = (idMeal) => {
    const url = `www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
        .catch(error => {
            console.log(error)
        })
    // console.log(idMeal)
};

// async await

const loadMealDetail2 = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // const res = await fetch(url)
    // const data= await res.json();
    // displayMealDetails(data.meals[0])

    // error handaling
    try {
        const res = await fetch(url)
        const data = await res.json();
        displayMealDetails(data.meals[0])
    }
    catch (error) {
        console.log(error);
    }
}

const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealDetils = document.getElementById('mealDetailsBody').innerHTML = `
    <img class:"img-fluid" src="${meal.strMealThumb}">
    `;

}

const searchMeals = () => {
    // console.log('btn -click')

    const searchText = document.getElementById('search-field').value;
    // search meals
    console.log(searchText);
    loadMeals(searchText)
}
loadMeals('rice');