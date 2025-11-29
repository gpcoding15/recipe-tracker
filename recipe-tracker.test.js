const { getAverageRating, getTotalIngredients, getDifficultyLevel } = require("./recipe-tracker");

describe("recipe-tracker", () => {
    test("it should return average 4.5 when the ratings values are 4,5,4,5", () => {
        const ratings = [4,5,4,5];

        const result = getAverageRating(ratings);

        expect(result).toBe(4.5)
    });

    test("it should return average3 when the ratings values are 3,3", () => {
        const ratings = [3,3];

        const result = getAverageRating(ratings);

        expect(result).toBe(3)
    });

    test("it should return 0 when ingredient list is empty", () => {
        const ingredients = [];

        const result = getTotalIngredients(ingredients);

        expect(result).toBe(0)
    });

    test("it should return 3 when ingredient list is 'banana','cheese' and 'dulce de leche'", () => {
        const ingredients = ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'];

        const result = getTotalIngredients(ingredients);

        expect(result).toBe(4)
    });

    test("it should return 'easy' message when cookingTime is 10" , () => {
        const cookingTime = 10;

        const result = getDifficultyLevel(cookingTime);

        expect(result).toBe("easy")
    });

    test("it should return 'easy' message when cookingTime is 30", () => {
        const cookingTime = 30;

        const result = getDifficultyLevel(cookingTime);

        expect(result).toBe("easy")
    });

    test("it should return 'medium' message when cookingTime is 45", () => {
        const cookingTime = 45;

        const result = getDifficultyLevel(cookingTime);

        expect(result).toBe("medium")
    });

    test("it should return 'medium' message when cookingTime is 60", () => {
        const cookingTime = 60;

        const result = getDifficultyLevel(cookingTime);

        expect(result).toBe("medium")
    });

    test("it should return 'hard' message when cookingTime is 80", () => {
        const cookingTime = 80;

        const result = getDifficultyLevel(cookingTime);

        expect(result).toBe("hard")
    })
});