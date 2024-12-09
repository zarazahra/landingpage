fetch('http://localhost:5000/api/jadwalPoliFisioterapi')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('jadwalPoliFisioterapi');
      data.forEach((data, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
          <td style="max-width: 300px">${data.nama}</td>
          <td style="max-width: 200px">${data.senin || '-'}</td>
          <td style="max-width: 200px">${data.selasa || '-'}</td>
          <td style="max-width: 200px">${data.rabu || '-'}</td>
          <td style="max-width: 200px">${data.kamis || '-'}</td>
          <td style="max-width: 200px">${data.jumat || '-'}</td>
          <td style="max-width: 200px">${data.sabtu || '-'}</td>
          <td style="max-width: 200px">${data.minggu || '-'}</td>
        `;

        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching data:', error));