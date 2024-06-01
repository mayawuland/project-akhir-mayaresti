document.addEventListener('DOMContentLoaded', () => {
    const pengaduanList = document.getElementById('pengaduanList');
    const updateModal = document.getElementById('updateModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const updateForm = document.getElementById('updateForm');
  
    async function loadPengaduan() {
      const response = await fetch('http://localhost:4000/respon');
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
          <button class="update" onclick="openModal(${item.id}, '${item.respon}', '${item.status}')">Update</button>
          <button class="delete" onclick="deletePengaduan(${item.id})">Delete</button>
        `;
        pengaduanList.appendChild(div);
      });
    }
  
    window.openModal = function (id, respon, status) {
      document.getElementById('updateId').value = id;
      document.getElementById('updateRespon').value = respon;
      document.getElementById('updateStatus').value = status;
      updateModal.style.display = 'block';
    };
  
    closeModal.onclick = function () {
      updateModal.style.display = 'none';
    };
  
    window.onclick = function (event) {
      if (event.target == updateModal) {
        updateModal.style.display = 'none';
      }
    };
  
    updateForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const id = document.getElementById('updateId').value;
      const respon = document.getElementById('updateRespon').value;
      const status = document.getElementById('updateStatus').value;
  
      const response = await fetch(`http://localhost:4000/respon/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ respon, status }),
      });
  
      if (response.ok) {
        alert('Pengaduan updated');
        updateModal.style.display = 'none';
        loadPengaduan();
      } else {
        alert('Failed to update pengaduan');
      }
    });
  
    window.deletePengaduan = async function (id) {
      const response = await fetch(`http://localhost:4000/respon/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        alert('Pengaduan deleted');
        loadPengaduan();
      } else {
        alert('Failed to delete pengaduan');
      }
    };
  
    loadPengaduan();
  });
  