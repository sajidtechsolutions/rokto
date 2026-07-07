/* ==========================================================================
   BANGLADESH GEOGRAPHY DATASET (জেলা ও উপজেলা সমূহ)
   ========================================================================== */
const BD_GEOGRAPHY = {
  "ঢাকা": ["মিরপুর", "ধানমন্ডি", "গুলশান", "উত্তরা", "সাভার", "ধামরাই", "কেরানীগঞ্জ", "দোহার", "নবাবগঞ্জ", "খিলগাঁও", "মতিঝিল", "তেজগাঁও"],
  "চট্টগ্রাম": ["কোতোয়ালী", "হালিশহর", "পাঁচলাইশ", "ডবলমুরিং", "হাটহাজারী", "সীতাকুণ্ড", "মীরসরাই", "পটিয়া", "বোয়ালখালী", "আনোয়ারা", "চন্দনাইশ", "সন্দ্বীপ"],
  "সিলেট": ["সিলেট সদর", "বিয়ানীবাজার", "গোলাপগঞ্জ", "বালাগঞ্জ", "ফেঞ্চুগঞ্জ", "জকিগঞ্জ", "কানাইঘাট", "জৈন্তাপুর", "গোয়াইনঘাট", "কোম্পানীগঞ্জ"],
  "রাজশাহী": ["বোয়ালিয়া", "রাজপাড়া", "মতিহার", "শাহ মখদুম", "পবা", "গোদাগাড়ী", "তানোর", "বাঘা", "চারঘাট", "দুর্গাপুর", "পুঠিয়া"],
  "খুলনা": ["খুলনা সদর", "সোনাডাঙ্গা", "খালিশপুর", "দৌলতপুর", "রূপসা", "ডুমুরিয়া", "ফুলতলা", "বটিয়াঘাটা", "তেরখাদা", "দিঘলিয়া"],
  "বরিশাল": ["বরিশাল সদর", "বাবুগঞ্জ", "বাকেরগঞ্জ", "বানারীপাড়া", "গৌরনদী", "হিজলা", "মেহেন্দিগঞ্জ", "উজিরপুর", "মুলাদী"],
  "রংপুর": ["রংপুর সদর", "বদরগঞ্জ", "গঙ্গাচড়া", "কাউনিয়া", "মিঠাপুকুর", "পীরগাছা", "পীরগঞ্জ", "তয়রঙ্গপুর", "তারাগঞ্জ"],
  "ময়মনসিংহ": ["ময়মনসিংহ সদর", "মুক্তাগাছা", "গফরগাঁও", "ত্রিশাল", "ভালুকা", "ঈশ্বরগঞ্জ", "হালুয়াঘাট", "ফুলবাড়ীয়া", "নন্দাইল", "গৌরীপুর"],
  "কুমিল্লা": ["কুমিল্লা সদর", "লাকসাম", "চৌদ্দগ্রাম", "দেবিদ্বার", "দাউদকান্দি", "বরুড়া", "বুড়িচং", "চান্দিনা", "হোমনা", "মুরাদনগর"],
  "গাজীপুর": ["গাজীপুর সদর", "কালিয়াকৈর", "কালীগঞ্জ", "কাপাসিয়া", "শ্রীপুর"],
  "নারায়ণগঞ্জ": ["নারায়ণগঞ্জ সদর", "আড়াইহাজার", "বন্দর", "রূপগঞ্জ", "সোনারগাঁও"],
  "বগুড়া": ["বগুড়া সদর", "আدمদীঘি", "ধুনট", "দুপচাঁচিয়া", "গাবতলী", "কাহালু", "নন্দীগ্রাম", "সারিয়াকান্দি", "শেরপুর", "শিবগঞ্জ", "শাজাহানপুর"],
  "দিনাজপুর": ["দিনাজপুর সদর", "বীরগঞ্জ", "কাহারোল", "বোচাগঞ্জ", "বিরল", "চিরিরবন্দর", "পার্বতীপুর", "ফুলবাড়ী", "নবাবগঞ্জ", "বিরামপুর"],
  "ফেনী": ["ফেনী সদর", "দাগনভূঞা", "ছাগলনাইয়া", "পরশুরাম", "সোনাগাজী", "ফুলগাজী"],
  "কক্সবাজার": ["কক্সবাজার সদর", "চকোরিয়া", "মহেশখালী", "টেকনাফ", "উখিয়া", "রামু", "কুতুবদিয়া", "পেকুয়া"],
  "নোয়াখালী": ["নোয়াখালী সদর", "বেগমগঞ্জ", "চাটখিল", "কোম্পানীগঞ্জ", "হাতিয়া", "সেনবাগ", "সোনাইমুড়ী", "সুবর্ণচর", "কবিরহাট"],
  "টাঙ্গাইল": ["টাঙ্গাইল সদর", "বাসাইল", "ভূঞাপুর", "দেলদুয়ার", "ঘাটাইল", "গোপালপুর", "কালিহাতী", "মধুপুর", "মির্জাপুর", "নাগরপুর", "সখিপুর"],
  "যশোর": ["যশোর সদর", "অভয়নগর", "বাঘারপাড়া", "চৌগাছা", "ঝিকরগাছা", "কেশবপুর", "مণিরামপুর", "শার্শা"]
};

