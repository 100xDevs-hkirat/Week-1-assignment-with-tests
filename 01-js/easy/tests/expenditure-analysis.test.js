const calculateTotalSpentByCategory = require("../expenditure-analysis");

describe("calculateTotalSpentByCategory", () => {
  test("calculateTotalSpentByCategory functions exists", () => {
    expect(typeof calculateTotalSpentByCategory).toEqual("function");
  });

  test("returns the correct total spent for a single transaction", () => {
    const items = [
      {
        timestamp: new Date().toISOString(),
        itemName: "Pizza",
        category: "Food",
        price: 100,
      },
      {
        timestamp: new Date().toISOString(),
        itemName: "Burger",
        category: "Food",
        price: 300,
      },
      {
        timestamp: new Date().toISOString(),
        itemName: "cords",
        category: "Clothes",
        price: 3000,
      },
    ];

    const result = calculateTotalSpentByCategory(items);
    console.log(result);
    expect(result).toEqual([
      {
        category: "Food",
        totalSpent: 400,
      },
      {
        category: "Clothes",
        totalSpent: 3000,
      },
    ]);
  });
});
