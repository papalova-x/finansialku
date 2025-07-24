function loadPage(page) {
  console.log("Memuat halaman:", page); // ← debug info

  fetch(page)
    .then(res => {
      if (!res.ok) {
        console.error("Respon tidak OK:", res.status);
        throw new Error("Halaman tidak ditemukan");
      }
      return res.text();
    })
    .then(html => {
      document.getElementById("content").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("content").innerHTML = "<p class='text-center text-red-500'>Halaman gagal dimuat.</p>";
      console.error("Gagal memuat:", err);
    });
}