/* ==========================================================================
   INITIAL MOCK DATA (রিমুভ করা হয়েছে - ডাটাবেজ এখন সম্পূর্ণ খালি থেকে শুরু হবে)
   ========================================================================== */
const initialRequests = [];
const initialDonors = [];

const mockNames = ["রহিম উদ্দিন", "মোঃ তারেক", "জেসমিন আক্তার", "সাজিদুর রহমান", "তানজিলা হাসান", "শরিফুল ইসলাম", "মনিরা বেগম"];
const mockReasons = ["ডেলিভারি", "মেজর সার্জারি", "থ্যালাসেমিয়া", "অপারেশন", "ডায়ালাইসিস"];
const mockHospitals = ["জেনারেল হাসপাতাল", "আল-শেফা ক্লিনিক", "সিটি হাসপাতাল", "পপুলার মেডিকেল", "ইবনে সিনা"];

/* ==========================================================================
   APP STATE MANAGEMENT
   ========================================================================== */
const state = {
  currentUserLocation: {
    district: "বগুড়া",
    upazila: "বগুড়া সদর"
  },
  requests: [],
  donors: [],
  filters: {
    bloodGroup: "ALL"
  },
  activeResultsTab: "requests", // 'requests' or 'donors'
  currentTheme: "light" // White theme by default
};

/* ==========================================================================
   FIREBASE REALTIME DATABASE CONFIGURATION
   ========================================================================== */
const firebaseConfig = {
  apiKey: "AIzaSyCiBU55GVFNdhaGat0ZM_NGysUujsbCiHw",
  authDomain: "rokto-khujun.firebaseapp.com",
  projectId: "rokto-khujun",
  databaseURL: "https://rokto-khujun-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "rokto-khujun.firebasestorage.app",
  messagingSenderId: "621507987586",
  appId: "1:621507987586:web:9d99d6a557ac5912c0cc9b",
  measurementId: "G-12PGEM3FL1"
};

// Initialize Firebase using global Compat namespace
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

/* ==========================================================================
   LOCAL STATE PERSISTENCE (SETTINGS ONLY)
   ========================================================================== */
function loadLocalSettings() {
  const storedLocation = localStorage.getItem("roktotan_user_location");
  if (storedLocation) {
    state.currentUserLocation = JSON.parse(storedLocation);
  } else {
    // Default location (Bogura Sadar, Bogura)
    state.currentUserLocation = {
      district: "বগুড়া",
      upazila: "বগুড়া সদর"
    };
  }
  
  const storedTheme = localStorage.getItem("roktotan_theme");
  if (storedTheme) {
    state.currentTheme = storedTheme;
  } else {
    state.currentTheme = "light"; // White theme by default
  }
}

function saveLocalSettings() {
  localStorage.setItem("roktotan_user_location", JSON.stringify(state.currentUserLocation));
  localStorage.setItem("roktotan_theme", state.currentTheme);
}

