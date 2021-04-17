const groceries = [
    {item: "milk", price: 5},
    {item: "eggs", price: 8},
    {item: "lemons", price: 13},
    {item: "caviar", price: 25}
]

module.exports = {
    lessThan10: function(){
        groceries.forEach(function(grocery){
            if (grocery.price < 10) {
                console.log(grocery.item);
            }
        })}
}