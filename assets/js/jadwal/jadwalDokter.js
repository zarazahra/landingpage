// Fungsi untuk merender tabel
function renderTable() {
    var x = document.getElementById("cari").value.toLowerCase();
    fetch('http://localhost:5000/api/jadwalDokter')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('jadwalDokterTable');
        
        // Mengosongkan tabel sebelum menambahkan baris baru
        tableBody.innerHTML = '';

        // Jika tidak ada pencarian, tampilkan semua data
        const filteredData = x === '' ? data : data.filter(dokter => dokter.namaDokter.toLowerCase().includes(x));

        // Menampilkan data
        if (filteredData.length > 0) {
            filteredData.forEach((dokter, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td style="max-width: 40px">${index + 1}</td>
                    <td style="max-width: 300px">${dokter.namaDokter}</td>
                    <td style="max-width: 100px">${dokter.spesialis}</td>
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
        } else {
            console.log("Dokter tidak ditemukan");
        }
    })
    .catch(error => console.error('Error:', error));
}

// Panggil renderTable ketika halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});

// Tambahkan event listener untuk input pencarian
document.getElementById('cari').addEventListener('input', () => {
    renderTable();
});
