fetch('http://localhost:5000/api/senam-hamil')
  .then(response => response.json())
  .then(data => {
    const syaratList = document.getElementById('syaratList');
    const tahapanList = document.getElementById('tahapanList');
    const manfaatList = document.getElementById('manfaatList');

    // Clear any existing content
    syaratList.innerHTML = '';
    tahapanList.innerHTML = '';
    manfaatList.innerHTML = '';

    // Add data to the lists
    data.forEach(item => {
      const syaratItem = document.createElement('li');
      syaratItem.textContent = item.syarat;
      syaratList.appendChild(syaratItem);

      const tahapanItem = document.createElement('li');
      tahapanItem.textContent = item.tahapan;
      tahapanList.appendChild(tahapanItem);

      const manfaatItem = document.createElement('li');
      manfaatItem.textContent = item.manfaat;
      manfaatList.appendChild(manfaatItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
