/*const var1 = "Code Malayalam. It's wonderful";
const var2 = 'Code Malayalam.It\'s wonderful';
const var3 = `Code Malayalam. 
blaa
blaa
It"s wonderful`;

console.log(var1);
console.log(var2);
console.log(var3);

document.body.innerHTML = `
<div className="item">
    <h4>Product Name</h4>
    <div>Price: 01</div>
</div>
`;

const productName = "Pen";
const price="12 Rs";

const value = `The ${productName} is ${price}`
const msg =`The product is ${price>10 ? 'costly': 'cheap'}`
console.log(value);
console.log(msg)

const products = [
    {
        productName: 'Pen',
        price: 10
    },
    {
        productName: 'book',
        price: 20
    }
];
document.body.innerHTML = products.map((item) => {
    return `
    <div className="item">
    <h4>Product Name</h4>
    <div>Price: 01</div>
    </div>`;
});*/

/*const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.name;
}
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();

const obj = { "limit":10 };
const dbParam = JSON.stringify(obj);
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {

}*/

const products = [
    {
        productName: 'Pen',
        price: 10
    },
    {
        productName: 'Book',
        price: 20
    }
];

document.body.innerHTML = products.map((item) => {
    return `
    <div className="item">
    <h4>${item.productName}</h4>
    <div>Price: ${item.price}</div>
    <div>`;
});





