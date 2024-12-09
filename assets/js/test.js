// Grid Info
var apiUrl = 'http://localhost:5000/api/gridColumn';

        fetch(apiUrl).then(response => {
            return response.json();
          }).then(data => {
            // 0
            document.getElementById("judulG0").innerHTML = data[0].judulGrid
            document.getElementById("shortText0").innerHTML = data[0].shortText
            document.getElementById("longText0").innerHTML = data[0].longText
            // 1
            document.getElementById("judulG1").innerHTML = data[1].judulGrid
            document.getElementById("shortText1").innerHTML = data[1].shortText
            document.getElementById("longText1").innerHTML = data[0].longText
            // 2
            document.getElementById("judulG2").innerHTML = data[2].judulGrid
            document.getElementById("shortText2").innerHTML = data[2].shortText
            document.getElementById("longText2").innerHTML = data[0].longText
            // 3
            document.getElementById("judulG3").innerHTML = data[3].judulGrid
            document.getElementById("shortText3").innerHTML = data[3].shortText
            document.getElementById("longText3").innerHTML = data[0].longText
            //console.log(data);
          }).catch(err => {
            // Do something for an error here
});

// Tentang Kami
var apiUrl = 'http://localhost:5000/api/ttgKami';
fetch(apiUrl).then(response => {
  return response.json();
}).then(data => {
  document.getElementById("ttgKamiJudul").innerHTML = data[0].judul
  document.getElementById("ttgKamiDeskripsi").innerHTML = data[0].deskripsiTtgKami
})

// Layanan Fasilitas
var apiUrl = 'http://localhost:5000/api/layananFasilitas';

        fetch(apiUrl).then(response => {
            return response.json();
          }).then(data => {
            // 0
            document.getElementById("satu").innerHTML = data[0].judulLF
            document.getElementById("dua").innerHTML = data[0].deskripsiLF
            // 1
            document.getElementById("tiga").innerHTML = data[1].judulLF
            document.getElementById("empat").innerHTML = data[1].deskripsiLF
            // 2
            document.getElementById("lima").innerHTML = data[2].judulLF
            document.getElementById("enam").innerHTML = data[2].deskripsiLF
            // 3
            document.getElementById("tujuh").innerHTML = data[3].judulLF
            document.getElementById("delapan").innerHTML = data[3].deskripsiLF
            // 4
            document.getElementById("sembilan").innerHTML = data[4].judulLF
            document.getElementById("sepuluh").innerHTML = data[4].deskripsiLF
            // 5
            document.getElementById("sebelas").innerHTML = data[5].judulLF
            document.getElementById("duabelas").innerHTML = data[5].deskripsiLF
            //console.log(data);
          }).catch(err => {
            // Do something for an error here
});

// Carousel
var apiUrl = 'http://localhost:5000/api/carousel';

fetch(apiUrl).then(response => {
    return response.json();
}).then(data => {
    const sliderContainer = document.getElementById('satus');

    // Perulangan untuk menampilkan data dari API
    data.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<div class="swiper-wrapper"><div class="swiper-slide" id="slider-container"><h4  class="slider-heading">${item.judulSlide}</h4><hr class="slider-divider" /><p>${item.deskripsiSlide}</p></div></div>`;
        sliderContainer.appendChild(slide);
    });
}).catch(err => {
    console.error('Error fetching data:', err);
});


// Count Data Dokter
var apiUrl = 'http://localhost:5000/api/countDokter';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Mengambil elemen dengan id 'dokter-count'
        const dokterCountElement = document.getElementById('dokter-count');
        
        // // Memasukkan jumlah dokter dari API ke dalam data-purecounter-end
        dokterCountElement.setAttribute('data-purecounter-end', data[0].totalDokter);

        // // Memulai kembali animasi purecounter setelah mengubah data-purecounter-end
        new PureCounter(); // Inisiasi ulang PureCounter
        // console.log(data[0].totalDokter)
    })
    .catch(err => {
        console.error('Error fetching data:', err);
    });


// Data Dokter
// Data Dokter
var apiUrl = 'http://localhost:5000/api/dataDokter';
var doctorData = []; // Array to hold doctor data

// Fungsi untuk mengambil data dari API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    doctorData = data; // Save data to global variable
    displayDoctors(doctorData); // Display all doctors initially
  })
  .catch(error => console.error('Error fetching doctor data:', error));

// Fungsi untuk menampilkan dokter

// URL media sosial yang sama untuk semua dokter
const instagramURL = "https://www.instagram.com/rs_abk/?hl=en";
const facebookURL = "https://www.facebook.com/rsanugerahbundakhatulistiwa";
const whatsappURL = "https://wa.me/6285249922000"; 

function displayDoctors(doctors) {
  const doctorList = document.getElementById('doctor-list');
  doctorList.innerHTML = ''; // Clear current list

  doctors.forEach(doctor => {
    const doctorDiv = document.createElement('div');
    doctorDiv.classList.add('col-lg-6');
    doctorDiv.setAttribute('data-aos', 'fade-up');
    doctorDiv.setAttribute('data-aos-delay', '100');

    doctorDiv.innerHTML = `
      <div class="team-member d-flex align-items-start">
        <div class="pic">
          <img src="${doctor.gambarFoto}" class="img-fluid" alt="${doctor.namaDokter}" />
        </div>
        <div class="member-info">
          <h4>${doctor.namaDokter}</h4>
          <span>${doctor.spesialis}</span>
          <div class="social">
            <a href="${whatsappURL}"><i class="bi bi-whatsapp"></i></a>
            <a href="${facebookURL}"><i class="bi bi-facebook"></i></a>
            <a href="${instagramURL}"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    `;

    doctorList.appendChild(doctorDiv);
  });
}

// Fungsi untuk mencari dokter berdasarkan nama atau spesialisasi
function searchDoctors() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const filteredDoctors = doctorData.filter(doctor => 
    doctor.namaDokter.toLowerCase().includes(searchInput) || 
    doctor.spesialis.toLowerCase().includes(searchInput)
  );
  displayDoctors(filteredDoctors); // Display filtered results
}

// Fungsi untuk filter dokter berdasarkan spesialisasi (Dropdown)
function filterDoctors(specialization) {
  let filteredDoctors = doctorData;

  if (specialization !== 'all') {
    filteredDoctors = doctorData.filter(doctor => doctor.spesialis === specialization);
  }

  displayDoctors(filteredDoctors);
}




// Count Data Penghargaan
var apiUrl = 'http://localhost:5000/api/countPenghargaan';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Mengambil elemen dengan id 'dokter-count'
        const dokterCountElement = document.getElementById('penghargaan-count');
        
        // // Memasukkan jumlah dokter dari API ke dalam data-purecounter-end
        dokterCountElement.setAttribute('data-purecounter-end', data[0].totalPenghargaan);

        // // Memulai kembali animasi purecounter setelah mengubah data-purecounter-end
        new PureCounter(); // Inisiasi ulang PureCounter
        // console.log(data[0].totalDokter)
    })
    .catch(err => {
        console.error('Error fetching data:', err);
    });