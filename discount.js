//WAP to change the price of products after applying 10% of discount

let price = [250,300,450,550,600];
let discount;

for(let i of price) {
    discount = 10/100 * i;
    i = i - discount;
    console.log(i);
}

