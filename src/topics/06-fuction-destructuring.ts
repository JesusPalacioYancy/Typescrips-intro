export interface Product {
    name: string;
    description: string;
    price: number;
}

interface CalculateTotalProductsTax {
    products: Product[];
    tax: number;
}


export function CalculateTotalProducts(values: CalculateTotalProductsTax): number[] {
    let total: number = 0;

    values.products.forEach(product => {
        total += product.price;
    });

    const totalTax: number = total * values.tax;
  
    return [total, totalTax];
};