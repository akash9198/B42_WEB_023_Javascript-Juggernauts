// Sample Product Data
const products = [
    { id: 1, name: "Lakme Unreal Blur Perfect Face Primer", category: "Makeup", brand: "Lakme", price: 499, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/b/4bb8800607710004733_1.jpg" },
    { id: 2, name: "L'Oréal Shampoo", category: "Haircare", brand: "Loreal", price: 349, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/0/0060d708901030561924-new_1.jpg" },
    { id: 3, name: "Maybelline Mascara", category: "Makeup", brand: "Maybelline", price: 699, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/b/6bab12fELFCO00000600_01.jpg" },
    { id: 4, name: "Nykaa Face Wash", category: "Skincare", brand: "Nykaa", price: 299, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/3/a398c60MAYBE00000026-newadd_1.jpg" },
    { id: 5, name: "L'Oréal Conditioner", category: "Haircare", brand: "Loreal", price: 399, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/4/a4bed56KAYBE00000196_1.jpg" },
    { id: 6, name: "Maybelline Lipstick", category: "Makeup", brand: "Maybelline", price: 550, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/3/b35db48RENEE00000365_.jpg" },
    { id: 7, name: "L'Oréal Conditioner", category: "Haircare", brand: "Loreal", price: 399, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/e/8e79020602004057280_1.jpg" },
    { id: 8, name: "Maybelline Lipstick", category: "Makeup", brand: "Maybelline", price: 550, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/3/b35db48RENEE00000365_.jpg" }
];

const productsContainer = document.getElementById("products-container");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const brandFilters = document.querySelectorAll("input[data-filter='brand']");
const searchInput = document.getElementById("searchInput");
const clearFiltersButton = document.getElementById("clearFilters");
const paginationContainer = document.getElementById("pagination");

// Pagination Variables
const productsPerPage = 6;
let currentPage = 1;
let filteredProducts = [...products];

// Function to Display Products with Pagination
function displayPaginatedProducts() {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    displayProducts(paginatedProducts);
    renderPaginationButtons();
}

// Function to Display Products
function displayProducts(filteredProducts) {
    productsContainer.innerHTML = "";

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = "<p>No products found.</p>";
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <button class="add-to-bag" data-id="${product.id}">Add to Bag</button>
        `;

        productsContainer.appendChild(productCard);
    });

    // Add event listeners to "Add to Bag" buttons
    document.querySelectorAll(".add-to-bag").forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.target.getAttribute("data-id");
            redirectToCart(productId);
        });
    });
}

// Function to Redirect to Cart Page
function redirectToCart(productId) {
    window.location.href = `cart.html?productId=${productId}`;
}

// Function to Render Pagination Buttons
function renderPaginationButtons() {
    paginationContainer.innerHTML = "";

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.classList.add("page-btn");
        if (i === currentPage) {
            pageButton.classList.add("active");
        }
        pageButton.addEventListener("click", () => {
            currentPage = i;
            displayPaginatedProducts();
        });
        paginationContainer.appendChild(pageButton);
    }
}

// Function to Filter Products
function filterProducts() {
    let filtered = [...products];

    // Search Filter
    const searchQuery = searchInput.value.toLowerCase();
    if (searchQuery) {
        filtered = filtered.filter(product => product.name.toLowerCase().includes(searchQuery));
    }

    // Category Filter
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== "all") {
        filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Brand Filter
    const selectedBrands = Array.from(brandFilters)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    if (selectedBrands.length > 0) {
        filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }

    // Price Sorting
    const selectedPriceSort = priceFilter.value;
    if (selectedPriceSort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (selectedPriceSort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    // Update Global Filtered Products and Reset to Page 1
    filteredProducts = filtered;
    currentPage = 1;
    displayPaginatedProducts();
}

// Function to Clear Filters
function clearFilters() {
    searchInput.value = "";
    categoryFilter.value = "all";
    priceFilter.value = "default";
    brandFilters.forEach(checkbox => checkbox.checked = false);
    filteredProducts = [...products];
    currentPage = 1;
    displayPaginatedProducts();
}

// Event Listeners for Filters
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
brandFilters.forEach(checkbox => checkbox.addEventListener("change", filterProducts));
clearFiltersButton.addEventListener("click", clearFilters);

// Initial Display of Products
displayPaginatedProducts();
