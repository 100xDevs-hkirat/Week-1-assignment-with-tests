/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

/*
const transactions = [
			{
				id: 1,
				timestamp: 1656076800000,
				price: 10,
				category: 'Food',
				itemName: 'Pizza',
			},
			{
				id: 2,
				timestamp: 1656259600000,
				price: 20,
				category: 'Food',
				itemName: 'Burger',
			},
			{
				id: 3,
				timestamp: 1656019200000,
				price: 15,
				category: 'Clothing',
				itemName: 'T-Shirt',
			},
			{
				id: 4,
				timestamp: 1656364800000,
				price: 30,
				category: 'Electronics',
				itemName: 'Headphones',
			},
			{
				id: 5,
				timestamp: 1656105600000,
				price: 25,
				category: 'Clothing',
				itemName: 'Jeans',
			},
		];

		const result =
			calculateTotalSpentByCategory(transactions);

		expect(result).toEqual([
			{ category: 'Food', totalSpent: 30 },
			{ category: 'Clothing', totalSpent: 40 },
			{ category: 'Electronics', totalSpent: 30 },
		]
*/

function catalog(category, totalSpent) {
  this.category = category;
  this.totalSpent = totalSpent;
}

function calculateTotalSpentByCategory(transactions) {
  dict = new Map();
  for (let i of transactions) {
    dict.set(i.category, 0);
  }
  for (let i of transactions) {
    dict.set(i.category, dict.get(i.category) + i.price);
  }
  result = [];
  for (let iter of dict) {
    a = new catalog(iter[0], iter[1]);
    result.push(a);
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
