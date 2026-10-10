"use strict";

document.documentElement.classList.add("js");

const series = [
  { title: "Secret Relationship", year: "27 Februari 2025", reason: "Seriesnya bikin amarah mensulut karena 1 orang disukai 3 orang yang dimana ke-3 orang ini memiliki kepribadian mereka sendiri, yang membuat penonton juga merasa kesal dan sedih campur jadi satu.]" },
  { title: "Double Helix", year: "8 Mei 2026", reason: "Series yang bikin kesel,marah,bingung jadi satu dalam satu series ini. kita diajak buat mikir hubungan mereka kedepannya gimana?. setelah menebak pun masih ada plot twist yang mendalam, sebenarnya seriesnya sedih cuman emang banyak bikin emosi." },
  { title: "Sammy's Children's Day", year: "13 Maret 2026", reason: "Series yang adem ayem suka banget, karena pasangannya gangster penguasa daerah bawah, dan lucunya malah jatuh cinta sama kutu buku dan kupptu buku pun suka dengannya dan dengan passion dunia bawah. pasangan dunia bawah juga sering masih cuek sama kutu buku, dan endingnya massih gantung." },
  { title: "The Next Prince", year: "3 Mei 2026", reason: "Series tentang kerajaan emang ga ada habisnya buat berkata bahwa ini bagus,hebat spektakuler dalam budget produyksi, terlebih hubungan disini dibangun dengan kuat dan cinta antara pengawal dan seorang anak raja menjadi cukup intens dan mereka saling melindungi satu sama lain, zeenunew emang nikah aja kalian." },
  { title: "Revenge Love", year: "16 Juni 2025", reason: "Series yang awalnya ingin dapat mantannya lagi , eh malah dapet pacar mantannya , mana mereka jadi satu terus malah jadi cinta satu sama lain, disisi lain juga ada seorang dokter yang dulunya juga trauma dengan hubungannya dulu, tetapi dia menemukan cintanya dan cintanya memberikan dia keyakinan dan kesempatan bahwa dia masih bisa untuk memiliki pacar. akhir dari cerita ini memang selalu indah dimana dunia mereka happy." },
  { title: "Your Sky", year: "17 November 2024", reason: "Series bikin aku suka thailand lebih mendalam , cinta mereka terbangun karena ketidaksengajaan yang mereka buat, yang akhirnya mereka pacaran beneran dan bikin hubungan yang lebih baik. walaupun awalnya ditolak karena perbedaan pendapat dengan orang tua mereka, tetapi berkat cinta, usaha dan dedikasi mereka, akhirnya mereka disetujui oleh keluarga mereka." },
  { title: "Love Upon a Time", year: "27 Maret2026", reason: "Series ini bikin aku tahu tentang sejarah ayutthaya di thailand, cerita phop yang kembali ke masa lalu saat ultah dia, lalu dia mengubah sejarah dirinya sendiri dari masa lalu. lalu kembali dengan hasil yang memuaskan dengan menemukan cintanya di masa lalu dan mereka pun di dunia sekarang bertemu lagi berkat mereka bereinkarnasi di kehidupan ini , dan mereka menikah dengan sah dan membangun kembali hubungan mereka dimasa kini, di masalalu mereka sulit menemukan cinta karena pandangan orang terdahulu berbeda dengan orang sekarang." },
  { title: "Khemjira", year: "9 Agustus 2025", reason: "Seriesnya mirip dengan loat, khem bereinkarnasi dan dia di dunia ini bisa melihat hantu yang menganggunya , khem akhirnya ke dukun untuk meminta agar hantunya tidak menganggu khem lagi, perjalanan itu membuat khem jatuh cinta dengan dukun, karena di masa lalu si khem suka dukunnya dan dikehidupan ini mereka juga sama suka walau awalnya dukun ga mau menerima cintanya, dan dukunnya jatuh cinta , sebelum itu mereka harus mengusir hantu bernama ramphung karena di umur 20 tahun khem harus mati ditangannya, setelah bersusah payah dukun akhirnya bisa mengalahkan ramphung dengan kekuatan biksu juga dan akhirnya mereka menikah dan mengadopsi anak." },
  { title: "Duang With You", year: "31 Januari 2026", reason: "Series cocok buat anak sma-kuliah, karena relate dengan kehidupan sekarang yang dimana , memang denial dengan perasaan dirinya sendiri, disini hubungan mereka lucu,cute- karena awalnya juga ada penolakan. setelah semua penolakan akhirnya mereka mau bersama selamanya dan dengan restu kedua orang tua mereka, mereka ingin ke hubungan yang serius , HIDUP TEETEEPOR." },
  { title: "Love for Lovce's Sake", year: "24 Januari 2024", reason: "Awalnya bingung series ini apa, ternyata seorang cha yeo woon di kehidupan ini ingin bunuh diri karena tidak kuat dengan tekanan dunia, pada akhirnya seorang bernama tae myung ha menyelamatkan dia sebelum berakhir, awalnya tae juga mengawali hubungan sekaligus ingin menutup hubungan dengannya dengan dalih akan membuat hidup cha yeo woon ribet dengan tae jika bersamanya- tetapi lagi-lagi kekuatan cinta mereka bersama lagi selamanya(udah rewatch dan masih suka bangetttt)." }
];