/* ==========================================================================
   GEOGRAPHY DROPDOWNS CHAINING
   ========================================================================== */
function populateDistrictOptions(selectElement) {
  selectElement.innerHTML = "";
  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = selectElement.id === "user-district-select" ? "জেলা নির্বাচন করুন" : "জেলা";
  defaultOpt.disabled = true;
  defaultOpt.selected = true;
  selectElement.appendChild(defaultOpt);
  
  Object.keys(BD_GEOGRAPHY).sort().forEach(district => {
    const opt = document.createElement("option");
    opt.value = district;
    opt.textContent = district;
    selectElement.appendChild(opt);
  });
}

function populateUpazilas(district, upazilaSelect, defaultText = "উপজেলা") {
  upazilaSelect.innerHTML = "";
  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = defaultText;
  defaultOpt.disabled = true;
  defaultOpt.selected = true;
  upazilaSelect.appendChild(defaultOpt);
  
  if (district && BD_GEOGRAPHY[district]) {
    upazilaSelect.disabled = false;
    BD_GEOGRAPHY[district].sort().forEach(upazila => {
      const opt = document.createElement("option");
      opt.value = upazila;
      opt.textContent = upazila;
      upazilaSelect.appendChild(opt);
    });
  } else {
    upazilaSelect.disabled = true;
  }
}

function setupDropdownChaining() {
  const userDist = document.getElementById("user-district-select");
  const userUpa = document.getElementById("user-upazila-select");
  userDist.addEventListener("change", () => {
    populateUpazilas(userDist.value, userUpa, "উপজেলা নির্বাচন করুন");
  });
  
  const postDist = document.getElementById("post-district");
  const postUpa = document.getElementById("post-upazila");
  postDist.addEventListener("change", () => {
    populateUpazilas(postDist.value, postUpa, "উপজেলা");
  });

  const regDist = document.getElementById("reg-district");
  const regUpa = document.getElementById("reg-upazila");
  regDist.addEventListener("change", () => {
    populateUpazilas(regDist.value, regUpa, "উপজেলা");
  });
}

/* ==========================================================================
   DRAWER CONTROL SYSTEM (BOTTOM-SHEETS)
   ========================================================================== */
const backdrop = document.getElementById("drawer-backdrop");
const drawers = document.querySelectorAll(".bottom-sheet");

function openDrawer(drawerId) {
  closeAllDrawers();
  const drawer = document.getElementById(drawerId);
  if (drawer) {
    backdrop.classList.add("active");
    drawer.classList.add("open");
  }
}

function closeAllDrawers() {
  drawers.forEach(drawer => drawer.classList.remove("open"));
  backdrop.classList.remove("active");
}

function setupDrawerTriggers() {
  document.getElementById("location-pill-btn").addEventListener("click", () => {
    openDrawer("location-drawer");
    document.getElementById("user-district-select").value = state.currentUserLocation.district;
    populateUpazilas(state.currentUserLocation.district, document.getElementById("user-upazila-select"), "উপজেলা নির্বাচন করুন");
    document.getElementById("user-upazila-select").value = state.currentUserLocation.upazila;
  });
  
  document.getElementById("action-post-need-btn").addEventListener("click", () => {
    openDrawer("post-drawer");
  });
  
  document.getElementById("action-become-donor-btn").addEventListener("click", () => {
    openDrawer("donor-drawer");
  });

  backdrop.addEventListener("click", closeAllDrawers);
  document.getElementById("close-contact-drawer-btn").addEventListener("click", closeAllDrawers);
  
  document.querySelectorAll(".drag-handle").forEach(handle => {
    handle.addEventListener("click", closeAllDrawers);
  });
}

/* ==========================================================================
   LOCATION MATCHING & FEED RENDERING
   ========================================================================== */
function getMatchLevel(itemLocation, userLocation) {
  if (itemLocation.district === userLocation.district && itemLocation.upazila === userLocation.upazila) {
    return "perfect";
  } else if (itemLocation.district === userLocation.district) {
    return "district";
  }
  return "none";
}

