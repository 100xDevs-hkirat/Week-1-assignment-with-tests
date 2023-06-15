/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
	const map = new Map();
	let res = [];

	for (let transaction of transactions)
		map.set(transaction.category, (map.get(transaction.category) || 0) + transaction.price);

	for (let [category, totalSpent] of map) res.push({ category, totalSpent });

	return res;
}

module.exports = calculateTotalSpentByCategory;
