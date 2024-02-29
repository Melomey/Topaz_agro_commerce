let inventoryProducts = [
    { "Image_url": "../assets/Agro_images/big watering can.jpg", "Item": "Watering can", "Price": "30 GHS", "Quantity": 12 },
    { "Image_url": "../assets/Agro_images/big watering can.jpg", "Item": "Watering can", "Price": "80 GHS", "Quantity": 120 },

]

const htmlReference = document.getElementById('products');

// references for adding items
const newEntry = document.getElementById('newEntry');
const showBtn = document.getElementById('showBtn');

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
        Image_url:"../assets/Agro_images/image_placeholder.jpeg",
        Item: itemName.value,
        Price: itemPrice.value + ' GHS',
        Quantity: itemQuantity.value,
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
        image.src = product.Image_url;
        image.classList.add('catalogue-img');

        const deleteBtn = document.createElement('i');
        deleteBtn.classList.add('fa');
        deleteBtn.classList.add('fa-trash');
        deleteBtn.classList.add('delete-icon');

        deleteBtn.onclick = () => deleteItem(index);



        td1.appendChild(image);
        td2.textContent = product.Item;
        td3.textContent = product.Price;
        td4.textContent = product.Quantity;
        td5.appendChild(deleteBtn);



        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

    });


}

processTable();
