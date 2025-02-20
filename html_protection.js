// Proteksi dasar terhadap inspeksi elemen dan klik kanan document.addEventListener('contextmenu', event => event.preventDefault()); document.addEventListener('keydown', function(event) { if (event.ctrlKey && (event.key === 'u' || event.key === 's' || event.key === 'i')) { event.preventDefault(); } });

// Mengenkripsi konten HTML menggunakan Base64 function encryptContent(content) { return btoa(unescape(encodeURIComponent(content))); }

function decryptContent(content) { return decodeURIComponent(escape(atob(content))); }

// Simpan HTML terenkripsi di JavaScript const encryptedHTML = ""; // Isi dengan HTML terenkripsi

document.addEventListener("DOMContentLoaded", function() { document.body.innerHTML = decryptContent(encryptedHTML); });

// Proteksi terhadap hotlinking dan iframe embedding if (window.top !== window.self) { window.top.location = window.self.location; }

// Anti-blokir: Memuat ulang dengan Proxy jika diblokir function checkBlocked() { fetch(window.location.href, { method: 'HEAD' }) .then(response => { if (!response.ok) { window.location.href = https://cors-anywhere.herokuapp.com/${window.location.href}; } }) .catch(() => { window.location.href = https://cors-anywhere.herokuapp.com/${window.location.href}; }); }

window.onload = checkBlocked;