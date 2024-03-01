const products = [
  { "id": 1, "name": "Makerel", "seller": "SeaFlavor Market", "img": "../assets/topaz_agro_jennifer/Catalogue/mackerel-fish-white-background_1011712-30.avif", "price": 9.99, "category": "seafood" },
  {"id": 2, "name": "Carrot", "seller": "Fresh Fields Harvest", "img": "../assets/topaz_agro_jennifer/Catalogue/carrot.jpg", "price": 9.99, "category": "vegetables"},
  { "id": 3, "name": "Eggs", "seller": "Moo & More Dairy Co.", "img": "../assets/topaz_agro_jennifer/Catalogue/egg-crate-white-background_44074-2251.jpg", "price": 2.99, "category": "dairy" },
  { "id": 4, "name": "Wheat Seeds", "seller": "Legumelight Farms","img": "../assets/topaz_agro_jennifer/Catalogue/wheat seeds.jpg", "price": 5.99, "category": "seeds" },
  { "id": 5, "name": "Pesticide", "seller": "AgroAid Solutions","img": "../assets/topaz_agro_jennifer/Catalogue/pesticides.jpg" , "price": 15.99, "category": "chemicals" },
  { "id": 6, "name": "Tomato Seeds", "seller": "SproutSource Emporium", "img": "../assets/topaz_agro_jennifer/Catalogue/tomato seeds.jpg", "price": 3.99, "category": "seeds" },
  { "id": 7, "name": "Pest Control", "seller": "AgroAdvantage Consultants", "img": "../assets/topaz_agro_jennifer/Catalogue/pest control.avif",  "price": 49.99, "category": "services" },
  { "id": 8, "name": "Phosphorus Fertilizer", "seller": "Fertile Fields Co.", "img": "../assets/topaz_agro_jennifer/Catalogue/phosphate fertilizer.avif",  "price": 29.99, "category": "fertilizers" },
  { "id": 9, "name": "Corn Seeds", "seller": "SeedMaster Co.", "img": "../assets/topaz_agro_jennifer/Catalogue/yellow-corn-seeds.avif", "price": 7.99, "category": "seeds" },
  { "id": 10, "name": "Cinnamon", "seller": "Spice World Inc.", "img": "../assets/topaz_agro_jennifer/Catalogue/cinammon.jpg",  "price": 5.99, "category": "spices" },
  { "id": 11, "name": "Tractor", "seller": "FarmWorks Equipment",  "img": "../assets/topaz_agro_jennifer/Catalogue/farm-tractor.jpg", "price": 5000.00, "category": "equipment" },
  { "id": 12, "name": "Smart Irrigation System", "seller": "AgroTech Solutions", "img": "../assets/topaz_agro_jennifer/Catalogue/smart irrigation system.jpg", "price": 1500.00, "category": "technology" },
  { "id": 13, "name": "Work Boots", "seller": "FarmGear Inc.","img": "../assets/topaz_agro_jennifer/Catalogue/work boots.avif", "price": 79.99, "category": "clothing" },
  { "id": 14, "name": "Apples", "seller": "Fresh Fields Harvest", "img": "../assets/topaz_agro_jennifer/Catalogue/apples.avif", "price": 1.99, "category": "fruits" },
  { "id": 15, "name": "Beef Steak", "seller": "Prime Cuts Butcher", "img": "../assets/topaz_agro_jennifer/Catalogue/beef steak.jpg", "price": 12.99, "category": "meat" },
  { "id": 16, "name": "Consulting Services", "seller": "AgroAdvantage Consultants", "img": "../assets/topaz_agro_jennifer/Catalogue/consulting services.jpg", "price": 200.00, "category": "services" },
  { "id": 17, "name": "Nitrogen Fertilizer", "seller": "AgroAid Solutions", "img": "../assets/topaz_agro_jennifer/Catalogue/nitrogen fertilizer.jpg", "price": 15.99, "category": "fertilizers" },
  { "id": 18, "name": "Lettuce Seedlings", "seller": "Green Thumb Nursery", "img": "../assets/topaz_agro_jennifer/Catalogue/lettuce-seedlings.avif", "price": 4.99, "category": "seeds" },
  { "id": 19, "name": "Oregano", "seller": "Herb Garden Grocers", "img": "../assets/topaz_agro_jennifer/Catalogue/oregano.webp", "price": 3.99, "category": "spices" },
  { "id": 20, "name": "Harvester", "seller": "AgroTech Machinery", "img": "../assets/topaz_agro_jennifer/Catalogue/harvester.webp", "price": 10000.00, "category": "equipment" },
  { "id": 21, "name": "Drone", "seller": "AgroDrone Technologies","img": "../assets/topaz_agro_jennifer/Catalogue/drone.avif", "price": 3000.00, "category": "technology" },
  { "id": 22, "name": "Sun Hat", "seller": "SunSafe Hats", "img": "../assets/topaz_agro_jennifer/Catalogue/sun hat.jpg", "price": 24.99, "category": "clothing" },
  { "id": 23, "name": "Mangoes", "seller": "Fresh Fields Harvest", "img": "../assets/topaz_agro_jennifer/Catalogue/mango.avif", "price": 2.49, "category": "fruits" },
  { "id": 24, "name": "Milk", "seller": "Moo & More Dairy Co.", "img":"../assets/topaz_agro_jennifer/Catalogue/milk.avif", "price": 3.49, "category": "dairy" },
  { "id": 25, "name": "Chicken", "seller": "Poultry Palace Market","img": "../assets/topaz_agro_jennifer/Catalogue/chicken.jpg", "price": 8.99, "category": "meat" }
]