function renderFeed() {
  const container = document.getElementById("mobile-feed-container");
  container.innerHTML = "";
  
  const selectedGroup = state.filters.bloodGroup;
  
  if (state.activeResultsTab === "requests") {
    let filtered = state.requests.filter(req => {
      return selectedGroup === "ALL" || req.bloodGroup === selectedGroup;
    });
    
    filtered.sort((a, b) => {
      const matchA = getMatchLevel(a, state.currentUserLocation);
      const matchB = getMatchLevel(b, state.currentUserLocation);
      const scoreMap = { "perfect": 3, "district": 2, "none": 1 };
      
      if (scoreMap[matchA] !== scoreMap[matchB]) {
        return scoreMap[matchB] - scoreMap[matchA];
      }
      if (a.urgency !== b.urgency) {
        return b.urgency ? 1 : -1;
      }
      return b.createdAt - a.createdAt;
    });
    
    document.getElementById("feed-count-badge-val").textContent = toBengaliNumber(filtered.length);
    document.getElementById("feed-title-txt").textContent = "সক্রিয় রক্তের অনুরোধসমূহ";
    
    if (filtered.length === 0) {
      container.innerHTML = `<div class="glass-panel p-5 text-center text-muted">কোনো রক্তের অনুরোধ পাওয়া যায়নি।</div>`;
      return;
    }
    
    filtered.forEach(req => {
      const match = getMatchLevel(req, state.currentUserLocation);
      let badgeHtml = "";
      let glowClass = "";
      
      if (match === "perfect") {
        badgeHtml = `<span class="card-match-badge badge-perfect">একই উপজেলা</span>`;
        glowClass = "glow-perfect";
      } else if (match === "district") {
        badgeHtml = `<span class="card-match-badge badge-district">একই জেলা</span>`;
        glowClass = "glow-district";
      } else {
        badgeHtml = `<span class="card-match-badge badge-other">অন্যান্য</span>`;
      }
      
      const relativeTime = getBengaliRelativeTime(req.createdAt);
      
      const card = `
        <div class="mobile-card glass-panel ${glowClass}">
          <div class="card-blood-badge">
            <span class="drop">🩸</span>
            <span class="group">${req.bloodGroup}</span>
          </div>
          <div class="card-main-details">
            <div class="card-top-header">
              <span class="card-patient-name">${req.patientName}</span>
              ${badgeHtml}
            </div>
            <p class="card-info-text"><i data-lucide="map-pin" size="12"></i> ${req.upazila}, ${req.district}</p>
            <p class="card-info-text"><i data-lucide="hospital" size="12"></i> ${req.hospital} • ${req.units} ব্যাগ</p>
            <p class="card-info-text" style="font-size:0.7rem; opacity:0.6;"><i data-lucide="clock" size="10"></i> ${relativeTime}</p>
          </div>
          <div class="card-btn-column">
            <button class="compact-call-btn" onclick="triggerCallDrawer('${req.patientName}', '${req.contact}')">
              <i data-lucide="phone"></i>
            </button>
          </div>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", card);
    });
    
  } else {
    let filtered = state.donors.filter(donor => {
      return (selectedGroup === "ALL" || donor.bloodGroup === selectedGroup) && donor.available;
    });
    
    filtered.sort((a, b) => {
      const matchA = getMatchLevel(a, state.currentUserLocation);
      const matchB = getMatchLevel(b, state.currentUserLocation);
      const scoreMap = { "perfect": 3, "district": 2, "none": 1 };
      
      if (scoreMap[matchA] !== scoreMap[matchB]) {
        return scoreMap[matchB] - scoreMap[matchA];
      }
      return a.name.localeCompare(b.name);
    });
    
    document.getElementById("feed-count-badge-val").textContent = toBengaliNumber(filtered.length);
    document.getElementById("feed-title-txt").textContent = "উপলব্ধ রক্তদাতাদের তালিকা";
    
    if (filtered.length === 0) {
      container.innerHTML = `<div class="glass-panel p-5 text-center text-muted">কোনো এভেইলএবল রক্তদাতা পাওয়া যায়নি।</div>`;
      return;
    }
    
    filtered.forEach(donor => {
      const match = getMatchLevel(donor, state.currentUserLocation);
      let badgeHtml = "";
      let glowClass = "";
      
      if (match === "perfect") {
        badgeHtml = `<span class="card-match-badge badge-perfect">একই উপজেলা</span>`;
        glowClass = "glow-perfect";
      } else if (match === "district") {
        badgeHtml = `<span class="card-match-badge badge-district">একই জেলা</span>`;
        glowClass = "glow-district";
      }
      
      const lastDonateText = donor.lastDonationDate 
        ? getBengaliDonationPeriod(donor.lastDonationDate) + " আগে দান করেছেন"
        : "দান করার জন্য প্রস্তুত";
      
      const card = `
        <div class="mobile-card glass-panel ${glowClass}">
          <div class="card-blood-badge" style="border-color: var(--color-green);">
            <span class="drop" style="filter: hue-rotate(120deg);">🩸</span>
            <span class="group" style="color: var(--color-green);">${donor.bloodGroup}</span>
          </div>
          <div class="card-main-details">
            <div class="card-top-header">
              <span class="card-patient-name">${donor.name}</span>
              ${badgeHtml}
            </div>
            <p class="card-info-text"><i data-lucide="map-pin" size="12"></i> ${donor.upazila}, ${donor.district}</p>
            <p class="card-info-text" style="font-size:0.75rem; color:var(--color-green); font-weight:600;"><i data-lucide="check" size="12"></i> ${lastDonateText}</p>
          </div>
          <div class="card-btn-column">
            <button class="compact-call-btn" style="background: var(--color-green); box-shadow:none;" onclick="triggerCallDrawer('${donor.name} (ডোনার)', '${donor.contact}')">
              <i data-lucide="phone"></i>
            </button>
          </div>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", card);
    });
  }
  
  lucide.createIcons();
}

