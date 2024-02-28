let allItems = [];
let cartItems = [];

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

function processItems(){

  allItems.forEach((item, index) => {
    const cartButtonIcon = document.createElement('i');
    cartButtonIcon.classList.add('fa');
    cartButtonIcon.classList.add('fa-cart-plus');
    cartButtonIcon.style.color = '#f3bc06'
  
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


  clearItemList();
  processItems();
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