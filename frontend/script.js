// --- (က) ဘာသာပြန်စာသားများ စုစည်းမှု ---
const translations = {
    en: {
        // --- Nav Bar ---
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-services": "Our Services",
        "nav-portfolio": "Our Portfolio",
        "nav-contact": "Contact Us",
        "btn-get-started": "Login with Google",
        "btn-contact": "Contact Us",

        // --- Home Page (Hero Section) --- 
        "home-title": "Welcome to <br> AI & Digital Solutions",
        "home-subtitle": "Empower your business with cutting-edge technology",
        "btn-get-started": "Get Started",

        // --- Stats Section --- 
        "stat-projects": "70+",
        "stat-projects-text": "Projects",
        "stat-clients": "80+",
        "stat-clients-text": "Clients",
        "stat-exp": "7+",
        "stat-exp-text": "Years Exp",

        // --- About Us Page --- 
        "about-exp-num": "10+",
        "about-exp-text": "Years Experience",
        "about-sub-title": "About Us",
        "about-main-title": "AI & Digital Solutions",
        "about-desc": "We are an organization creating high-quality software, mobile applications, and digital services. Our mission is to help your business grow using modern technology.",

        // --- Team Section --- 
        "team-sub-title": "TEAM",
        "team-title": "Our Team Members",
        "team-1-name": "DR.Hein Htun",
        "team-1-role": "CEO",
        "team-2-name": "MR.Thein Htike Swe",
        "team-2-role": "Developer",
        "team-3-name": "MR.Aung Kyaw San",
        "team-3-role": "Developer",
        "team-4-name": "DR.Naing Zaw Aung",
        "team-4-role": "Software Engineer",
        "team-5-name": "MR.Lwin Moe",
        "team-5-role": "AI Specialist",

        // --- Services Page ---
        "services-main-title": "Our Services",
        "service-1-title": "Premium Subscriptions & Payment Solutions",
        "service-1-desc": "Easily subscribe to CapCut, Canva and global services without a credit card.",
        "service-2-title": "Custom Software Solutions",
        "service-2-desc": "Developing various types of business software.",
        "service-3-title": "Web Development",
        "service-3-desc": "Creating beautiful websites using modern technologies.",
        "service-4-title": "Database & Cloud Solutions",
        "service-4-desc": "Reliable database architecture and cloud server setup for your business needs.",
        "service-5-title": "AI Agent & Automation",
        "service-5-desc": "Systems that automate workflow using AI technology.",
        "service-6-title": "Tutorial Contents",
        "service-6-desc": "Learn programming and AI automation through our exclusive video tutorials.",
        "btn-tutorial": "Watch Now",

        // --- Contact Page ---
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

        // --- Web Development Page ---
        "web-dev-title": "Web Development Services",
        "web-dev-subtitle": "Creating beautiful websites using modern technologies",
        "btn-discuss": "Discuss Details →",
        "back-to-services": "Back to Services",

        // --- Web Card စာသားများ ---
        "web-card-1": "We will create the best corporate website for your business to take its place in the digital world.",
        "web-card-2": "We will create the best e-commerce website for your online store to sell products.",
        "web-card-3": "We will build a professional hotel and booking system website for your business.",
        "web-card-4": "We will create an advanced Learning Management System for your education business.",
        "web-card-5": "We will create a stunning portfolio and personal website to showcase your work.",
        "web-card-6": "We will design high-converting marketing landing pages for your business.",

        // --- Premium Card စာသားများ ---
        "premium-main-title": "Premium Subscriptions",
        "capcut-promo-desc": "Special promotion for the first month.",
        "capcut-monthly-desc": "Regular monthly subscription from the second month.",
        "capcut-yearly-desc": "Full year subscription with advance payment.",
        "canva-promo-desc": "Special promotion price for the first month.",
        "canva-monthly-desc": "Regular monthly price starting from the second month.",
        "canva-yearly-desc": "One-year subscription with advance payment.",
        "outline-promo-desc": "Special promotion price for the first month.",
        "outline-monthly-desc": "Regular monthly subscription fee.",
        "outline-yearly-desc": "Full year subscription with advance payment.",
        "midjourney-promo-desc": "Special promotion price for the first month.",
        "midjourney-monthly-desc": "Regular monthly subscription fee starting from 2nd month.",
        "midjourney-yearly-desc": "Full year subscription with advance payment.",
        "chatgpt-promo-desc": "Special promotion prices for the first month.",
        "chatgpt-monthly-desc": "Regular monthly subscription fees.",
        "chatgpt-yearly-desc": "Advance payment for a full year.",
        "not-available": "Not available for all three plans yet.",
        "zoom-promo-title": "Zoom Pro (Promo)",
        "zoom-promo-desc": "Special promotion price for the first month.",
        "zoom-monthly-title": "Zoom Pro (Monthly)",
        "zoom-monthly-desc": "Regular monthly price starting from the second month.",
        "zoom-yearly-title": "Zoom Pro (Yearly)",
        "zoom-yearly-desc": "One-year subscription with advance payment.",

        // --- AI Agent Card စာသားများ ---
        "automation-main-title": "Custom AI Agents & Workflow Automation",
        "automation-main-desc": "We build AI-driven systems to automate your business processes, saving time and significantly increasing efficiency through cutting-edge technology.",
        "ai-card-1-title": "Customer Support Agent",
        "ai-card-1-desc": "AI system that automatically responds to customer inquiries 24/7 like a human.",
        "ai-card-2-title": "Sales & Lead Generation",
        "ai-card-2-desc": "System that finds targeted customers and automatically records sales processes.",
        "ai-card-3-title": "Data Entry Automation",
        "ai-card-3-desc": "AI system that inputs complex data and spreadsheets accurately and quickly.",

        // --- Database & Cloud Card စာသားများ ---
        "db-main-desc": "We provide secure, scalable database architectures and cloud server deployments tailored to your business operations.",
        "db-card-1-title": "POS & ERP Database Systems",
        "db-card-1-desc": "Efficient and secure database structures designed specifically for Point of Sale and Enterprise Resource Planningsoftware",
        "db-card-2-title": "Cloud Server Setup & Management",
        "db-card-2-desc": "Setting up and maintaining reliable cloud infrastructures using modern platforms like AWS, Google Cloud, and DigitalOcean",
        "db-card-3-title": "Custom Database Architecture",
        "db-card-3-desc": "Designing customized, highly scalable database structures and APIs to manage complex business data securely.",

        // --- Software Card စာသားများ ---
        "software-page-title": "Custom Software Solutions",
        "sw-card-1-title": "Enterprise & School Management",
        "sw-card-1-desc": "Developing tailor-made business software, private school systems, and employee attendance management systems.",
        "sw-card-2-title": "Mobile Application Development",
        "sw-card-2-desc": "Creating modern and user-friendly mobile applications for both Android and iOS platforms.",
        "sw-card-3-title": "POS & Retail Solutions",
        "sw-card-3-desc": "Building efficient Point of Sale (POS) and inventory management systems for retail stores and warehouses.",

        // --- Payment စာသားများ ---
        "btn-buy-now": "Buy Now",
        "payment-title": "Payment Methods",
        "payment-subtitle": "Please send screenshot to Telegram after payment",
        "payment-warning": "* Please check the name carefully before transferring *",
        "btn-notify-payment": "Notify Payment Made",
        "btn-back-services": "Back to Services",

        // --- Footer ---
        "footer-location": "Myoma Market, Naypyidaw",
        "footer-desc": "We help your business succeed using cutting-edge AI technology and digital services.",
        "footer-quick-links": "Quick Links",
        "footer-contact-title": "Contact Us"
    },
    mm: {
        // --- Nav Bar ---
        "nav-home": "ပင်မစာမျက်နှာ",
        "nav-about": "ကျွန်ုပ်တို့အကြောင်း",
        "nav-services": "ဝန်ဆောင်မှုများ",
        "nav-portfolio": "လုပ်ဆောင်ချက်များ",
        "nav-contact": "ဆက်သွယ်ရန်",
        "btn-get-started": "Google ဖြင့် ဝင်မည်",
        "btn-contact": "ဆက်သွယ်ရန်",

        // --- Home Page (Hero Section) ---
        "home-title": "AI & Digital Solutions မှ <br> ကြိုဆိုပါတယ်",
        "home-subtitle": "ခေတ်မီနည်းပညာများဖြင့် သင်၏စီးပွားရေးကို အဆင့်မြှင့်တင်လိုက်ပါ။",
        "btn-get-started": "စတင်မည်",

        // --- Stats Section --- 
        "stat-projects": "၇၀+",
        "stat-projects-text": "ပရောဂျက်များ",
        "stat-clients": "၈၀+",
        "stat-clients-text": "ဖောက်သည်များ",
        "stat-exp": "၇+",
        "stat-exp-text": "နှစ် အတွေ့အကြုံ",

        // --- About Us Page ---
        "about-exp-num": "၁၀+",
        "about-exp-text": "နှစ် အတွေ့အကြုံ",
        "about-sub-title": "ကျွန်ုပ်တို့အကြောင်း",
        "about-main-title": "AI & Digital Solutions",
        "about-desc": "ကျွန်ုပ်တို့သည် အရည်အသွေးမြင့် ဆော့ဖ်ဝဲလ်များ၊ မိုဘိုင်းအက်ပလီကေးရှင်းများနှင့် ဒစ်ဂျစ်တယ်ဝန်ဆောင်မှုများကို ဖန်တီးပေးနေသော အဖွဲ့အစည်းဖြစ်ပါသည်။ ခေတ်မီနည်းပညာများကို အသုံးပြု၍ သင်၏စီးပွားရေးလုပ်ငန်း တိုးတက်အောင် ကူညီပေးရန်မှာ ကျွန်ုပ်တို့၏ ရည်ရွယ်ချက်ဖြစ်ပါသည်။",

        // --- Team Section --- 
        "team-sub-title": "အဖွဲ့",
        "team-title": "ကျွန်ုပ်တို့၏ အဖွဲ့ဝင်များ",
        "team-1-name": "DR.Hein Htun",
        "team-1-role": "CEO",
        "team-2-name": "MR.Thein Htike Swe",
        "team-2-role": "Developer",
        "team-3-name": "MR.Aung Kyaw San",
        "team-3-role": "Developer",
        "team-4-name": "DR.Naing Zaw Aung",
        "team-4-role": "Software Engineer",
        "team-5-name": "MR.Lwin Moe",
        "team-5-role": "AI Specialist",

        // --- Services Page ---
        "services-main-title": "ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ",
        "service-1-title": "Premium Subscriptions & Payment Solutions",
        "service-1-desc": "CapCut, Canva နှင့် အခြား Premium ဝန်ဆောင်မှုများကို Credit Card မလိုဘဲ ဝယ်ယူနိုင်ပါသည်။",
        "service-2-title": "Software ရေးဆွဲခြင်း",
        "service-2-desc": "လုပ်ငန်းသုံး software အမျိုးမျိုးကို စိတ်ကြိုက်ရေးဆွဲပေးခြင်း။",
        "service-3-title": "Web Development",
        "service-3-desc": "ခေတ်မီနည်းပညာများကို အသုံးပြု၍ လှပသော ဝဘ်ဆိုဒ်များ ဖန်တီးပေးခြင်း။",
        "service-4-title": "Database နှင့် Cloud ဝန်ဆောင်မှုများ",
        "service-4-desc": "သင့်လုပ်ငန်းအတွက် စိတ်ချယုံကြည်ရသော Database နှင့် Cloud Server များ တည်ဆောက်ပေးခြင်း။",
        "service-5-title": "AI Agent နှင့် Automation",
        "service-5-desc": "AI နည်းပညာကို အသုံးပြု၍ လုပ်ငန်းစဉ်များကို အလိုအလျောက် လုပ်ဆောင်ပေးသော စနစ်များ။",
        "service-6-title": "သင်ခန်းစာ အကြောင်းအရာများ",
        "service-6-desc": "ကျွန်ုပ်တို့၏ သီးသန့်ဗီဒီယို သင်ခန်းစာများမှတဆင့် programming နှင့် AI automation ကို လေ့လာပါ။",
        "btn-tutorial": "ယခုကြည့်ရှုမည်",

        // --- Contact Page ---
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

        // --- Web Development Page ---
        "web-dev-title": "Web Development ဝန်ဆောင်မှုများ",
        "web-dev-subtitle": "ခေတ်မီနည်းပညာများကို အသုံးပြု၍ လှပသော ဝဘ်ဆိုဒ်များကို ဖန်တီးပေးခြင်း",
        "btn-discuss": "အသေးစိတ် ဆွေးနွေးရန် →",
        "back-to-services": "ဝန်ဆောင်မှုများသို့ ပြန်သွားရန်",

        // --- Web Card စာသားများ ---
        "web-card-1": "သင့်လုပ်ငန်းကို ဒီဂျစ်တယ်ကမ္ဘာမှာ နေရာယူနိုင်ဖို့ ကိုယ်ပိုင်လုပ်ငန်းသုံး Website ကို အကောင်းဆုံး ဖန်တီးပေးပါမည်။",
        "web-card-2": "သင့်လုပ်ငန်းကို ဒီဂျစ်တယ်ကမ္ဘာမှာ နေရာယူနိုင်ဖို့ အွန်လိုင်းအရောင်းဆိုင် Website ကို အကောင်းဆုံး ဖန်တီးပေးပါမည်။",
        "web-card-3": "သင့်လုပ်ငန်းကို ဒီဂျစ်တယ်ကမ္ဘာမှာ နေရာယူနိုင်ဖို့ ဟိုတယ်နှင့် ဘိုကင်စနစ် Website ကို အကောင်းဆုံး ဖန်တီးပေးပါမည်။",
        "web-card-4": "သင့်လုပ်ငန်းကို ဒီဂျစ်တယ်ကမ္ဘာမှာ နေရာယူနိုင်ဖို့ ပညာရေးနှင့် သင်တန်း Website ကို အကောင်းဆုံး ဖန်တီးပေးပါမည်။",
        "web-card-5": "သင့်လုပ်ငန်းကို ဒီဂျစ်တယ်ကမ္ဘာမှာ နေရာယူနိုင်ဖို့ ကိုယ်ရေးအကျဉ်းနှင့် ပြခန်း Website ကို အကောင်းဆုံး ဖန်တီးပေးပါမည်။",
        "web-card-6": "သင့်လုပ်ငန်းကို ဒီဂျစ်တယ်ကမ္ဘာမှာ နေရာယူနိုင်ဖို့ အရောင်းမြှင့်တင်ရေး Landing Page ကို အကောင်းဆုံး ဖန်တီးပေးပါမည်။",

        // --- Premium Card စာသားများ ---
        "premium-main-title": "Premium ဝန်ဆောင်မှုများ",
        "capcut-promo-desc": "ပထမဆုံးလအတွက် အထူး Promotion ဈေးနှုန်း။",
        "capcut-monthly-desc": "ဒုတိယလမှစတင်၍ ပုံမှန်လစဉ်ကြေး။",
        "capcut-yearly-desc": "တစ်နှစ်စာလုံးအတွက် ကြိုတင်ပေးချေမှု။",
        "canva-promo-desc": "ပထမဆုံးလအတွက် အထူး Promotion ဈေးနှုန်း။",
        "canva-monthly-desc": "ဒုတိယလမှစတင်၍ ပုံမှန်လစဉ်ကြေး။",
        "canva-yearly-desc": "တစ်နှစ်စာလုံးအတွက် ကြိုတင်ပေးချေမှု။",
        "outline-promo-desc": "ပထမဆုံးလအတွက် အထူး Promotion ဈေးနှုန်း။",
        "outline-monthly-desc": "ဒုတိယလမှစတင်၍ ပုံမှန်လစဉ်ကြေး။",
        "outline-yearly-desc": "တစ်နှစ်စာလုံးအတွက် ကြိုတင်ပေးချေမှု။",
        "midjourney-promo-desc": "ပထမဆုံးလအတွက် အထူး Promotion ဈေးနှုန်း။",
        "midjourney-monthly-desc": "ဒုတိယလမှစတင်၍ ပုံမှန်လစဉ်ကြေး။",
        "midjourney-yearly-desc": "တစ်နှစ်စာလုံးအတွက် ကြိုတင်ပေးချေမှု။",
        "chatgpt-promo-desc": "ပထမဆုံးလအတွက် အထူး Promotion ဈေးနှုန်းများ။",
        "chatgpt-monthly-desc": "ဒုတိယလမှစတင်၍ ပုံမှန်လစဉ်ကြေးများ။",
        "chatgpt-yearly-desc": "တစ်နှစ်စာလုံးအတွက် ကြိုတင်ပေးချေမှု။",
        "not-available": "Plan သုံးခုလုံးအတွက် မရရှိနိုင်သေးပါ",
        "zoom-promo-title": "Zoom Pro (Promo)",
        "zoom-promo-desc": "ပထမဆုံးလအတွက် အထူး Promotion ဈေးနှုန်း။",
        "zoom-monthly-title": "Zoom Pro (Monthly)",
        "zoom-monthly-desc": "ဒုတိယလမှစတင်၍ ပုံမှန်လစဉ်ကြေး။",
        "zoom-yearly-title": "Zoom Pro (Yearly)",
        "zoom-yearly-desc": "တစ်နှစ်စာလုံးအတွက် ကြိုတင်ပေးချေမှု။",

        // --- AI Agent Card စာသားများ ---
        "automation-main-title": "Custom AI Agents & Workflow Automation",
        "automation-main-desc": "သင့်လုပ်ငန်း၏ နေ့စဉ်လုပ်ငန်းဆောင်တာများကို AI အသုံးပြု၍ အလိုအလျောက် (Automation) ပြုလုပ်ပေးခြင်းဖြင့် အချိန်ကုန်သက်သာစေပြီး ထိရောက်မှု (Efficiency) ကို အဆမတန် မြှင့်တင်ပေးနိုင်မည့် စနစ်များကို ဖန်တီးပေးပါသည်။",
        "ai-card-1-title": "Customer Support Agent",
        "ai-card-1-desc": "ဖောက်သည်များ၏ မေးမြန်းချက်များကို ၂၄ နာရီပတ်လုံး လူသားကဲ့သို့ အလိုအလျောက် တုံ့ပြန်ဖြေကြားပေးမည့် AI စနစ်။",
        "ai-card-2-title": "Sales & Lead Generation",
        "ai-card-2-desc": "အရောင်းလုပ်ငန်းစဉ်များတွင် ပစ်မှတ်ထားသော Customer များကို ရှာဖွေပေးပြီး အလိုအလျောက် မှတ်တမ်းတင်ပေးမည့် စနစ်။",
        "ai-card-3-title": "Data Entry Automation",
        "ai-card-3-desc": "ရှုပ်ထွေးသော အချက်အလက်များနှင့် စာရင်းဇယားများကို AI ဖြင့် တိကျမြန်ဆန်စွာ အလိုအလျောက် ရိုက်သွင်းပေးမည့် စနစ်။",

        // --- Database & Cloud Card စာသားများ ---
        "db-main-desc": "သင့်စီးပွားရေးလုပ်ငန်းများ လုံခြုံချောမွေ့စွာ လည်ပတ်နိုင်ရန် အဆင့်မြင့် Database စနစ်များနှင့် Cloud Server များကို စိတ်ကြိုက်တည်ဆောက်ပေးပါသည်။",
        "db-card-1-title": "POS & ERP Database စနစ်များ",
        "db-card-1-desc": "အရောင်းဆိုင်သုံး POS နှင့် လုပ်ငန်းသုံး ERP ဆော့ဖ်ဝဲလ်များအတွက် မြန်ဆန်လုံခြုံသော Database စနစ်များ ရေးဆွဲပေးခြင်း။",
        "db-card-2-title": "Cloud Server တည်ဆောက်ခြင်း",
        "db-card-2-desc": "လုံခြုံရေးမြင့်မားသော AWS, Google Cloud ကဲ့သို့ Cloud Server များ ချိတ်ဆက်တည်ဆောက်ပေးခြင်းနှင့် ထိန်းသိမ်းပေးခြင်း။",
        "db-card-3-title": " Database တည်ဆောက်ခြင်း",
        "db-card-3-desc": "ရှုပ်ထွေးသော အချက်အလက်များကို လုံခြုံစွာ သိမ်းဆည်းနိုင်ရန် Database နှင့် API စနစ်များကို တည်ဆောက်ပေးခြင်း။",

        // --- Software Card စာသားများ ---
        "software-page-title": "လုပ်ငန်းသုံး ဆော့ဝဲလ် ဝန်ဆောင်မှုများ",
        "sw-card-1-title": "ရုံးသုံး နှင့် ကျောင်းသုံးစနစ်များ",
        "sw-card-1-desc": "ရုံးသုံး ဆော့ဝဲများ၊ ကိုယ်ပိုင်ကျောင်းသုံးစနစ်များနှင့် ဝန်ထမ်းအဝင်အထွက် (Attendance) စောင့်ကြည့်စနစ်များကို သီးသန့်ဖန်တီးပေးပါသည်။",
        "sw-card-2-title": "Mobile Application ရေးဆွဲခြင်း",
        "sw-card-2-desc": "Android နှင့် iOS နှစ်မျိုးလုံးတွင် အသုံးပြုနိုင်သည့် ခေတ်မီပြီး အသုံးပြုရလွယ်ကူသော Mobile Application များကို ရေးဆွဲပေးပါသည်။",
        "sw-card-3-title": "POS နှင့် အရောင်းဆိုင်သုံးစနစ်များ",
        "sw-card-3-desc": "အရောင်းဆိုင်များ၊ Store ဆိုင်များအတွက် အထူးသင့်လျော်သော အရောင်းမှတ်တမ်းနှင့် ပစ္စည်းလက်ကျန်စာရင်း (Inventory) စနစ်များကို ဖန်တီးပေးပါသည်။",

        // --- Payment စာသားများ ---
        "btn-buy-now": "ဝယ်ယူရန်",
        "payment-title": "ငွေပေးချေမှုနည်းလမ်းများ",
        "payment-subtitle": "ငွေလွှဲပြီးပါက Telegram သို့ screenshot ပို့ပေးပါ",
        "payment-warning": "* ငွေမလွှဲခင် နာမည်ကို သေချာစစ်ဆေးပါ *",
        "btn-notify-payment": "ငွေလွှဲပြီးကြောင်း အကြောင်းကြားရန်",
        "btn-back-services": "ဝန်ဆောင်မှု သို့ပြန်သွားရန်",

        // --- Footer ---
        "footer-location": "မြို့မဈေး၊ နေပြည်တော်",
        "footer-desc": "ကျွန်ုပ်တို့သည် ခေတ်မီ AI နည်းပညာနှင့် ဒစ်ဂျစ်တယ်ဝန်ဆောင်မှုများကို အသုံးပြု၍ သင်၏လုပ်ငန်းကို အောင်မြင်အောင် ကူညီပေးပါသည်။",
        "footer-quick-links": "လင့်ခ်များ",
        "footer-contact-title": "ဆက်သွယ်ရန်"
    }
};
// --- (ခ) ဘာသာစကားပြောင်းလဲပေးသည့် Function ---
function changeLanguage(lang) {
    localStorage.setItem("selected_lang", lang);
    if (typeof translations !== 'undefined' && translations[lang]) {
        // HTML ထဲက data-key ကိုပဲ ဖတ်ပြီး ပြောင်းလဲပေးမှာပါ
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }
}