const films = [
  { title: "Avangers: Infinity War", year: "25 April2018", review: "Bagian dimana avangers/karakter di earth 616 dibuat acak-acak terutama sama thanos dan pasukan black order, saat itu semua kalah dengan jentikan snap dari thanos dan membuat film ini mahal karena perjuangan mengalahkan thanos sia-sia dan menjadi titik terkelam earth 616 saat itu." },
  { title: "Dr. Strange in the Multiverse of Madness", year: "6 Mei2022", review: "Karena aku sudah suka sama scarlet witch disini, jadi memang menurutku sebuah kemenangan dan kekalahan dimana scarlet witch dengan darkholdnya ingin bertemu dengan anaknya, tapi dengan menyebrangi multiverse lain, dan srange hanya bisa membantu untuk membawanya ketempat aman, dan memang film ini sedih juga karena scarlet witch mengorbankan dirinya juga untuk runtuh bersama dengan darkhold menghapus semua darkhold di semesta karena akhirnya dia sadar bahwa anak dia tidak menginginkan seorang ibu yang menjadi jahat hanya karena nafsu dan keinginan mutlak wanda. Part yang paling bikin aku suka sama scarlet witch saat di kamar taj, dengan kata-kata 'This is me, being, reasonable" },
  { title: "Avangers: End Game", year: "24 April 2019", review: "Saat sebuah harapan datang akibat ant-man datang ke dunia untuk mengajak yang lain melakukan snapping sekali lagi agar kehidupan kembali lagi dan akhirnya itu terjadi, tetapi invasi thanos pun datang sekali lagi untuk menggagalkan rencana para avangers. tetapi kali ini berbeda, karena para superhero bersatu melawan thanos dan itu kesan paling epic di dunia marvel, dan kesan mendalam saat tony stark mengorbankan dirinya untuk snap agar thanos dan psukannnya lenyap denga kata terakhir 'I am ironman', perjalanan inipun menjadi puncak emosional selama perjalanan 11 tahun oleh saga MCU, tetapi plot twist dari ini semua tony akhirnya malah menjadi villain dan akan menjadi doctor doom dan melawan para superhero saat Avangers: Doomsday nantinya." },
  { title: "The conjuring 2", year: "10 Juni 2016", review: "Kesan horor muncul dari adegan di ruang kerja Ed warren, saat Lorraine berhdapan dengan bayangan lukis valak. permainan banyangan dan kemunculuan sosok biarawati membuat penonton syok dan kaget yang berhasil juga membangun tensi psikologis yang luar biasa, terus film ini memang jadi seru karena jumpscare." },
  { title: "Kung-Fu Panda 3", year: "29 Januari 2016", review: "Momen paling epik saat po melawan kai dengan trik kecilnya, dan po bisa menang melawan kai, yang pada akhirnya po mengerti makan menjadi 'The Dragon Warrior' yang sesungguhnya. bukan meniru orang lain, melainkan merangkul identitasnya sebagai master kung fu, lalu mengajarkan hal tersebut kepada seluuruh panda di desa." }
];

