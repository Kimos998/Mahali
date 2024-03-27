document.addEventListener("DOMContentLoaded", function() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const clothingItemsContainer = document.getElementById('clothingItems');
      data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
          <h2>${item.name}</h2>
          <img src="${item.image}" alt="${item.name}">
          <p>Price: ${item.price}</p>
          <p>Description: ${item.description}</p>
        `;
        clothingItemsContainer.appendChild(itemElement);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
