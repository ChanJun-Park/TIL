var a = [1,3,5,7,10];
var result = a.some(function(item, index, array){
    return (item % 2) == 0;
});
console.log(result);    // true