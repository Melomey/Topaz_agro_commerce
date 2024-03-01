let allItems = [];
let cartItems = [];

let allItemsCopy = [];
let searchResults = [];

const searchInput = document.getElementById('searchInput');
const myDropdown = document.getElementById('myDropdown');

function loadProducts(){
  // Fetch 
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Use your JSON data here
      data.forEach(element => {
        element.addedToCart = false;
      });

      allItems = data;
      allItemsCopy = [...allItems];
      processItems();
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

const itemContainer = document.getElementById('itemsContainer');
function clearItemList() {
  while (itemContainer.firstChild) {
      itemContainer.removeChild(itemContainer.firstChild);
  }
}

function clearSearchList(){
  while (myDropdown.firstChild) {
    myDropdown.removeChild(myDropdown.firstChild);
  }
}

function findItem(){
  searchResults = [];

  let keyword = searchInput.value.toLowerCase();

  if (keyword !== '') {
    myDropdown.style.display = 'block';
    clearSearchList();

    allItemsCopy.forEach(item => {
      if (item.name.toLowerCase().includes(keyword)) {
        searchResults.push(item);
        const htmlItem = document.createElement('a');
        htmlItem.href = './catalogue/catalogue.html';
        htmlItem.textContent = item.name;

        myDropdown.appendChild(htmlItem);
      }
    });
  } else {
    myDropdown.style.display = 'none';
  }  
}
function processItems(){

  allItems.forEach((item, index) => {
    const cartButtonIcon = document.createElement('i');
    cartButtonIcon.classList.add('fa');
    cartButtonIcon.classList.add('fa-check-circle');
    cartButtonIcon.style.color = 'green';
  
    const cartButton = document.createElement('button');
    cartButton.setAttribute('id', 'buy-now');
    cartButton.classList.add('cart-btn');
    if (item.addedToCart) {
      cartButton.style.display = 'inherit';
    }
    else{
      cartButton.style.display = 'none';
    }
    cartButton.appendChild(cartButtonIcon);
  
    const buyNowButton = document.createElement('button');
    buyNowButton.setAttribute('id', 'buy-now');
    buyNowButton.classList.add('buy-btn');
    buyNowButton.onclick = () => addToCart(item);
    if (item.addedToCart) {
      buyNowButton.innerHTML = 'Added To Cart';
    }
    else{
      buyNowButton.innerHTML = 'Buy Now';
    }
  
    const itemName = document.createElement('h6');
    itemName.textContent = item.name;
  
    const productNameDiv = document.createElement('div');
    productNameDiv.classList.add('product-name');
    productNameDiv.style.display = 'inline-block';
    productNameDiv.appendChild(itemName);
    productNameDiv.appendChild(buyNowButton);
    productNameDiv.appendChild(cartButton);
    
    const productTextDiv = document.createElement('div');
    productTextDiv.classList.add('product-text');
    productTextDiv.appendChild(productNameDiv);
  
    const productImage = document.createElement('img');
    productImage.classList.add('product-image');
    productImage.src = item.image_url;
  
    const productCardDiv = document.createElement('div');
    productCardDiv.classList.add('product-card');
    productCardDiv.appendChild(productImage);
    productCardDiv.appendChild(productTextDiv);
    
    itemContainer.appendChild(productCardDiv);
  });


  // const cartButton = document.createElement('button');


}

function addToCart(item){
  if(item.addedToCart !== true){
    cartItems.push(item)
  };
  allItems.forEach(element => {
    if (element.id == item.id) {
      element.addedToCart = true;
    }
  });

  let cartBadge = document.getElementById("cart-badge");
  cartBadge.innerHTML = cartItems.length;

  // saveCart(cartItems);
  clearItemList();
  processItems();
}

function saveCart(data){
  fetch('cart.json', {
    method: 'PUT', // or 'POST' depending on your server setup
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(updatedData => console.log('JSON file updated:', updatedData))
  .catch(error => console.error('Error updating the JSON file:', error));
}

// CAROUSEL
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

loadProducts();

// // { "id": 9, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Corn Seeds", "seller": "SeedMaster Co.", "price": 7.99, "category": "seeds" },
//     { "id": 10, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Cinnamon", "seller": "Spice World Inc.", "price": 5.99, "category": "spices" },
//     { "id": 11, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Tractor", "seller": "FarmWorks Equipment", "price": 5000.00, "category": "equipment" },
//     { "id": 12, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Smart Irrigation System", "seller": "AgroTech Solutions", "price": 1500.00, "category": "technology" },
//     { "id": 13, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Work Boots", "seller": "FarmGear Inc.", "price": 79.99, "category": "clothing" },
//     { "id": 14, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Apples", "seller": "Fresh Fields Harvest Co.", "price": 1.99, "category": "fruits" },
//     { "id": 15, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Beef Steak", "seller": "Prime Cuts Butcher", "price": 12.99, "category": "meat" },
//     { "id": 16, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Consulting Services", "seller": "AgroAdvantage Consultants", "price": 200.00, "category": "services" },
//     { "id": 17, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Nitrogen Fertilizer", "seller": "AgroAid Solutions", "price": 15.99, "category": "fertilizers" },
//     { "id": 18, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Lettuce Seedlings", "seller": "Green Thumb Nursery", "price": 4.99, "category": "seeds" },
//     { "id": 19, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Oregano", "seller": "Herb Garden Grocers", "price": 3.99, "category": "spices" },
//     { "id": 20, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Harvester", "seller": "AgroTech Machinery", "price": 10000.00, "category": "equipment" },
//     { "id": 21, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Drone", "seller": "AgroDrone Technologies", "price": 3000.00, "category": "technology" },
//     { "id": 22, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Sun Hat", "seller": "SunSafe Hats", "price": 24.99, "category": "clothing" },
//     { "id": 23, "image_url": "./assets/Agro_images/image_placeholder.jpeg", "name": "Mangoes", "seller": "Fresh Fields Harvest Co.", "price": 2.49, "category": "fruits" },
//     { "id": 24, "image_url": "./assets/Agro_images/milk.avif", "name": "Milk", "seller": "Moo & More Dairy Co.", "price": 3.49, "category": "dairy" },
//     { "id": 25, "image_url": "./assets/Agro_images/big watering can.jpg", "name": "Chicken", "seller": "Poultry Palace Market", "price": 8.99, "category": "meat" }
// ]