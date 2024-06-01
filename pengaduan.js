document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pengaduanForm');
    const pengaduanList = document.getElementById('pengaduanList');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const judul = document.getElementById('judul').value;
      const isi = document.getElementById('isi').value;
  
      const response = await fetch('https://pengaduan-ntddqgpccq-et.a.run.app/pengaduan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ judul, isi }),
      });
  
      if (response.ok) {
        alert('Pengaduan created');
        form.reset();
        loadPengaduan();
      } else {
        alert('Failed to create pengaduan');
      }
    });
  
    async function loadPengaduan() {
      const response = await fetch('https://pengaduan-ntddqgpccq-et.a.run.app/pengaduan');
      const pengaduan = await response.json();
  
      pengaduanList.innerHTML = '';
  
      pengaduan.forEach(item => {
        const div = document.createElement('div');
        div.className = 'pengaduan-item';
        div.innerHTML = `
          <h3>${item.judul}</h3>
          <p>${item.isi}</p>
          <p><strong>Respon:</strong> ${item.respon || 'Belum ada respon'}</p>
          <p><strong>Status:</strong> ${item.status}</p>
        `;
        pengaduanList.appendChild(div);
      });
    }
  
    loadPengaduan();
  });
  
