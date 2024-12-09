fetch('http://localhost:5000/api/galeriFoto')
  .then(response => response.json())
  .then(data => {
    const galleryContainer = document.getElementById('galleryContainer');

    data.forEach(photo => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-lg-3 col-md-4';

      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';

      galleryItem.innerHTML = `
        <a
          href="${photo.gambarFoto}"
          class="glightbox"
          data-gallery="images-gallery"
          style="height: 150px"
        >
          <img
            src="${photo.gambarFoto}"
            alt="${photo.judulFoto || 'Galeri Foto'}"
            class="img-fluid"
          />
        </a>
      `;

      colDiv.appendChild(galleryItem);
      galleryContainer.appendChild(colDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
