# Recipe Utilities

A small JavaScript module that provides utility functions for processing recipe data.

The project includes:
- A simple dataset containing three recipes.
- Utility functions to compute derived values:
  - `getAverageRating(ratingsArr)`: Returns the average rating.
  - `getTotalIngredients(ingredientsArr)`: Returns the number of ingredients.
  - `getDifficultyLevel(cookingTime)`: Returns a difficulty level based on cooking time.

These functions are pure and fully covered by Jest unit tests.

---

## Installation

```bash
npm install
npm install --save-dev jest
```

Add the test script in package.json:
{
  "scripts": {
    "test": "jest"
  }
}

## Usage Example
const {
  getAverageRating,
  getTotalIngredients,
  getDifficultyLevel,
} = require("./index");

console.log(getAverageRating([4, 5, 4, 5]));  // 4.5
console.log(getTotalIngredients(["a", "b"])); // 2
console.log(getDifficultyLevel(42));          // "medium"

## Running tests
npm test
