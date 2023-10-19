document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add form validation and submission code here
});

// Add gallery functionality code here

// Fetch images from Unsplash API
fetch('https://api.unsplash.com/search/photos?query=japan&per_page=20&client_id=9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251')
.then(response => response.json())
.then(data => {
    const gallery = document.getElementById('gallery');
    data.results.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.small;
        gallery.appendChild(img);
    });
})
.catch(error => console.error('Error:', error));