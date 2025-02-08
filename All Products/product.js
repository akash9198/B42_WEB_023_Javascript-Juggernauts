// Sample Product Data
const products = [
    { id: 1, name: "Lakme Unreal Blur Perfect Face Primer", category: "Makeup", brand: "Lakme", price: 450, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/0/0060d708901030561924-new_1.jpg" },
    { id: 2, name: "Smashbox The Original Photo Finish Smooth & Blur Primer", category: "Makeup", brand: "Nykaa", price: 2920, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/b/4bb8800607710004733_1.jpg" },
    { id: 3, name: "Nykaa Cosmetics Prep Me Up! Face Primer", category: "Makeup", brand: "Nykaa", price: 340, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/2/f2fe1958904245706623-az_1.jpg" },
    { id: 4, name: "Maybelline New York Fit Me Primer, Oil free and Non Comedoge", category: "Skincare", brand: "Maybelline", price: 433, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/3/a398c60MAYBE00000026-newadd_1.jpg" },
    { id: 5, name: "e.l.f. Cosmetics Power Grip Primer", category: "Makeup", brand: "E.L.F", price: 1105, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/b/6bab12fELFCO00000600_01.jpg" },
    { id: 6, name: "Nykaa Cosmetics Superlight Blur Peptide Primer", category: "Makeup", brand: "Nykaa", price: 639, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/7/37e5076NYKAC00002696_1.jpg" },
    { id: 7, name: "Lakme Sun Expert SPF50 PA+++ Face Primer + Sunscreen", category: "Skincare", brand: "Lakme", price: 454, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/d/5d0f46627912_H1-8901030533181.jpg" },
    { id: 8, name: "e.l.f. Cosmetics Power Grip + Niacinamide", category: "Makeup", brand: "E.L.F", price: 1105, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/4/a4bed56ELFCO00000857_1.jpg"},
    { id: 9, name: "e.l.f. Cosmetics Poreless Putty Primer - Universal Sheer", category: "Primer", brand: "E.L.F", price: 1063, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/0/609332859128.jpg"},
    { id: 10, name: "Lakme 9 To 5 Primer + Matte Perfect Cover Foundation C100", category: "Makeup", brand: "Lakme", price: 809, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/d/fd481c9LAKME00000682_1.jpg" },
    { id: 11, name: "NYX Professional Makeup Plump Right Back Plumping Serum +", category: "Makeup", brand: "Nykaa", price: 1499, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/5/f507df0800897129965_1.jpg" },
    { id: 12, name: "NYX Professional Makeup The Marshmellow", category: "Makeup", brand: "Nykaa", price: 1499, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/2/123330eNYXPR00000069_1.jpg" },
    { id: 13, name: "Maybelline New York Fit Me Foundation 220 Natural Beige +", category: "Foundation", brand: "Maybelline", price: 761, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/5/e59cb8bMAYBE00000470_1.jpg" },
    { id: 14, name: "Maybelline New York Prime Your Base - Setting Spray + Primer", category: "Primer", brand: "Maybelline", price: 933, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/9/8/98dd974MAYBE00000315_1.jpg" },
    { id: 15, name: "LAURA MERCIER Pure Canvas Primer Blurring", category: "Primer", brand: "LAURA MERCIER", price: 1430, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/4/84b0a68736150179692_1.jpg" },
    { id: 16, name: "LAURA MERCIER Pure Canvas Power Primer Supercharged", category: "Primer", brand: "LAURA MERCIER", price: 3120, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/4/84b0a68736150179487_1.jpg" },
    { id: 17, name: "LAURA MERCIER Pure Canvas Blurring Primer", category: "Makeup", brand: "LAURA MERCIER", price: 3900, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/7/c797931194250067545_1.jpg"},
    { id: 18, name: "NYX Professional Makeup The Marshmellow", category: "Primer", brand: "LAURA MERCIER", price: 1499, image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/2/123330eNYXPR00000069_1.jpg"},
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
