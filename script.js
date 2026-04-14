document.addEventListener("DOMContentLoaded", () => {

  const scriptURL = 'https://script.google.com/macros/s/AKFYCBxxxxxxx/exec'; // GANTI URL

  const form = document.getElementById('form');
  const successMsg = document.getElementById('success');

  // Cegah error kalau form tidak ada
  if (!form) {
    console.error("Form tidak ditemukan!");
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const wa = formData.get("wa");

    if (!wa || wa.length < 10) {
      alert("Nomor WhatsApp tidak valid!");
      return;
    }

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {

        successMsg.style.display = 'block';

        const nama = formData.get("nama");
        const obat = formData.get("obat");

        setTimeout(() => {
          window.location.href =
            `https://wa.me/6285217171948?text=Halo, saya ${nama} ingin pesan ${obat} di ApotekAI`;
        }, 1000);

      } else {
        throw new Error("Response bukan OK");
      }

    } catch (error) {
      alert("Gagal kirim data! Cek koneksi / Apps Script");
      console.error(error);
    }
  });

});
