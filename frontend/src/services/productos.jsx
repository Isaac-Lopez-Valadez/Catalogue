

export async function getProducts (){
    const response = await fetch('http://localhost:5000/api/products');
    const responseData = await response.json();
    return responseData;
}

export default getProducts;