function triggerCallDrawer(name, phone) {
  document.getElementById("contact-name-txt").textContent = name;
  const formatted = phone.replace(/(\d{5})(\d{6})/, "$1-$2");
  document.getElementById("contact-phone-display").textContent = formatted;
  document.getElementById("contact-tel-link").href = "tel:" + phone;
  openDrawer("contact-drawer");
}

/* ==========================================================================
   FIREBASE DATA SYNC LISTENERS (Compat Syntax)
   ========================================================================== */
function setupFirebaseSync() {
  // Listen to active blood requests
  db.ref("requests").on("value", (snapshot) => {
    const data = snapshot.val();
    if (data) {
      state.requests = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
    } else {
      state.requests = [];
    }
    renderFeed();
  }, (error) => {
    console.error("Firebase read error on requests:", error);
    alert("রক্তের অনুরোধ লোড করতে ব্যর্থ হয়েছে!\n\nত্রুটির বিবরণ: " + error.message + "\n\nঅনুগ্রহ করে নিশ্চিত করুন যে আপনার Firebase Realtime Database Rules-এ read এবং write পারমিশন true করা আছে।");
  });

  // Listen to registered donors
  db.ref("donors").on("value", (snapshot) => {
    const data = snapshot.val();
    if (data) {
      state.donors = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
    } else {
      state.donors = [];
    }
    renderFeed();
  }, (error) => {
    console.error("Firebase read error on donors:", error);
  });
}

/* ==========================================================================
   FORM SUBMISSIONS
   ========================================================================== */
