export async function getAllCategory() {
    const categoryRes = await fetch("https://fakestoreapi.in/api/products/category");
    return categoryRes.json();
} 

export async function getAllProduct() {
    const productRes = await fetch("https://fakestoreapi.in/api/products?limit=150");
    return productRes.json();
} 

export async function getSingleProduct(id:string) {
const singleProductRes = await fetch(`https://fakestoreapi.in/api/products/${id}`);
return singleProductRes.json();
}

export async function getProductBtCategory(category: string) {
    const productByCategory = await fetch(`https://fakestoreapi.in/api/products/category?type=${category}`);
    
    if (!productByCategory.ok) {
        throw new Error('Network response was not ok');
    }
    
    return productByCategory.json();
}