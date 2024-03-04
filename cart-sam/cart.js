  // Function to add item to the cart
  const addToCart = (itemName, price, imageUrl) => {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = parseFloat(totalElement.innerText);

    // Create a new row for the item
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = itemName;
    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = itemName;
    image.className = 'item-image';
    imageCell.appendChild(image);
    const itemNameCell = document.createElement('td');
    itemNameCell.textContent = itemName;
    const priceCell = document.createElement('td');
    priceCell.textContent = '$' + price.toFixed(2);
    const deleteCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => {
        // Remove the item from the cart and update the total
        total -= price;
        totalElement.textContent = total.toFixed(2);
        row.remove();
    };
    deleteCell.appendChild(deleteBtn);

    // Add the item to the cart and update the total
    row.appendChild(nameCell);
    row.appendChild(imageCell);
    row.appendChild(itemNameCell);
    row.appendChild(priceCell);
    row.appendChild(deleteCell);
    cartItems.appendChild(row);
    total += price;
    totalElement.textContent = total.toFixed(2);
};

