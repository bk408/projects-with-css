const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    console.error(error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});

function displayProducts(data) {
  // Initialize product list
  const productList = document.getElementById("product-list");

  const productElement = data.map((item) => {
    // div created for products
    const productDiv = document.createElement("div");
    productDiv.className = "product-container";

    const productImage = document.createElement("img");
    productImage.className = "product-image";
    productImage.src = item.image;
    productDiv.appendChild(productImage);

    const productTitle = document.createElement("h3");
    productTitle.className = "product-title";
    productTitle.textContent = item.title;
    productDiv.appendChild(productTitle);

    const productPrice = document.createElement("p");
    productPrice.className = "product-price";
    productPrice.textContent = item.price;
    productDiv.appendChild(productPrice);

    return productDiv;
  });
  productElement.forEach((elem) => productList.appendChild(elem));
}