const songs = [
  { title: "Dangerous woman", artist: "Ariana Grande", story: "lagu ini bikin aku tertarik sama gitar dan vokal dari ariana." },
  { title: "Berpayung Tuhan", artist: "Nadin Amizah", story: "saat beban terasa berat lagu ini menyelamatkanku dengan notasi yang tenang, lambat dan aku suka hal tu." },
  { title: "Driver License", artist: "Olivia Rodrigo", story: "ketika sedih, lagu ini selalu membuatku merasa tidak sendiri dan terasa beban itu hilang sementara." },
  { title: "Locked of heaven", artist: "Bruno Mars", story: "lagu ini memiliki melodi yang indah dan pesan yang dalam tentang cinta dan kehilangan yang akhirnya ada di surga." },
  { title: "Great Expectations", artist: "Sienna Spiro", story: "artis favoritku dan lagunya selalu ngena karena dia yang nyanyi." }
];

function createCard(item, index, category) {
  const card = document.createElement("article");
  card.className = `favorite-card ${category}-card reveal`;

  const imageWrap = document.createElement("div");
  imageWrap.className = "card-image image-frame";

  const image = document.createElement("img");
  const prefix = category === "music" ? "musik" : category;
  image.src = `assets/${prefix}/${prefix}-${index + 1}.jpg`;
  image.alt = category === "music"
    ? `Sampul lagu ${item.title}`
    : `Poster ${category === "series" ? "series" : "film"} ${item.title}`;
  image.loading = "lazy";
  imageWrap.append(image);

  const content = document.createElement("div");
  content.className = "card-content";

  const meta = document.createElement("span");
  meta.className = "card-meta";
  meta.textContent = category === "music" ? "Lagu pilihan" : item.year;
  content.append(meta);

  const title = document.createElement("h4");
  title.textContent = item.title;
  content.append(title);

  if (category === "music") {
    const artist = document.createElement("span");
    artist.className = "music-artist";
    artist.textContent = item.artist;
    content.append(artist);
  }

  const description = document.createElement("p");
  description.textContent = item.reason || item.review || item.story;
  content.append(description);

  card.append(imageWrap, content);
  return card;
}

function renderCards() {
  const collections = [
    ["series-grid", series, "series"],
    ["film-grid", films, "film"],
    ["music-grid", songs, "music"]
  ];

  for (const [containerId, items, category] of collections) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Elemen #${containerId} tidak ditemukan.`);
    }

    const fragment = document.createDocumentFragment();
    items.forEach((item, index) => fragment.append(createCard(item, index, category)));
    container.append(fragment);
  }
}

function setImageFallback(image) {
  const frame = image.closest(".image-frame");
  if (!frame || frame.querySelector(".image-fallback")) {
    return;
  }

  image.hidden = true;
  const fallback = document.createElement("div");
  fallback.className = "image-fallback";
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", `${image.alt}, gambar belum tersedia`);
  const label = document.createElement("span");
  label.textContent = "Foto belum tersedia";
  fallback.append(label);
  frame.append(fallback);
}

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (!(toggle instanceof HTMLButtonElement) || !(links instanceof HTMLElement)) {
    return;
  }

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu navigasi");
    links.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Buka menu navigasi" : "Tutup menu navigasi");
    links.classList.toggle("is-open", !isOpen);
  });

  links.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));
}

function setupActiveNavigation() {
  const sections = document.querySelectorAll("main section[id], .subsection-heading[id]");
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      navAnchors.forEach((anchor) => {
        anchor.classList.toggle("active", anchor.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-25% 0px -65% 0px" });

  sections.forEach((section) => observer.observe(section));
}

renderCards();
document.querySelectorAll(".image-frame img").forEach((image) => {
  image.addEventListener("error", () => setImageFallback(image), { once: true });
  if (image.complete && image.naturalWidth === 0) {
    setImageFallback(image);
  }
});
setupNavigation();
setupReveal();
setupActiveNavigation();
