//1
function addToTotal(currentTotal,num){
     return total=currentTotal+num
}
const newTotal=addToTotal(10, 5);
console.log(newTotal);
//2
const array=[85,90,78,92,88];
const avg=array.reduce((a,b)=> a + b,0)/array.length;
console.log(avg);
//3
//const applyDiscount = rate => price => price - (price * rate);
//const apply10 = applyDiscount(0.1);
//console.log(apply10(200));
function applyDiscount(rate, price) {
return price- (price * rate);
}
const sayRate=applyDiscount.bind(null,0.1);
console.log(sayRate(200));
//4
const products=[
    {name:"book",price:200},
    {name:"pen",price:30},
    {name:"laptop",price:50000},
    {name:"bag",price:700}
];
const finaal=products
.filter(pr=>pr.price>500)
.map(pr=>pr.price-(pr.price*0.1))
.reduce((a,b) => a + b,0);
console.log(finaal);