function submitForm(event) {
    event.preventDefault();

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const doctor = document.getElementById('doctor').value;
    const message = document.getElementById('message').value;

    // Rangkai pesan untuk WhatsApp
    const whatsappMessage = `
      *Daftar Online*%0A
      Nama: ${name}%0A
      Email: ${email}%0A
      No Telp: ${phone}%0A
      Tanggal Janji: ${date}%0A
      No Kartu / Buku: ${cardNumber}%0A
      Nama Dokter: ${doctor}%0A
      Pesan: ${message ? message : "Tidak ada pesan tambahan"}
    `;

    // Nomor WhatsApp tujuan
    const phoneNumber = "6285249922000"; // Ganti dengan nomor WhatsApp tujuan

    // Buka WhatsApp dengan pesan yang sudah diisi
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');

    // Kosongkan form setelah submit
    document.getElementById('appointmentForm').reset();
  }