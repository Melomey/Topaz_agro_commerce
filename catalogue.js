const product = [
  { name: 'Makerel', img: 'assets/topaz_agro_jennifer/Catalogue/mackerel-fish-white-background_1011712-30.avif', seller: 'SeaFlavor Market', img: '', price: 9.99, category: 'seafood' },
  { name: 'Carrot', seller: 'Fresh Fields Harvest', price: 9.99, category: 'vegetables' },
  { name: 'Eggs', seller: 'Moo & More Dairy Co.', price: 2.99, category: 'dairy' },
  { name: 'Wheat Seeds', seller: 'Legumelight Farms', price: 5.99, category: 'seeds' },
  { name: 'Pesticide', seller: 'AgroAid Solutions', price: 15.99, category: 'chemicals' },
  { name: 'Tomato Seeds', seller: 'SproutSource Emporium', price: 3.99, category: 'seeds' },
  { name: 'Pest Control', seller: 'AgroAdvantage Consultants', price: 49.99, category: 'services' },
  { name: 'Phosphorus Fertilizer', seller: 'Fertile Fields Co.', price: 29.99, category: 'fertilizers' },
  { name: 'Corn Seeds', seller: 'SeedMaster Co.', price: 7.99, category: 'seeds' },
  { name: 'Cinnamon', seller: 'Spice World Inc.', price: 5.99, category: 'spices' },
  { name: 'Tractor', seller: 'FarmWorks Equipment', price: 5000.00, category: 'equipment' },
  { name: 'Smart Irrigation System', seller: 'AgroTech Solutions', price: 1500.00, category: 'technology' },
  { name: 'Work Boots', seller: 'FarmGear Inc.', price: 79.99, category: 'clothing' },
  { name: 'Apples', seller: 'Fresh Fields Harvest', price: 1.99, category: 'fruits' },
  { name: 'Beef Steak', seller: 'Prime Cuts Butcher', price: 12.99, category: 'meat' },
  { name: 'Consulting Services', seller: 'AgroAdvantage Consultants', price: 200.00, category: 'services' },
  { name: 'Nitrogen Fertilizer', seller: 'AgroAid Solutions', price: 15.99, category: 'fertilizers' },
  { name: 'Lettuce Seedlings', seller: 'Green Thumb Nursery', price: 4.99, category: 'seeds' },
  { name: 'Oregano', seller: 'Herb Garden Grocers', price: 3.99, category: 'spices' },
  { name: 'Harvester', seller: 'AgroTech Machinery', price: 10000.00, category: 'equipment' },
  { name: 'Drone', seller: 'AgroDrone Technologies', price: 3000.00, category: 'technology' },
  { name: 'Sun Hat', seller: 'SunSafe Hats', price: 24.99, category: 'clothing' },
{name: 'Mangoes', seller: 'Fresh Fields Harvest', price: 2.49, category:'fruits'},
  { name: 'Milk', seller: 'Moo & More Dairy Co.', price: 3.49, category: 'dairy' },
  { name: 'Chicken', seller: 'Poultry Palace Market', price: 8.99, category: 'meat' }
];


function searchItems(event) {
  // take what the user typed
  const userInput = event.target.value;
  // filter products with what the user typed
  const filteredProducts = products.filter(product => product.name.includes(userInput));
  // create a div for every product
  // insert all result into catalogue grid
}

function filterBySeller() {
  // take the seller the user selected 
  // const filteredItems = 
  // filter products by seller
  // create a div for every product
  // insert all results into a catalogue grid
}

function addToCart() {
  // when button is clicked it should add the item to the cart 
}




// // Function to display all catalog items
// function displayCatalog() {
//   const catalogGrid = document.getElementById('catalogGrid');
//   catalogGrid.innerHTML = '';

//const filter = products.filter(x => x.category = "fruits")
//   filteredProducts.forEach(product => {
  
//     const catalogItem = document.createElement('div');
//     catalogItem.classList.add('catalog-item');
//     catalogItem.innerHTML = `
//           <h3>${product.name}</h3>
//           <h5>${product.seller}</h5>
//           <p>$${product.price}</p>
//         `;
//     catalogGrid.appendChild(catalogItem);
//   });
// }

// // Initial display of all catalog items
// displayItems(catalogItems);

// // Function to filter items by seller
function filterItems(event) {
  console.log(event);
  filtrer
  const filtered = products.filter(data => data.seller == "SeaFlavor Market")
  // const sellerFilter = document.getElementById('seller').value;
  // let filteredProducts = products;

  // if (sellerFilter !== 'all') {
  //   filteredProducts = filteredProducts.filter(product => product.seller === sellerFilter);
  // }
  // displayFilteredCatalog(filteredProducts);
}

// // Function to search items by category
// function searchByCategory() {
//   const selectedCategory = document.getElementById('category').value;
//   if (selectedCategory === 'all') {
//     displayCatalog(products);
//   } else {
//     const filteredProducts = products.filter(product => product.category === selectedCategory);
//     displayCatalog(filteredProducts);
//   }
// }

// // Function to display filtered catalog items
// function displayFilteredCatalog(filteredProducts) {
//   const catalogGrid = document.getElementById('catalogGrid');
//   catalogGrid.innerHTML = '';
//   filteredProducts.forEach((products) => {
//     const catalogItem = document.createElement('div');
//     catalogItem.classList.add('catalog-item');
//   })
// }


// // Function to handle search input
// function searchItems() {
//   const searchTerm = document.getElementById("searchInput").value.toLowerCase();
//   const category = document.getElementById("category").value;
//   const filteredItems = filterItems(category);
//   const matchedItems = filteredItems.filter(item => item.name.toLowerCase().includes(searchTerm));
//   displayItems(matchedItems);
// }

// // Function to search items
// function searchItems() {
//   const searchInput = document.getElementById('searchInput').value.toLowerCase();
//   const filteredProducts = products.filter(product => product.category.toLowerCase().includes(searchInput));
//   displayCatalog(filteredProducts);
// }

// // Call the function to display all products when the page loads
// window.onload = function () {
//   // displayCatalog(products);
// };

// // Event listeners for search input and category filter
// document.getElementById("searchInput").addEventListener("keyup", searchItems);
// document.getElementById("category").addEventListener("change", searchItems); 3

// // Select the button element
// const addToCartButton = document.querySelector('.btn');

// // Add event listener to the button
// addToCartButton.addEventListener('click', addToCart);

// // Function to execute when button is clicked
// function addToCart(event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Retrieve item details from HTML elements
//   const itemName = document.querySelector('.item-name').textContent;
//   const itemSeller = document.querySelector('.item-seller').textContent;
//   const itemPrice = parseFloat(document.querySelector('.item-price').textContent.replace('$', ''));

//   // Create an object with item details
//   const item = {
//     name: itemName,
//     seller: itemSeller,
//     price: itemPrice
//   };

//   // Add the item to the cart 
//   addToCartFunction(item);

//   // Alert the user that the item has been added to the cart (replace this with your preferred notification method)
//   alert('Item added to cart!');
// }

// // Function to add item to cart 
// function addToCartFunction(item) {
//   console.log('Item added to cart:', item);
// }
