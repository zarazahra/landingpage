document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");
    const modal = document.getElementById("newsModal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    // Fetch berita dari API
    fetch("http://localhost:5000/api/berita")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          const beritaElement = document.createElement("div");
          beritaElement.classList.add("col-lg-4", "col-md-6");

          beritaElement.innerHTML = `
            <div class="news-item">
              <img src="${item.gambar}" class="img-fluid" alt="${item.judul}" />
              <br><br>
              <h3>${item.judul}</h3>
              <p>${item.deskripsi.substring(0, 50)}...</p>
              <a href="#" class="read-more" data-title="${item.judul}" data-image="${item.gambar}" data-description="${item.deskripsi}">Read More</a>
            </div>
          `;

          newsContainer.appendChild(beritaElement);
        });

        // Event listener untuk "Read More" link
        newsContainer.addEventListener("click", function (event) {
          if (event.target.classList.contains("read-more")) {
            event.preventDefault();
            const title = event.target.getAttribute("data-title");
            const image = event.target.getAttribute("data-image");
            const description = event.target.getAttribute("data-description");

            modalTitle.textContent = title;
            modalImage.src = image;
            modalDescription.textContent = description;

            modal.style.display = "block";
          }
        });

        // Event listener untuk menutup modal
        closeModal.addEventListener("click", function () {
          modal.style.display = "none";
        });

        // Tutup modal jika klik di luar modal
        window.addEventListener("click", function (event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching berita:", error);
        newsContainer.innerHTML = "<p>Failed to load berita. Please try again later.</p>";
      });
  });