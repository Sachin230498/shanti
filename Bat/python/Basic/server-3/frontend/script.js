const apiUrl = "http://localhost:5000"; // Change this to your API URL

// Signup function
async function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const response = await fetch(`${apiUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const result = await response.json();
    alert(result.message); // Notify the user
  } else {
    alert("Signup failed: " + response.statusText);
  }
}

// Login function
async function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const result = await response.json();
    alert("Login successful! Token: " + result.token); // Store this token for further requests
    localStorage.setItem("token", result.token); // Store token in local storage
  } else {
    alert("Login failed: " + response.statusText);
  }
}

// Fetch all products
async function fetchProducts() {
  const token = localStorage.getItem("token"); // Retrieve token from local storage
  const response = await fetch(`${apiUrl}/products`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const products = await response.json();
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = `Product ID: ${product._id}, Name: ${product.name}`;
      productList.appendChild(li);
    });
  } else {
    console.error("Failed to fetch products:", response.statusText);
  }
}

// Function to fetch a single product by ID
async function getProduct() {
  const productId = document.getElementById("product-id").value;
  const token = localStorage.getItem("token"); // Retrieve token from local storage
  const response = await fetch(`${apiUrl}/products/${productId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const productDetails = document.getElementById("product-details");
  productDetails.innerHTML = "";

  if (response.ok) {
    const product = await response.json();
    productDetails.innerHTML = `<strong>Product ID:</strong> ${product._id} <strong>Name:</strong> ${product.name}`;
  } else {
    productDetails.innerHTML = "Product not found!";
  }
}

// Fetch products when the page loads (after login)
document.addEventListener("DOMContentLoaded", fetchProducts);
