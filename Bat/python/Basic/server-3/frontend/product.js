const API_URL = "http://localhost:5000/products";
const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "login.html";
}

// Fetch all products
async function fetchProducts() {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const products = await response.json();
  displayProducts(products);
}

// Display products on the page
function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <button onclick="deleteProduct('${product._id}')">Delete</button>
            <button onclick="showUpdateForm('${product._id}', '${product.name}', '${product.description}')">Update</button>
        `;
    productList.appendChild(productDiv);
  });
}

// Show update form
function showUpdateForm(productId, currentName, currentDescription) {
  const updateForm = document.getElementById("update-product");
  updateForm.style.display = "block";
  const updateFormInput = document.getElementById("update-product-form");
  updateFormInput.dataset.productId = productId; // Store the productId
  updateFormInput.elements[0].value = currentName; // Set current name
  updateFormInput.elements[1].value = currentDescription; // Set current description

  console.log(productId,currentName,currentDescription)
}

// Add a new product
document
  .getElementById("add-product-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const description = e.target[1].value;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description }),
    });

    if (response.ok) {
      fetchProducts(); // Refresh the product list
      e.target.reset(); // Reset the form
    } else {
      const data = await response.json();
      alert(data.message);
    }
  });

// Update product
document
  .getElementById("update-product-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const productId = e.target.dataset.productId; // Get the productId from dataset
    const name = e.target[0].value;
    const description = e.target[1].value;

    const response = await fetch(`${API_URL}/${productId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description }),
    });

    if (response.ok) {
      fetchProducts(); // Refresh the product list
      e.target.reset(); // Reset the form
      document.getElementById("update-product").style.display = "none"; // Hide the update form
    } else {
      const data = await response.json();
      alert(data.message);
    }
  });

// Delete product
async function deleteProduct(productId) {
  await fetch(`${API_URL}/${productId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  fetchProducts();
}

// Load products on page load
window.onload = fetchProducts;
