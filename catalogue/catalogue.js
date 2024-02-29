const product = [
  { name: 'Makerel', seller: 'SeaFlavor Market', img: '', price: 9.99, category: 'seafood' },
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

class productFilter {
  constructor(products) {
      this.products = products;
  }

  // filterByCategory(category) {
  //     return this.products.filter(product => product.category === category);
  // }

  filterByName(name) {

      const product = this.products.filter(product => product.name.toLowerCase() === name.toLowerCase());
      console.log("prrrr",product)
      return product
  }

  filterBySeller(seller) {
      return this.products.filter(product => product.seller === seller);
  }

  search(term) {
      return this.products.filter(product => product.name.toLowerCase().includes(term.toLowerCase()) || product.category.toLowerCase().includes(term.toLowerCase()) || product.seller.toLowerCase().includes(term.toLowerCase()));
  }
}

let productFilter = new ProductFilter(products);

document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const catalogGrid = document.querySelector('.product-list');

  searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const searchTerm = searchInput.value.trim().toLowerCase();

    // Use the search method to filter products based on the search term
    let searchResults = productFilter.search(searchTerm);

    // Clear the product list
    productList.innerHTML = '';

    // Add the search results to the product list
    for (let product of searchResults) {
      productList.innerHTML += `
        <div class="product">
          <img src="../asset/image/${product.name.toLowerCase().replace(' ', '_')}.png/jpg/avif/wepd" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.price}</p>
          <a href="cart.html" class="cart-icon">🛒</a>
        </div>
      `;
    }
  });
});


// function searchItems(event) {
  // take what the user typed
  // const userInput = event.target.value;
  // filter products with what the user typed
// const filteredProducts = products.filter(product => product.name.includes(userInput));
  // create a div for every product
  // insert all result into catalogue grid
// }

// function filterBySeller() {
  // take the seller the user selected 
  // const filteredItems = 
  // filter products by seller
  // create a div for every product
  // insert all results into a catalogue grid
// }

// function addToCart() {
  // when button is clicked it should add the item to the cart 
// }


