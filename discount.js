//WAP to change the price of products after applying 10% of discount

let price = [250,300,450,550,600];
let discount;

//for-in-loop will access the index of array named as price
for(let i in price) {
    discount = 10/100 * price[i];
    price[i] = price[i] - discount;
}

//displaying the price after applying 10% of discount
console.log(price);