function setupFormSubmissions() {
  // 1. SAVE USER SIMULATED LOCATION
  document.getElementById("save-location-btn").addEventListener("click", () => {
    const dist = document.getElementById("user-district-select").value;
    const upa = document.getElementById("user-upazila-select").value;
    
    if (dist && upa) {
      state.currentUserLocation.district = dist;
      state.currentUserLocation.upazila = upa;
      saveLocalSettings();
      
      document.getElementById("header-location-txt").textContent = `${upa}, ${dist}`;
      closeAllDrawers();
      renderFeed();
      showSuccessToast("অবস্থান সফলভাবে পরিবর্তন করা হয়েছে!");
    }
  });
  
  // 2. SUBMIT BLOOD REQUEST (saves directly to Firebase)
  const postForm = document.getElementById("post-request-form");
  postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const newReq = {
      patientName: document.getElementById("post-patient-name").value,
      bloodGroup: document.getElementById("post-blood-group").value,
      units: parseInt(document.getElementById("post-blood-units").value),
      needDate: document.getElementById("post-need-date").value,
      district: document.getElementById("post-district").value,
      upazila: document.getElementById("post-upazila").value,
      hospital: document.getElementById("post-hospital").value,
      contact: document.getElementById("post-contact").value,
      reason: document.getElementById("post-reason").value,
      urgency: true,
      createdAt: Date.now()
    };
    
    db.ref("requests").push().set(newReq)
      .then(() => {
        confetti({
          particleCount: 50,
          spread: 40,
          origin: { y: 0.8 },
          colors: ['#e53935', '#ffffff']
        });
        
        closeAllDrawers();
        postForm.reset();
        populateUpazilas("", document.getElementById("post-upazila"), "প্রথমে জেলা");
        
        document.getElementById("view-requests-toggle").click();
        state.filters.bloodGroup = newReq.bloodGroup;
        updateFilterGroupUI();
        showSuccessToast("আপনার রক্তের অনুরোধটি পোস্ট করা হয়েছে!");
      })
      .catch((error) => {
        console.error("Firebase write error on request post:", error);
        alert("ডাটাবেজে রক্তের অনুরোধ পোস্ট করতে ব্যর্থ হয়েছে!\n\nত্রুটির বিবরণ: " + error.message + "\n\nঅনুগ্রহ করে Firebase Console -> Realtime Database -> Rules ট্যাবে গিয়ে Rules পরিবর্তন করে read ও write পারমিশন true করে দিন:\n\n{\n  \"rules\": {\n    \".read\": true,\n    \".write\": true\n  }\n}");
      });
  });
  
  // 3. REGISTER AS A DONOR (saves directly to Firebase)
  const regForm = document.getElementById("donor-reg-form");
  regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const newDonor = {
      name: document.getElementById("reg-name").value,
      bloodGroup: document.getElementById("reg-blood-group").value,
      district: document.getElementById("reg-district").value,
      upazila: document.getElementById("reg-upazila").value,
      contact: document.getElementById("reg-contact").value,
      lastDonationDate: document.getElementById("reg-last-donate").value,
      available: document.getElementById("reg-available").checked
    };
    
    db.ref("donors").push().set(newDonor)
      .then(() => {
        state.currentUserLocation = { district: newDonor.district, upazila: newDonor.upazila };
        document.getElementById("header-location-txt").textContent = `${newDonor.upazila}, ${newDonor.district}`;
        saveLocalSettings();
        
        confetti({
          particleCount: 100,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#388e3c', '#ffffff']
        });
        
        closeAllDrawers();
        regForm.reset();
        populateUpazilas("", document.getElementById("reg-upazila"), "প্রথমে জেলা");
        
        document.getElementById("view-donors-toggle").click();
        state.filters.bloodGroup = newDonor.bloodGroup;
        updateFilterGroupUI();
        showSuccessToast("রক্তদাতা তালিকায় যুক্ত হওয়ার জন্য ধন্যবাদ!");
      })
      .catch((error) => {
        console.error("Firebase write error on donor registration:", error);
        alert("ডাটাবেজে রক্তদাতা তথ্য যোগ করতে ব্যর্থ হয়েছে!\n\nত্রুটির বিবরণ: " + error.message + "\n\nঅনুগ্রহ করে Firebase Console -> Realtime Database -> Rules ট্যাবে গিয়ে Rules পরিবর্তন করে read ও write পারমিশন true করে দিন:\n\n{\n  \"rules\": {\n    \".read\": true,\n    \".write\": true\n  }\n}");
      });
  });
}

