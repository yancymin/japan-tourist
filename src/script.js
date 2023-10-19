document.getElementById('userForm').addEventListener('submit', function(event) {
       event.preventDefault();
       // Add form validation and submission code here
   });

   // Add gallery functionality code here

   // Fetch images from Unsplash API
   fetch('https://api.unsplash.com/search/photos?query=japan&per_page=20&client_id=YOUR_UNSPLASH_ACCESS_KEY')
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