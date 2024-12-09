fetch('http://localhost:5000/api/jadwalPoliPsikolog')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('jadwalPoliPsikolog');
      data.forEach((dokter, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
          <td style="max-width: 300px">${dokter.nama}</td>
          <td style="max-width: 200px">${dokter.senin || '-'}</td>
          <td style="max-width: 200px">${dokter.selasa || '-'}</td>
          <td style="max-width: 200px">${dokter.rabu || '-'}</td>
          <td style="max-width: 200px">${dokter.kamis || '-'}</td>
          <td style="max-width: 200px">${dokter.jumat || '-'}</td>
          <td style="max-width: 200px">${dokter.sabtu || '-'}</td>
          <td style="max-width: 200px">${dokter.minggu || '-'}</td>
        `;

        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching data:', error));