function updateFilterGroupUI() {
  const pills = document.querySelectorAll("#blood-group-pills .blood-pill");
  pills.forEach(pill => {
    if (pill.getAttribute("data-group") === state.filters.bloodGroup) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
}

/* ==========================================================================
   FEED VIEW SWAPPING & FILTER BUTTONS
   ========================================================================== */
function setupFeedToggles() {
  const reqBtn = document.getElementById("view-requests-toggle");
  const donorBtn = document.getElementById("view-donors-toggle");
  
  reqBtn.addEventListener("click", () => {
    reqBtn.classList.add("active");
    donorBtn.classList.remove("active");
    state.activeResultsTab = "requests";
    renderFeed();
  });
  
  donorBtn.addEventListener("click", () => {
    donorBtn.classList.add("active");
    reqBtn.classList.remove("active");
    state.activeResultsTab = "donors";
    renderFeed();
  });
  
  const pills = document.querySelectorAll("#blood-group-pills .blood-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.filters.bloodGroup = pill.getAttribute("data-group");
      renderFeed();
    });
  });
}

/* ==========================================================================
   MOCK ALERTS AND PERSISTENT TOAST SYSTEM (pushes directly to Firebase)
   ========================================================================== */
function triggerSimulatedPost() {
  const groups = ["A+", "B+", "O+", "AB+", "O-", "A-", "B-"];
  const randomGroup = groups[Math.floor(Math.random() * groups.length)];
  
  const dist = state.currentUserLocation.district;
  const upazilaList = BD_GEOGRAPHY[dist] || BD_GEOGRAPHY["ঢাকা"];
  const randomUpazila = upazilaList[Math.floor(Math.random() * upazilaList.length)];
  
  const randomName = mockNames[Math.floor(Math.random() * mockNames.length)];
  const randomHospital = mockHospitals[Math.floor(Math.random() * mockHospitals.length)] + ", " + randomUpazila;
  
  const newReq = {
    patientName: randomName,
    bloodGroup: randomGroup,
    units: Math.floor(Math.random() * 2) + 1,
    needDate: new Date(Date.now() + 3600000 * 24).toISOString().split('T')[0],
    district: dist,
    upazila: randomUpazila,
    hospital: randomHospital,
    contact: "017" + Math.floor(10000000 + Math.random() * 90000000),
    reason: mockReasons[Math.floor(Math.random() * mockReasons.length)],
    urgency: true,
    createdAt: Date.now()
  };
  
  db.ref("requests").push().set(newReq)
    .then(() => {
      const toast = document.getElementById("global-toast");
      const textEl = document.getElementById("toast-text");
      const viewBtn = document.getElementById("toast-view-btn");
      
      textEl.textContent = `${randomUpazila} থেকে ${randomGroup} রক্ত প্রয়োজন! (${randomName})`;
      toast.classList.remove("hidden-element");
      
      const autoDismiss = setTimeout(() => {
        toast.classList.add("hidden-element");
      }, 6000);
      
      viewBtn.onclick = () => {
        clearTimeout(autoDismiss);
        toast.classList.add("hidden-element");
        
        document.getElementById("view-requests-toggle").click();
        state.filters.bloodGroup = randomGroup;
        updateFilterGroupUI();
        renderFeed();
      };
    })
    .catch((error) => {
      console.error("Firebase write error on simulated request post:", error);
    });
}

function showSuccessToast(message) {
  const toast = document.createElement("div");
  toast.style.position = "fixed";
  toast.style.bottom = "2rem";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.padding = "0.75rem 1.5rem";
  toast.style.background = "rgba(40, 100, 40, 0.95)";
  toast.style.border = "1px solid #388e3c";
  toast.style.color = "#ffffff";
  toast.style.borderRadius = "8px";
  toast.style.zIndex = "10000";
  toast.style.fontWeight = "600";
  toast.style.fontSize = "0.85rem";
  toast.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
  toast.style.animation = "slideDown 0.3s reverse forwards";
  
  toast.innerHTML = `<span style="margin-right:0.4rem;">✓</span> ${message}`;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = "fadeIn 0.3s reverse forwards";
    setTimeout(() => { toast.remove(); }, 300);
  }, 2500);
}

