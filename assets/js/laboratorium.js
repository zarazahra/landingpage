var apiUrl = 'http://localhost:5000/api/countLabor';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Mengambil elemen dengan id 'labor-count'
        const laborCountElement = document.getElementById('labor-count');
        // console.log(data)
        // Memasukkan jumlah labor dari API ke dalam data-purecounter-end
        laborCountElement.setAttribute('data-purecounter-end', data[0].totalLabor);

        // Memulai kembali animasi purecounter setelah mengubah data-purecounter-end
        new PureCounter();
    })
    .catch(err => {
        console.error('Error fetching data:', err);
    });
