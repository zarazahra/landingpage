async function fetchDepartments() {
  try {
      const response = await fetch('http://localhost:5000/api/departments'); // Adjust API endpoint if necessary
      const departments = await response.json();
      
      const departmentTabs = document.getElementById('departmentTabs');
      const departmentContent = document.getElementById('departmentContent');

      departments.forEach((dept, index) => {
          // Create tabs
          const tab = document.createElement('li');
          tab.className = 'nav-item';
          tab.innerHTML = `
              <a
                  class="nav-link ${index === 0 ? 'active show' : ''}"
                  data-bs-toggle="tab"
                  href="#department-tab-${index}"
              >${dept.judul}</a>
          `;
          departmentTabs.appendChild(tab);

          // Create tab content
          const content = document.createElement('div');
          content.className = `tab-pane ${index === 0 ? 'active show' : ''}`;
          content.id = `department-tab-${index}`;
          content.innerHTML = `
              <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                      <h3>${dept.judul}</h3>
                      <p class="fst-italic">${dept.subJudul}</p>
                      <p>${dept.deskripsi}</p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                      <img src="${dept.image}" alt="" class="img-fluid" />
                  </div>
              </div>
          `;
          departmentContent.appendChild(content);
      });
  } catch (error) {
      console.error('Error fetching departments:', error);
  }
}

// Load departments when page loads
document.addEventListener('DOMContentLoaded', fetchDepartments);

var apiUrl = 'http://localhost:5000/api/countDapartement';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Mengambil elemen dengan id 'dapartemen-count'
        const dapartemenCountElement = document.getElementById('dapartemen-count');
        
        // // Memasukkan jumlah dapartemen dari API ke dalam data-purecounter-end
        dapartemenCountElement.setAttribute('data-purecounter-end', data[0].totalDapartement);

        // // Memulai kembali animasi purecounter setelah mengubah data-purecounter-end
        new PureCounter(); // Inisiasi ulang PureCounter
        // console.log(data[0].totalDapartement)
    })
    .catch(err => {
        console.error('Error fetching data:', err);
    });