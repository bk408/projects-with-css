

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json()
        displayProducts(products)
    } catch (error) {
        console.error("Error fetching products", error)
    }
})

function displayProducts(products) {
    const productList = document.getElementById("product-list");

    const productElement = products.map((product) => {
        const productDiv = document.createElement("div")
        productDiv.className = "product"


        const productImage = document.createElement("img");
        productImage.src = product.image
        productDiv.appendChild(productImage)


        const productTitle = document.createElement("div");
        productTitle.className = "product-title";
        productTitle.textContent = product.title;
        productDiv.appendChild(productTitle)


        const productPrice = document.createElement("div");
        productPrice.textContent = product.price;
        productDiv.appendChild(productPrice)

        return productDiv

    })

    productElement.forEach((element) => productList.appendChild(element))
}