// DISPLAY ALL PRODUCTS
let items = []
function mappedData (){
  const pro = products.map((item) => {
   return items.push(item )
    // console.log('hhhhh', item)
  })
}


// DISPLAY ALL PRODUCTS
mappedData()

console.log(items);

function renderProducts() {
  const productList = document.querySelector('.catalog-list');

  if (!productList) {
    console.error("Product list container not found!");
    return;
  }

  products.map(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>Seller: ${product.seller}</p>
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
      <button onclick="addToCart(1)">Add to Cart</button>
    `;
{/* <button onclick="addToCart(1)">Add to Cart</button> */}
  
    productList.appendChild(productElement);
    
  });
}

// Call the function to render products when the page loads
document.addEventListener('DOMContentLoaded', renderProducts);


// Function to add a product to the cart ----------------NEW ADDITIONS
// Initialize an empty shopping cart
let shoppingCart = [];

function addToCart(productId) {
  console.log('Adding product with ID:', productId);

  // Find the product by its id
  const productToAdd = products.find(product => product.id === productId);

  // Log the productToAdd to see if it's found
  console.log('Product found:', productToAdd);

  // If the product is found, add it to the shopping cart
  if (productToAdd) {
    shoppingCart.push(productToAdd);
    updateCartBadge();
    // Store cart items in localStorage
        localStorage.setItem('cartItems', JSON.stringify(shoppingCart));
  } else {
    console.error('Product not found:', productId);
  }
}

// Function to update the cart badge
function updateCartBadge() {
  const cartBadge = document.getElementById('cart-badge');
  if (cartBadge) {
    cartBadge.textContent = shoppingCart.length;
  }
}                                           
                                              //  END OF NEW ADDITIONS.     RECHECK DISPLAY ALL PRODUCTS-fixed




// filter by category
let category = []
function filterProductsByCategory (category){
  return products.filter(product => product.category === category);
}

console.log('category',category)

function displayProducts(searchTerm) {
  const searchResults = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Clear previous search results
  document.getElementById('searchResults').innerHTML = '';

  // Display search results
  const resultsContainer = document.getElementById('searchResults');
  if (searchResults.length > 0) {
    searchResults.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>Price: $${product.price}</p>
        <p>Seller: ${product.seller}</p>
      `;
      resultsContainer.appendChild(productElement);
    });
  } else {
    const noResultsElement = document.createElement('p');
    noResultsElement.textContent = 'No matching products found.';
    resultsContainer.appendChild(noResultsElement);
  }
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('searchInput').value;
  displayProducts(searchTerm);
});


function filterItems() {
  const selectedSeller = document.getElementById("seller").value;
  const productsList = document.getElementById("products-list");
  let filteredProducts = [];

  if (selectedSeller === "all") {
      filteredProducts = products;
  } else {
      filteredProducts = products.filter(product => product.seller === selectedSeller);
  }

  // Display filtered products
  productsList.innerHTML = "";
  filteredProducts.forEach(product => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
          <h3>${product.name}</h3>
          <p>Seller: ${product.seller}</p>
          <p>Price: $${product.price}</p>
          <img src="${product.img}" alt="${product.name}">
      `;
      productsList.appendChild(productElement);
  });
}

// Initial call to display all products
filterItems();




// Function to filter products based on the selected seller
function filterItems() {
  const selectedSeller = document.getElementById('seller').value;

  // If "All" is selected, render all products
  if (selectedSeller === 'all') {
    renderProducts(products);
  } else {
    // Otherwise, filter products by the selected category
    const filteredProducts = products.filter(product => product.seller === selectedSeller);
    renderProducts(filteredProducts);
  }
}