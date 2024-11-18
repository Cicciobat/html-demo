// Sample data to be stored in localStorage
const sampleData = [
    { id: 1, title: "Product 1", description: "Description for Product 1" },
    { id: 2, title: "Product 2", description: "Description for Product 2" },
    { id: 3, title: "Article 1", description: "Description for Article 1" },
    { id: 4, title: "Article 2", description: "Description for Article 2" }
];

// Store sample data in localStorage if not already stored
if (!localStorage.getItem('items')) {
    localStorage.setItem('items', JSON.stringify(sampleData));
}

// Function to perform search
function performSearch() {
    const searchQuery = document.getElementById('searchBox').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    const items = JSON.parse(localStorage.getItem('items'));

    // Filter items based on the search query
    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery)
    );

    // Clear the previous search results
    resultsContainer.innerHTML = '';

    // Display the filtered items or 'No results found'
    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('result-item');
            resultElement.innerHTML = `
        <h5>${item.title}</h5>
        <p>${item.description}</p>
      `;
            resultsContainer.appendChild(resultElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
}
