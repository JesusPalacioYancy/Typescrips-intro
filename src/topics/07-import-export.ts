import {Product, CalculateTotalProducts} from './06-fuction-destructuring'

const tax: number = 0.15;

const products: Product[] = [
    {
        name: "Telefono",
        description: "Xiomi Pro 10",
        price: 400000
    },
    {
        name: "Computadora",
        description: "Intel Core 7",
        price: 1000000
    }
];

const result = CalculateTotalProducts({
    products: products,
    tax: tax,
});


const descriptions = products.map(product => product.description).join(", ");
const names = products.map(product => product.name).join(", ");
    

console.log(`
    categoria: ${names}
    Articulos: ${descriptions}
    Total: ${result[0]}
    Total Tax: ${result[1]}
`);