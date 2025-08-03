// Define the asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold user names
        const userList = document.createElement('ul');

        // Loop through the users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Add the user list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors (e.g., network issues)
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Fetch error:', error);
    }
}

// Run fetchUserData once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