// --- (ဂ) Kpay Modal ပွင့်ရန် Logic ---
function openModal() {
    const modal = document.getElementById("kpayModal");
    if (modal) {
        modal.style.display = "flex";
        // QR Code Copy ကာကွယ်ခြင်း
        const qrImage = modal.querySelector('img');
        if (qrImage) {
            qrImage.oncontextmenu = (e) => e.preventDefault();
            qrImage.style.pointerEvents = 'auto'; // နှိပ်လို့ရအောင် auto ပြန်ထားမယ်
        }
    }
}

function closeModal() {
    const modal = document.getElementById("kpayModal");
    if (modal) modal.style.display = "none";
}

// --- (ဃ) Google Auth, Modal & Navbar UI ---

// Page တွေမှာ Modal HTML မပါလာခဲ့ရင် အလိုအလျောက် ထည့်ပေးမယ့် Function
function ensureAuthModalExists() {
    if (!document.getElementById("auth-modal")) {
        const modalHTML = `
        <div id="auth-modal" class="modal" style="display:none;">
            <div class="modal-content">
                <span class="close-modal" id="close-auth-modal">&times;</span>
                <h2 style="margin-top:20px;">Welcome</h2>
                <p id="auth-modal-desc" style="color:#666; margin-bottom:20px;">Welcome to AI & DIGITAL SOLUTIONS. Please sign in to continue.</p>
                <div class="auth-options" style="display:flex; justify-content:center;">
                    <div id="google-login-btn"></div>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
}

function updateNavbarUI() {
    const userInfoStr = localStorage.getItem("user_info");
    const authContainer = document.getElementById("nav-auth-container");
    if (!authContainer) return;

    if (userInfoStr) {
        try {
            const userInfo = JSON.parse(userInfoStr);
            authContainer.innerHTML = `
                <div class="user-profile-nav" style="display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.1); padding: 5px 15px; border-radius: 50px;">
                    <img src="${userInfo.picture}" alt="User" style="width: 32px; height: 32px; border-radius: 50%; border: 2px solid #6244C5;">
                    <span style="font-weight: 500; font-size: 14px;">${userInfo.name}</span>
                    <button onclick="logout()" style="background: none; border: none; color: #ff4d4d; cursor: pointer; font-size: 12px; font-weight: bold; padding: 0;">Logout</button>
                </div>
            `;
        } catch (e) {
            console.error("Error parsing user info", e);
            authContainer.innerHTML = `<a href="#" class="btn-signup" id="open-auth-modal">Login with Google</a>`;
        }
    } else {
        authContainer.innerHTML = `<a href="#" class="btn-signup" id="open-auth-modal">Login with Google</a>`;
    }
}

function logout() {
    localStorage.removeItem("user_info");
    window.location.reload();
}

function handleCredentialResponse(response) {
    fetch("https://my-blog-5ygr.onrender.com/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: response.credential }),
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                localStorage.setItem("user_info", JSON.stringify(data.user));
                location.reload(); // Login ဝင်ပြီးရင် Page ကို Refresh လုပ်ပြီး Profile ပေါ်စေမည်
            }
        })
        .catch(err => console.error("Login error:", err));
}

function initGoogleAuth() {
    const btnContainer = document.getElementById("google-login-btn");
    if (typeof google !== 'undefined' && google.accounts && btnContainer) {
        google.accounts.id.initialize({
            client_id: "995318351629-vqhshj2i1h54g2gtdqkr62bdkuf9lgk4.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(btnContainer, { theme: "outline", size: "large", width: "300" });
    }
}

// --- (င) စာမျက်နှာစတင်ချိန်တွင် လုပ်ဆောင်မည့်အရာများ ---
document.addEventListener("DOMContentLoaded", function () {
    // Page တိုင်းမှာ Auth Modal အမြဲရှိနေအောင် သေချာလုပ်ပေးခြင်း
    ensureAuthModalExists();

    // ၁။ ဘာသာစကား စတင်သတ်မှတ်ခြင်း
    const savedLang = localStorage.getItem("selected_lang") || "en";
    const langSwitch = document.getElementById("lang-switch");
    if (langSwitch) {
        langSwitch.value = savedLang;
        langSwitch.addEventListener("change", (e) => changeLanguage(e.target.value));
    }
    changeLanguage(savedLang);

    // ၂။ Login UI & Theme
    updateNavbarUI();
    initGoogleAuth();

    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // ၃။ Modal များကို အပြင်ဘက်ကနေ နှိပ်ရင် ပိတ်ပေးရန် နှင့် Event Listeners
    window.addEventListener("click", (e) => {
        const authModal = document.getElementById("auth-modal");
        const kpayModal = document.getElementById("kpayModal");

        // Open Auth Modal (Page တိုင်းမှာ အလုပ်လုပ်စေရန် closest ဖြင့်ဖမ်းခြင်း)
        if (e.target.closest("#open-auth-modal")) {
            e.preventDefault();
            if (authModal) {
                authModal.style.display = "block";
                initGoogleAuth(); // Modal ပွင့်လာမှ Button ကို အသစ်ပြန် render လုပ်ပေးမယ်
            }
        }

        // Close Modal with X button
        if (e.target.closest("#close-auth-modal")) {
            if (authModal) authModal.style.display = "none";
        }

        // Close Modal by clicking outside
        if (e.target === authModal) {
            authModal.style.display = "none";
        }

        if (e.target === kpayModal) {
            closeModal();
        }
    });
});

// --- (အသစ်ထည့်ရန်) Real-time Active Users by WebSocket ---
function initActiveUsersTracking() {

    // ==========================================
    // အောက်ပါ Option နှစ်ခုထဲမှ မိမိစမ်းသပ်လိုသော တစ်ခုကိုသာ ဖွင့်ထားပါ။
    // မသုံးချင်သော ကုဒ်စာကြောင်းရှေ့တွင် // ခံ၍ ပိတ်ထားပါ။
    // ==========================================

    // Option 1: Localhost အတွက် (သင့်ကွန်ပျူတာမှာ uvicorn ဖြင့် Run နေချိန်သုံးရန်)
    //const wsUrl = "ws://localhost:8000/ws";

    // Option 2: Render Server အတွက် (Online ပေါ်အမှန်တကယ် တင်ထားချိန်သုံးရန်)
    const wsUrl = "wss://my-blog-5ygr.onrender.com/ws";

    // ==========================================

    const ws = new WebSocket(wsUrl);

    // Backend (FastAPI) မှ လူအရေအတွက် လှမ်းပို့သည့်အခါ ဖမ်းယူပြီး UI တွင် ပြောင်းပေးခြင်း
    ws.onmessage = function (event) {
        const countElement = document.getElementById("active-user-count");
        if (countElement) {
            countElement.innerText = event.data; // အမှန်တကယ် ဝင်ကြည့်နေသူ အရေအတွက်
        }
    };

    // အကြောင်းအမျိုးမျိုးကြောင့် Connection ပြတ်သွားပါက ၅ စက္ကန့်နေလျှင် ပြန်ချိတ်ရန်
    ws.onclose = function () {
        setTimeout(initActiveUsersTracking, 5000);
    };
}

// စာမျက်နှာပွင့်တာနဲ့ WebSocket စတင်ချိတ်ဆက်မည်
document.addEventListener("DOMContentLoaded", function () {
    // သင့်ရဲ့ အခြားသော DOMContentLoaded ကုဒ်များ (ဥပမာ - auth, theme တွေ) ရှိပြီးသားပါ

    // Active User တွက်သည့် Function ကို ခေါ်မည်
    initActiveUsersTracking();
});

// --- (စ) Contact Form Submit လုပ်ခြင်း (MongoDB သို့ ပို့ရန်) ---
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault(); // Page ကို Reload အတင်းဖြစ်သွားခြင်းမှ တားဆီးရန်

            // ID များမှတဆင့် Form Data များကို ဆွဲယူခြင်း
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Python ဘက်သို့ ပို့မည့် Data Format (ContactMessage Model နှင့် ကိုက်ညီရမည်)
            const data = {
                name: name,
                email: email,
                message: message
            };

            try {
                // ပြောင်းလဲအသုံးပြုရန် လင့်ခ်များ
                // Localhost မှာ Run နေချိန် (ကွန်ပျူတာမှာ စမ်းသပ်ချိန်) အောက်ကလင့်ကို သုံးပါ
                //const backendUrl = "http://localhost:8000/api/contact";

                const backendUrl = "https://my-blog-5ygr.onrender.com/api/contact";

                const response = await fetch(backendUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok) {
                    alert("Message Sent Successfully! We will contact you soon.");
                    contactForm.reset(); // စာပို့အောင်မြင်ပါက Form အကွက်များကို ရှင်းလင်းရန်
                } else {
                    alert("Error: " + result.detail);
                }
            } catch (error) {
                console.error("Error sending message:", error);
                alert("Something went wrong! Please check your connection.");
            }
        });
    }
});