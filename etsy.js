//Average of all prices - use the reduce function to find a total of all prices and then divide it by the number of prices there are in the list.

var result = getAveragePrice(items);

function getAveragePrice(items) {
    var total = items.reduce(function (prev, next) {
        return {price: prev.price + next.price};
    }, {price: 0});

    console.log(total);

    var averagePrice = Math.round((total.price / items.length) * 100) / 100;

    console.log(averagePrice);

    return averagePrice;
}
 
 console.log('The average price is' + ' $' + result);

//  <------- or use forEach  --------> //
var total = 0;
items.forEach(getPrices);
function getPrices(items) {
    total += items.price;
}
console.log('The average price is' + ' ' + '$' + Math.round((total / items.length) * 100) / 100);

// //An array of items that cost between $14.00 and $18.00


var matches = items.filter(function(item) 
{
    return (item.price >= 14.00 && item.price <= 18.00);
});

console.log(matches);



// // GBP currency code, print name and price
var searchTerm = 'GBP';
var gbpCurrency = items.filter(function(item) {
    return item.currency_code.includes(searchTerm);
});

console.log(gbpCurrency);

// //use .filter to pull out price matches containing search term gbp.


// //find items made of wood
// //use .filter to pull out item matches containing search term wood.

var term = 'wood';
var itemsContainWood = items.filter(function(item) {
    return item.description.includes(term);
});

console.log(itemsContainWood);


// //array of items made of 8 or more materials

var eightOrMore = items.filter(function(item) 
{
    return (item.materials.length >= [8]);
});

console.log(eightOrMore);


// //how many items made by each seller 

var madeIt = 'i_did';
var createdBy = items.filter(function(item) {
    return item.who_made.includes(madeIt);
});

console.log(createdBy);






