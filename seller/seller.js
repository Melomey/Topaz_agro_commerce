let inventoryProducts = [];
let inventoryProductsCopy = [];

const htmlReference = document.getElementById('products');

function loadProducts(){
    // Fetch 
    fetch('../products.json')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Use your JSON data here  
        inventoryProducts = data;
        inventoryProductsCopy = [...inventoryProducts];
        processTable();
      })
      .catch(error => console.error('Error fetching JSON:', error));
}

// references for adding items
const newEntry = document.getElementById('newEntry');
const showBtn = document.getElementById('showBtn');
const searchInput = document.getElementById('searchInput');
  
  function findItem(){
    searchResults = [];
  
    let keyword = searchInput.value.toLowerCase();
    clearTable();
  
    if (keyword !== '') {
  
      inventoryProductsCopy.forEach(item => {
        if (item.name.toLowerCase().includes(keyword)) {
          searchResults.push(item);
        }
      });

      inventoryProducts = searchResults;
    } else {
      inventoryProducts = [...inventoryProductsCopy];
    }  

    processTable();
  }

function showCreate() {
    newEntry.style.display = 'inherit'; // show create inputs
    showBtn.style.display = 'none'; // hide create button
}

function hideCreate(){
    newEntry.style.display = 'none'; // hide create inputs
    showBtn.style.display = 'inherit'; // show create button
}

function addItem(){

    // reference input fields
    const itemName = document.getElementById('newName');
    const itemPrice = document.getElementById('newPrice');
    const itemQuantity = document.getElementById('newQuantity');

    // add to variable with default image
    inventoryProducts.push({
        image_url:"./assets/Agro_images/image_placeholder.jpeg",
        name: itemName.value,
        price: itemPrice.value,
        quantity: itemQuantity.value,
    });

    // reset the input fields
    
    itemName.value = '';
    itemPrice.value = null;
    itemQuantity.value = null;

    // apply changes to html
    clearTable();
    processTable();
}

function clearTable() {
    while (htmlReference.firstChild) {
        htmlReference.removeChild(htmlReference.firstChild);
    }
}

function deleteItem(index) {
    inventoryProducts.splice(index, 1);
    clearTable();
    processTable();
}

function processTable() {

    inventoryProducts.forEach((product, index) => {
        const tr = document.createElement('tr');
        htmlReference.appendChild(tr);

        // For Item
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');

        const image = document.createElement('img');
        image.src = '.' + product.image_url;
        image.classList.add('catalogue-img');

        const deleteBtn = document.createElement('i');
        deleteBtn.classList.add('fa');
        deleteBtn.classList.add('fa-trash');
        deleteBtn.classList.add('delete-icon');

        deleteBtn.onclick = () => deleteItem(index);



        td1.appendChild(image);
        td2.textContent = product.name;
        td3.textContent = product.price;
        td4.textContent = product.quantity;
        td5.appendChild(deleteBtn);



        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

    });


}

loadProducts();
