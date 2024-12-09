function sendToWhatsApp(event) {
  event.preventDefault(); // Mencegah submit form secara default

  // Mengambil nilai input form
  var nama = document.getElementById('nama').value;
  var emailK= document.getElementById('emailK').value;
  var subject = document.getElementById('subject').value;
  var messageK = document.getElementById('messageK').value;

  // Mengatur nomor WhatsApp tujuan
  var phoneNumber = '6285249922000'; // Ganti dengan nomor WhatsApp tujuan Anda

  // URL WhatsApp yang akan dibuka dengan data dari form
  var whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=
    Name: ${encodeURIComponent(nama)}%0A
    Email: ${encodeURIComponent(emailK)}%0A
    Subject: ${encodeURIComponent(subject)}%0A
    Message: ${encodeURIComponent(messageK)}`;

  // Membuka WhatsApp
  window.open(whatsappURL, '_blank');

  // Mengosongkan form setelah dikirim
  document.getElementById('nama').value = '';
  document.getElementById('emailK').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('messageK').value = '';

  // Menampilkan pesan sukses
  document.querySelector('.sent-message').style.display = 'block';

  // Menyembunyikan pesan sukses setelah beberapa detik
  setTimeout(function() {
    document.querySelector('.sent-message').style.display = 'none';
  }, 3000);
}