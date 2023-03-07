const shoppingCart = [
    { name : 'shoe', price : 1200, quantity : 6},
    { name : 'shirt', price : 1800, quantity : 7},
    { name : 'pant', price : 2200, quantity : 8},
    { name : 'jacket', price : 3800, quantity : 9},
];

function totalCost (products){
    let sum = 0;
    for (let i=0; i<products.length; i++){
        
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum += productTotal;
        console.log(product);
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log('total expense :', expense);