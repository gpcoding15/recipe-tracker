const recipes = [];

const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    ratings: [4, 5, 5, 5],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: "",
    averageRating: null
};

const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    ratings: [4,5,5,5],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: "",
    averageRating: null
};

const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

recipes.push(recipe1, recipe2, recipe3);

const getAverageRating = ratingsArr => {
    let average = 0; 
    for(let i = 0;  i < ratingsArr.length; i++) {
        average = average + ratingsArr[i]
    }
    return average / ratingsArr.length
};

const getTotalIngredients = ingredients => {
    return ingredients.length
};

const getDifficultyLevel = cookingTime => {
    if(cookingTime <= 30) return "easy"
    if (cookingTime <= 60) return "medium"
    return "hard"
}

recipe1.averageRating = getAverageRating(recipe1.ratings);
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);


recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);


module.exports = { getAverageRating, getTotalIngredients, getDifficultyLevel };
