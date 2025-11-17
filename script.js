// Daftar 33 provinsi
const PROVINCES = [
  "Aceh",
  "Sumatera Utara",
  "Sumatera Barat",
  "Riau",
  "Kepulauan Riau",
  "Jambi",
  "Sumatera Selatan",
  "Bangka Belitung",
  "Bengkulu",
  "Lampung",
  "DKI Jakarta",
  "Jawa Barat",
  "Banten",
  "Jawa Tengah",
  "DI Yogyakarta",
  "Jawa Timur",
  "Bali",
  "Nusa Tenggara Barat",
  "Nusa Tenggara Timur",
  "Kalimantan Barat",
  "Kalimantan Tengah",
  "Kalimantan Selatan",
  "Kalimantan Timur",
  "Sulawesi Utara",
  "Sulawesi Tengah",
  "Sulawesi Selatan",
  "Sulawesi Tenggara",
  "Gorontalo",
  "Sulawesi Barat",
  "Maluku",
  "Maluku Utara",
  "Papua",
  "Papua Barat"
];

// Data detail mobil dummy
const CAR_DETAILS = {
  car1: {
    name: "Toyota Avanza Veloz 1.5 AT",
    price: "Rp 245 jt",
    province: "Jawa Barat",
    city: "Bandung",
    status: "Bekas",
    category: "Passenger",
    cc: "1500 cc",
    year: "2019",
    transmission: "Automatic",
    km: "Km 45.000",
    brand: "Toyota",
    sellerType: "Dealer Resmi",
    description:
      "Toyota Avanza Veloz 1.5 AT tahun 2019, warna putih, pajak panjang, servis rutin bengkel resmi. Kondisi interior dan eksterior sangat terawat, siap pakai tanpa PR.",
    whatsapp: "08xx-xxxx-xxxx",
    heroText: "Avanza Veloz"
  },
  car2: {
    name: "Mitsubishi L300 Box",
    price: "Rp 215 jt",
    province: "DKI Jakarta",
    city: "Jakarta Timur",
    status: "Baru",
    category: "Commercial",
    cc: "2500 cc",
    year: "2025",
    transmission: "Manual",
    km: "0 Km",
    brand: "Mitsubishi",
    sellerType: "Dealer Resmi",
    description:
      "Mitsubishi L300 Box baru tahun 2025, cocok untuk usaha distribusi dan niaga. Unit ready stock, bisa kredit dan cash, garansi resmi pabrikan.",
    whatsapp: "08xx-xxxx-xxxx",
    heroText: "L300 Box"
  },
  car3: {
    name: "Honda Brio Satya E",
    price: "Rp 165 jt",
    province: "Bali",
    city: "Denpasar",
    status: "Bekas",
    category: "Passenger",
    cc: "1200 cc",
    year: "2021",
    transmission: "Automatic",
    km: "Km 25.000",
    brand: "Honda",
    sellerType: "Penjual User",
    description:
      "Honda Brio Satya E matic tahun 2021, warna kuning, pemakaian pribadi, kilometer rendah. Interior wangi, cocok untuk harian di dalam kota.",
    whatsapp: "08xx-xxxx-xxxx",
    heroText: "Brio Satya"
  }
};

// Inisialisasi dropdown provinsi (hanya kalau ada .province-select)
function populateProvinceSelects() {
  const selects = document.querySelectorAll(".province-select");
  if (selects.length > 0) {
    selects.forEach((select) => {
      PROVINCES.forEach((prov) => {
        const opt = document.createElement("option");
        opt.value = prov;
        opt.textContent = prov;
        select.appendChild(opt);
      });
    });
  }

  // Filter area (hanya di index)
  const filterSelect = document.getElementById("filter-province");
  if (filterSelect) {
    PROVINCES.forEach((prov) => {
      const opt = document.createElement("option");
      opt.value = prov;
      opt.textContent = prov;
      filterSelect.appendChild(opt);
    });
  }
}

// Switch Pembeli/Penjual (index)
function switchRole(role) {
  const buyerForm = document.getElementById("buyer-form");
  const sellerForm = document.getElementById("seller-form");
  const tabBuyer = document.getElementById("tab-buyer");
  const tabSeller = document.getElementById("tab-seller");

  if (!buyerForm || !sellerForm || !tabBuyer || !tabSeller) return;

  if (role === "buyer") {
    buyerForm.style.display = "block";
    sellerForm.style.display = "none";
    tabBuyer.classList.add("active");
    tabSeller.classList.remove("active");
  } else {
    buyerForm.style.display = "none";
    sellerForm.style.display = "block";
    tabBuyer.classList.remove("active");
    tabSeller.classList.add("active");
  }
}

