/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


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
    timestamp: 1656076800000,
    price: 20,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 15,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 4,
    timestamp: 1656076800000,
    price: 30,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 5,
    timestamp: 1656076800000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
  {
    id: 6,
    timestamp: 1656076800000,
    price: 12,
    category: 'Electronics',
    itemName: 'Charger',
  },
  {
    id: 7,
    timestamp: 1656076800000,
    price: 18,
    category: 'Food',
    itemName: 'Salad',
  },
  {
    id: 8,
    timestamp: 1656076800000,
    price: 40,
    category: 'Clothing',
    itemName: 'Dress',
  },
  {
    id: 9,
    timestamp: 1656076800000,
    price: 50,
    category: 'Electronics',
    itemName: 'Smartphone',
  },
  {
    id: 10,
    timestamp: 1656076800000,
    price: 22,
    category: 'Food',
    itemName: 'Ice Cream',
  }
];





function calculateTotalSpentByCategory(transactions) {
 let cat_total_list=transactions.reduce((acc,cur)=>{
  let {category,price} = cur
  acc[category]=(acc[category] || 0)+price;
  return acc;
 },{})

 res=[]

 for (const cat in cat_total_list){
  let cur_dict={}
  cur_dict["category"]=cat
  cur_dict["totalSpent"]=cat_total_list[cat]
  res.push(cur_dict)

 }

 return res;
}



module.exports = calculateTotalSpentByCategory;
