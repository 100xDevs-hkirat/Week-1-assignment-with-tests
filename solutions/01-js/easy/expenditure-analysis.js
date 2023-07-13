function calculateTotalSpentByCategory(transactions) {
  const totalSpentByCategory = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;

    if (category in totalSpentByCategory) {
      totalSpentByCategory[category] += price;
    } else {
      totalSpentByCategory[category] = price;
    }
  }

  const result = [];

  for (const category in totalSpentByCategory) {
    result.push({ category, totalSpent: totalSpentByCategory[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
