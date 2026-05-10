// --- (က) ဘာသာပြန်စာသားများ စုစည်းမှု ---
const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-services": "Our Services",
        "nav-portfolio": "Our Portfolio",
        "nav-contact": "Contact Us",
        "btn-login": "Login",
        "btn-signup": "Sign Up",
        "btn-contact": "Contact Us",
        "footer-location": "Myoma Market, Naypyidaw",
        "footer-desc": "We help your business succeed using cutting-edge AI technology and digital services.",
        "footer-quick-links": "Quick Links",
        "footer-contact-title": "Contact Us",
        // Contact Page သီးသန့်စာသားများ
        "contact-form-title": "Send Us a Message",
        "label-name": "Full Name",
        "label-email": "Email Address",
        "label-subject": "Subject",
        "label-message": "Message",
        "btn-send": "Send Message",
        "contact-info-title": "Contact Information",
        "info-address-label": "Address",
        "info-phone-label": "Phone",
        "info-email-label": "Email",
        "contact-sub-title": "We are here to assist you!",
        "contact-level-up": "Contact us now to level up your business! . . .",

        // Services Page သီးသန့်စာသားများ (ယခုထပ်ဖြည့်ထားသော အပိုင်း)
        "services-main-title": "Our Services",
        "service-1-title": "AI Chatbot Development",
        "service-1-desc": "Creating Smart AI Bots that provide 24/7 service for businesses.",
        "service-2-title": "Custom Software Solutions",
        "service-2-desc": "Developing various types of business software.",
        "service-3-title": "Web Development",
        "service-3-desc": "Creating fast and beautiful websites using FastAPI and modern technologies.",
        "service-4-title": "Mobile App Development",
        "service-4-desc": "Building mobile applications for both Android and iOS platforms.",
        "service-5-title": "AI Agent & Automation",
        "service-5-desc": "Systems that automate workflow using AI technology.",
        "service-6-title": "Tutorials & Digital Content",
        "service-6-desc": "Learn programming and AI automation through our exclusive video tutorials.",
        "btn-tutorial": "Watch Now"
    },
    mm: {
        "nav-home": "ပင်မစာမျက်နှာ",
        "nav-about": "ကျွန်ုပ်တို့အကြောင်း",
        "nav-services": "ဝန်ဆောင်မှုများ",
        "nav-portfolio": "လုပ်ဆောင်ချက်များ",
        "nav-contact": "ဆက်သွယ်ရန်",
        "btn-login": "ဝင်ရန်",
        "btn-signup": "အသစ်ဖွင့်ရန်",
        "btn-contact": "ဆက်သွယ်ရန်",
        "footer-location": "မြို့မဈေး၊ နေပြည်တော်",
        "footer-desc": "ကျွန်ုပ်တို့သည် ခေတ်မီ AI နည်းပညာနှင့် ဒစ်ဂျစ်တယ်ဝန်ဆောင်မှုများကို အသုံးပြု၍ သင်၏လုပ်ငန်းကို အောင်မြင်အောင် ကူညီပေးပါသည်။",
        "footer-quick-links": "လင့်ခ်များ",
        "footer-contact-title": "ဆက်သွယ်ရန်",
        // Contact Page သီးသန့်စာသားများ
        "contact-form-title": "သတင်းစကားပေးပို့ရန်",
        "label-name": "နာမည်အပြည့်အစုံ",
        "label-email": "အီးမေးလ်လိပ်စာ",
        "label-subject": "အကြောင်းအရာ",
        "label-message": "ပေးပို့လိုသောစာ",
        "btn-send": "ပေးပို့မည်",
        "contact-info-title": "ဆက်သွယ်ရန် အချက်အလက်",
        "info-address-label": "လိပ်စာ",
        "info-phone-label": "ဖုန်းနံပါတ်",
        "info-email-label": "အီးမေးလ်",
        "contact-sub-title": "ကျွန်ုပ်တို့က သင့်ကို ကူညီဖို့ ဒီမှာ ရှိနေပါတယ်",
        "contact-level-up": "သင်၏ စီးပွားရေးကို အဆင့်မြှင့်တင်ဖို့ အခုပဲ ကျွန်ုပ်တို့ကို ဆက်သွယ်လိုက်ပါ . . .",

        // Services Page သီးသန့်စာသားများ (ယခုထပ်ဖြည့်ထားသော အပိုင်း)
        "services-main-title": "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ",
        "service-1-title": "AI Chatbot ရေးဆွဲခြင်း",
        "service-1-desc": "စီးပွားရေးလုပ်ငန်းများအတွက် ၂၄ နာရီ ဝန်ဆောင်မှုပေးသော စမတ် AI Bot များ ဖန်တီးပေးခြင်း။",
        "service-2-title": "စိတ်ကြိုက် Software ရေးဆွဲခြင်း",
        "service-2-desc": "လုပ်ငန်းသုံး software အမျိုးမျိုးကို စိတ်ကြိုက်ရေးဆွဲပေးခြင်း။",
        "service-3-title": "Web Development",
        "service-3-desc": "FastAPI နှင့် ခေတ်မီနည်းပညာများကို အသုံးပြု၍ မြန်ဆန်လှပသော ဝဘ်ဆိုဒ်များ ဖန်တီးပေးခြင်း။",
        "service-4-title": "Mobile App ရေးဆွဲခြင်း",
        "service-4-desc": "Android နှင့် iOS နှစ်မျိုးလုံးအတွက် မိုဘိုင်း application များ ရေးဆွဲပေးခြင်း။",
        "service-5-title": "AI Agent နှင့် Automation",
        "service-5-desc": "AI နည်းပညာကို အသုံးပြု၍ လုပ်ငန်းစဉ်များကို အလိုအလျောက် လုပ်ဆောင်ပေးသော စနစ်များ။",
        "service-6-title": "သင်ခန်းစာများနှင့် ဒစ်ဂျစ်တယ် အကြောင်းအရာ",
        "service-6-desc": "ကျွန်ုပ်တို့၏ သီးသန့်ဗီဒီယို သင်ခန်းစာများမှတဆင့် programming နှင့် AI automation ကို လေ့လာပါ။",
        "btn-tutorial": "ယခုကြည့်ရှုမည်"
    }
};