/* ==========================================================================
   THEME TOGGLER (ডার্ক/লাইট মোড)
   ========================================================================== */
function setupThemeToggler() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-icon");
  
  if (state.currentTheme === "dark") {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    themeIcon.setAttribute("data-lucide", "sun");
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    themeIcon.setAttribute("data-lucide", "moon");
  }
  lucide.createIcons();
  
  themeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      themeIcon.setAttribute("data-lucide", "moon");
      state.currentTheme = "light";
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      themeIcon.setAttribute("data-lucide", "sun");
      state.currentTheme = "dark";
    }
    saveLocalSettings();
    lucide.createIcons();
  });
}

/* ==========================================================================
   BENGALI CONVERTERS
   ========================================================================== */
function getBengaliRelativeTime(timestamp) {
  const diffMs = Date.now() - timestamp;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffMins < 1) return "এইমাত্র";
  if (diffMins < 60) return toBengaliNumber(diffMins) + " মিনিট আগে";
  if (diffHours < 24) return toBengaliNumber(diffHours) + " ঘণ্টা আগে";
  return toBengaliNumber(diffDays) + " দিন আগে";
}

function getBengaliDonationPeriod(dateString) {
  const lastDate = new Date(dateString);
  const diffMs = Date.now() - lastDate.getTime();
  const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30));
  
  if (diffMonths < 1) {
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    return toBengaliNumber(diffDays) + " দিন";
  }
  if (diffMonths < 12) {
    return toBengaliNumber(diffMonths) + " মাস";
  }
  const diffYears = Math.floor(diffMonths / 12);
  return toBengaliNumber(diffYears) + " বছর";
}

function toBengaliNumber(number) {
  const enNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const bnNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  
  return number.toString().split("").map(char => {
    const idx = enNumbers.indexOf(char);
    return idx !== -1 ? bnNumbers[idx] : char;
  }).join("");
}

/* ==========================================================================
   AMBIENT BLOOD DROP CANVAS PARTICLES
   ========================================================================== */
function initParticlesBackground() {
  const canvas = document.getElementById("particles-canvas");
  const ctx = canvas.getContext("2d");
  
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
  
  const particles = [];
  const maxParticles = 20;
  
  class Particle {
    constructor() {
      this.reset();
    }
    
    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 50;
      this.size = Math.random() * 3 + 1.5;
      this.speedY = -(Math.random() * 0.8 + 0.3);
      this.speedX = Math.random() * 0.2 - 0.1;
      this.opacity = Math.random() * 0.2 + 0.05;
    }
    
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      if (this.y < -50) this.reset();
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(229, 57, 53, ${this.opacity})`;
      ctx.fill();
    }
  }
  
  for (let i = 0; i < maxParticles; i++) {
    const p = new Particle();
    p.y = Math.random() * height;
    particles.push(p);
  }
  
  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  
  animate();
}

/* ==========================================================================
   APP INITIALIZATION
   ========================================================================== */
window.addEventListener("DOMContentLoaded", () => {
  loadLocalSettings();
  
  // Populate dropdown lists
  populateDistrictOptions(document.getElementById("user-district-select"));
  populateDistrictOptions(document.getElementById("post-district"));
  populateDistrictOptions(document.getElementById("reg-district"));
  
  // Set header text location
  document.getElementById("header-location-txt").textContent = 
    `${state.currentUserLocation.upazila}, ${state.currentUserLocation.district}`;
  
  // Bind events
  setupDropdownChaining();
  setupDrawerTriggers();
  setupFormSubmissions();
  setupFeedToggles();
  setupThemeToggler();
  initParticlesBackground();
  
  // Sync in real-time with Firebase Realtime Database
  setupFirebaseSync();
  
  // Mock alerts trigger
  document.getElementById("trigger-simulation-btn").addEventListener("click", () => {
    triggerSimulatedPost();
    confetti({
      particleCount: 20,
      spread: 30,
      origin: { y: 0.9 },
      colors: ['#e53935']
    });
  });
  
  lucide.createIcons();
});
