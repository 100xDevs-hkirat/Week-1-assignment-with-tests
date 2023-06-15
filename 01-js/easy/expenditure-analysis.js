function calculateTotalSpentByCategory(transactions) {
  let categories = [];

  for (let i = 0; i < transactions.length; i++) {
    if (!categories.includes(transactions[i].category)) {
      categories.push(transactions[i].category);
    }
  }

  let result = [];

  for (let i = 0; i < categories.length; i++) {
    let sum = 0;
    for (let j = 0; j < transactions.length; j++) {
      if (categories[i] === transactions[j].category) {
        sum += transactions[j].price;
      }
    }
    result.push({ category  : categories[i] , totalSpent : sum });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