// --- (ခ) Function များ ---

// ၁။ ဘာသာစကား ပြောင်းလဲပေးသည့် function
function updateContent(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    if (document.getElementById('lang-switch')) {
        document.getElementById('lang-switch').value = lang;
    }
}

// ၂။ လက်ရှိရောက်နေသည့် စာမျက်နှာကို Highlighting လုပ်ပေးသည့် function
function setActiveNavLink() {
    const currentLocation = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.nav-links li a');

    navLinks.forEach(link => {
        // href မှာပါတဲ့ စာသားနဲ့ လက်ရှိ URL တူမတူ စစ်တာပါ
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// --- (ဂ) Event Listeners (အလုပ်လုပ်ခိုင်းသည့်အပိုင်း) ---

// Language Switch Event
const langSwitch = document.getElementById('lang-switch');
if (langSwitch) {
    langSwitch.addEventListener('change', (e) => {
        const lang = e.target.value;
        localStorage.setItem('selectedLang', lang);
        updateContent(lang);
    });
}

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = body.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', newTheme);
    });
}

// စာမျက်နှာ စဖွင့်လိုက်တိုင်း Theme၊ Language နှင့် Active Link ကို စစ်ဆေးခြင်း
window.addEventListener('DOMContentLoaded', () => {
    // Theme စစ်ဆေးခြင်း
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    if (themeIcon) {
        themeIcon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Language စစ်ဆေးခြင်း
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    updateContent(savedLang);

    // Active Link စစ်ဆေးခြင်း
    setActiveNavLink();
});

// ၃။ QR Code ပုံကို Save လုပ်ခြင်းမှ ကာကွယ်ပေးသည့် Logic
function protectQRCode() {
    const qrImage = document.querySelector('#kpayModal img');
    if (qrImage) {
        // Right-click ပိတ်ခြင်း
        qrImage.addEventListener('contextmenu', (e) => e.preventDefault());

        // Mobile ဖုန်းများတွင် ဖိထားလျှင် ပေါ်လာသည့် Menu ကို ပိတ်ခြင်း
        qrImage.style.pointerEvents = 'none';
        qrImage.style.userSelect = 'none';
    }
}

// Modal ပွင့်လာတိုင်း အပေါ်က function ကို ခေါ်ပေးရန်
// မင်းရဲ့ tutorials.html ထဲက openModal() function ကို ဒီလိုလေး ပြင်ရေးပါ
function openModal() {
    const modal = document.getElementById("kpayModal");
    if (modal) {
        modal.style.display = "flex";
        protectQRCode(); // ပုံကို ကာကွယ်တဲ့ function ကို ဒီမှာ လှမ်းခေါ်လိုက်တာ
    }
}

function closeModal() {
    const modal = document.getElementById("kpayModal");
    if (modal) {
        modal.style.display = "none";
    }
}