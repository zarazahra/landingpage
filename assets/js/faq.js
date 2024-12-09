fetch('http://localhost:5000/api/faq')
  .then(response => response.json())
  .then(data => {
    const faqContainer = document.getElementById('faq-container');

    data.forEach(faq => {
      const faqItem = document.createElement('div');
      faqItem.className = 'faq-item';

      faqItem.innerHTML = `
        <h3>${faq.pertanyaan}</h3>
        
        <div class="faq-content" style="display: none;">
        <br>
          <p>${faq.jawaban}</p>
        </div>
        <i class="faq-toggle bi bi-chevron-right"></i>
      `;

      // Append the FAQ item to the container
      faqContainer.appendChild(faqItem);

      // Add click event listener to toggle FAQ answer visibility
      faqItem.querySelector('.faq-toggle').addEventListener('click', function() {
        const faqContent = faqItem.querySelector('.faq-content');
        const faqIcon = faqItem.querySelector('.faq-toggle');

        if (faqContent.style.display === "none") {
          faqContent.style.display = "block";
          faqIcon.className = 'faq-toggle bi bi-chevron-down'; // Change icon
        } else {
          faqContent.style.display = "none";
          faqIcon.className = 'faq-toggle bi bi-chevron-right'; // Revert icon
        }
      });
    });
  })
  .catch(error => console.error('Error fetching FAQ data:', error));