// Toggle field dealer resmi
function toggleDealerFields(isDealer) {
  const dealerExtra = document.getElementById("dealer-extra");
  if (!dealerExtra) return;

  const fileInput = dealerExtra.querySelector('input[type="file"]');
  if (!fileInput) return;

  if (isDealer) {
    dealerExtra.style.display = "grid";
    fileInput.setAttribute("required", "required");
  } else {
    dealerExtra.style.display = "none";
    fileInput.removeAttribute("required");
  }
}

// Filter mobil berdasarkan area & status (index)
function filterCars() {
  const provinceSelect = document.getElementById("filter-province");
  const statusSelect = document.getElementById("filter-status");
  if (!provinceSelect || !statusSelect) return;

  const province = provinceSelect.value;
  const status = statusSelect.value;
  const cards = document.querySelectorAll(".car-card");

  cards.forEach((card) => {
    const cardProv = card.getAttribute("data-province");
    const cardStatus = card.getAttribute("data-status");
    const matchProv = province === "all" || province === cardProv;
    const matchStatus = status === "all" || status === cardStatus;
    card.style.display = matchProv && matchStatus ? "flex" : "none";
  });
}

// Simulasi verifikasi WhatsApp
function fakeVerifyWhatsapp() {
  alert(
    "Simulasi verifikasi WhatsApp.\n\nDi versi production, fitur ini bisa dihubungkan ke API WhatsApp / OTP."
  );
}

// Scroll ke section tertentu
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 70,
      behavior: "smooth"
    });
  }
}

// LOGIN MODAL
function openLoginModal() {
  const modal = document.getElementById("login-modal");
  if (!modal) return;
  modal.classList.remove("hidden");
}

function closeLoginModal() {
  const modal = document.getElementById("login-modal");
  if (!modal) return;
  modal.classList.add("hidden");
}

// Submit login (simulasi)
function setupLoginForm() {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const role = document.getElementById("login-role").value;
    const identity = document.getElementById("login-identity").value;
    alert(`Login simulasi berhasil sebagai ${role.toUpperCase()} dengan akun: ${identity}`);
    closeLoginModal();
  });
}

// INDEX -> pindah ke halaman detail
function goToDetail(carId) {
  window.location.href = "detail.html?id=" + encodeURIComponent(carId);
}

// DETAIL PAGE -> baca ?id= dari URL dan render
function renderDetailFromQuery() {
  // Pastikan ini memang di halaman detail (cek elemen detail-name)
  const nameEl = document.getElementById("detail-name");
  if (!nameEl) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const data = CAR_DETAILS[id];
  if (!data) {
    nameEl.textContent = "Mobil tidak ditemukan";
    const descEl = document.getElementById("detail-description");
    if (descEl) {
      descEl.textContent =
        "Data mobil yang kamu cari tidak ditemukan. Coba kembali ke halaman utama dan pilih mobil lain.";
    }
    return;
  }

  // Isi data ke elemen detail
  document.getElementById("detail-name").textContent = data.name;
  document.getElementById("detail-location").textContent = `${data.city}, ${data.province}`;
  document.getElementById("detail-price").textContent = data.price;
  document.getElementById("detail-status").textContent = data.status;
  document.getElementById("detail-category").textContent = data.category;
  document.getElementById("detail-cc").textContent = data.cc;
  document.getElementById("detail-year").textContent = data.year;
  document.getElementById("detail-transmission").textContent = data.transmission;
  document.getElementById("detail-km").textContent = data.km;
  document.getElementById("detail-brand").textContent = data.brand;
  document.getElementById("detail-seller-type").textContent = data.sellerType;
  document.getElementById("detail-province").textContent = data.province;
  document.getElementById("detail-city").textContent = data.city;
  document.getElementById("detail-description").textContent = data.description;
  document.getElementById("detail-whatsapp").textContent = data.whatsapp;
  document.getElementById("detail-hero-text").textContent = data.heroText;
}

// INIT (jalan di kedua halaman)
document.addEventListener("DOMContentLoaded", () => {
  populateProvinceSelects(); // kalau tidak ada form, dia diam saja
  filterCars();              // kalau tidak ada filter, dia diam saja
  setupLoginForm();          // untuk modal login di dua halaman
  renderDetailFromQuery();   // hanya aktif di detail.html
});
