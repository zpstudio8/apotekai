const scriptURL = 'https://script.google.com/macros/s/ISI_URL_KAMU/exec';

const form = document.getElementById('form');
const successMsg = document.getElementById('success');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const wa = formData.get("wa");

  // Validasi WA sederhana
  if (wa.length < 10) {
    alert("Nomor WhatsApp tidak valid!");
    return;
  }

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    successMsg.style.display = 'block';

    // Redirect ke WhatsApp
    window.location.href =
      "https://wa.me/6285217171948?text=Halo saya sudah pesan obat di ApotekAI";
  })
  .catch(error => {
    alert("Terjadi kesalahan!");
    console.error(error);
  });
});
