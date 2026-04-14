// تهيئة مكتبة الأنيميشن
AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
});

// نصوص الترجمات - ثلاث لغات
const translations = {
    ar: {
        page_title: "إلياس سعداوي | البنية التحتية الرقمية",
        logo: "إلياس سعداوي",
        nav_home: "الرئيسية", nav_about: "نبذة عني", nav_skills: "المهارات",
        nav_exp: "الخبرات", nav_projects: "المشاريع", nav_contact: "التواصل",
        hero_greeting: "مرحباً، أنا",
        hero_name: "إلياس الوجدي",
        hero_title: "البنية التحتية الرقمية - خيار الأنظمة والشبكات",
        hero_subtitle: "CCNA Certified | Network & Security Enthusiast",
        btn_contact: "تواصل معي", btn_cv: "📄 تحميل السيرة الذاتية",
        about_title: "نبذة عني",
        about_desc: "أنا إلياس الوجدي، متخصص في البنية التحتية الرقمية مع تركيز على الأنظمة والشبكات. أحمل شهادة CCNA وأطمح لتوظيف مهاراتي التقنية في بيئة مهنية ديناميكية، مع تعميق معرفتي في مجال الأمن السيبراني والمساهمة في مشاريع مبتكرة تحمي البنى الرقمية وتدعم التحول الرقمي.",
        stat_security: "الأمن السيبراني", stat_networks: "الشبكات المؤسسية", stat_automation: "الأتمتة",
        skills_title: "المهارات التقنية",
        skill_cat_simulation: "المحاكاة والتحليل", skill_cat_virtualization: "الافتراضية", skill_cat_office: "الأدوات المكتبية",
        skill_desc_analysis: "تحليل حزم الشبكة", skill_desc_vm: "إنشاء وإدارة الآلات الافتراضية",
        certified: "✓ معتمد",
        exp_title: "المسار التعليمي والشهادات",
        edu_ista_title: "ISTA OUJDA", edu_ista_desc: "Technicien Spécialisé en Systèmes et Réseaux",
        edu_pie: "✓ Certificat PIE - Parcours d'innovation entrepreneuriale",
        edu_soft: "✓ Développement des soft skills: gestion de projet, communication, leadership",
        cert_ccna_title: "شهادات Cisco CCNA",
        internship_title: "تدريب مهني - ISTA OUJDA",
        internship_desc: "Stage de fin de formation - Déclarant en ISTA",
        edu_lycee_title: "LYCÉE ABDELMOUMEN", edu_bac_desc: "Baccalauréat",
        projects_title: "المشاريع",
        projects_subtitle: "قريباً: مشاريعي في تصميم الشبكات والأمن السيبراني",
        proj_placeholder_1: "مشروع شبكة مؤسسية", proj_placeholder_2: "مشروع أمن شبكي",
        proj_title_1: "عنوان المشروع 1", proj_desc_1: "سيتم إضافة وصف المشروع والتقنيات المستخدمة هنا قريباً.",
        proj_title_2: "عنوان المشروع 2", proj_desc_2: "سيتم إضافة وصف المشروع والتقنيات المستخدمة هنا قريباً.",
        btn_coming_soon: "قريباً 🔜",
        add_project_hint: "💡 لإنشاء مشروع جديد: انسخ كود .project-card وعدّل المحتوى!",
        contact_title: "تواصل معي",
        contact_desc: "أنا متاح للتعاون في مشاريع الشبكات، الأمن السيبراني، والاستشارات التقنية. لا تتردد في التواصل!",
        social_email: "البريد",
        footer_text: "© 2026 إلياس الوجدي. جميع الحقوق محفوظة.",
        footer_sub: "صُنع بـ ❤️ وتقنيات الويب الحديثة"
    },
    fr: {
        page_title: "Ilyas saadaoui | Infrastructure Numérique",
        logo: "Ilyas saadaoui",
        nav_home: "Accueil", nav_about: "À propos", nav_skills: "Compétences",
        nav_exp: "Expérience", nav_projects: "Projets", nav_contact: "Contact",
        hero_greeting: "Bonjour, je suis",
        hero_name: "Ilyas El Oujdi",
        hero_title: "Infrastructure Numérique - Option Systèmes & Réseaux",
        hero_subtitle: "Certifié CCNA | Passionné Réseaux & Sécurité",
        btn_contact: "Contactez-moi", btn_cv: "📄 Télécharger CV",
        about_title: "À propos",
        about_desc: "Je suis Ilyas El Oujdi, spécialisé en infrastructure numérique avec un focus sur les systèmes et réseaux. Certifié CCNA, je souhaite mettre mes compétences techniques au service d'un environnement professionnel dynamique, tout en approfondissant mes connaissances en cybersécurité et en contribuant à des projets innovants qui protègent les infrastructures numériques et soutiennent la transformation digitale.",
        stat_security: "Cybersécurité", stat_networks: "Réseaux d'entreprise", stat_automation: "Automatisation",
        skills_title: "Compétences techniques",
        skill_cat_simulation: "Simulation & Analyse", skill_cat_virtualization: "Virtualisation", skill_cat_office: "Bureautique",
        skill_desc_analysis: "Analyse de paquets réseau", skill_desc_vm: "Création et gestion de machines virtuelles",
        certified: "✓ Certifié",
        exp_title: "Formation & Certifications",
        edu_ista_title: "ISTA OUJDA", edu_ista_desc: "Technicien Spécialisé en Systèmes et Réseaux",
        edu_pie: "✓ Certificat PIE - Parcours innovation entrepreneuriale",
        edu_soft: "✓ Soft skills: gestion de projet, communication, leadership",
        cert_ccna_title: "Certifications Cisco CCNA",
        internship_title: "Stage professionnel - ISTA OUJDA",
        internship_desc: "Stage de fin de formation - Déclarant en ISTA",
        edu_lycee_title: "LYCÉE ABDELMOUMEN", edu_bac_desc: "Baccalauréat",
        projects_title: "Projets",
        projects_subtitle: "Bientôt: Mes projets en conception réseau et cybersécurité",
        proj_placeholder_1: "Projet Réseau d'entreprise", proj_placeholder_2: "Projet Sécurité réseau",
        proj_title_1: "Titre du projet 1", proj_desc_1: "Description et technologies à venir bientôt.",
        proj_title_2: "Titre du projet 2", proj_desc_2: "Description et technologies à venir bientôt.",
        btn_coming_soon: "Bientôt 🔜",
        add_project_hint: "💡 Pour ajouter un projet: copiez le code .project-card et modifiez le contenu!",
        contact_title: "Contact",
        contact_desc: "Je suis disponible pour collaborer sur des projets réseaux, cybersécurité et conseil technique. N'hésitez pas à me contacter!",
        social_email: "Email",
        footer_text: "© 2026 Ilyas El Oujdi. Tous droits réservés.",
        footer_sub: "Créé avec ❤️ et les technologies web modernes"
    },
    en: {
        page_title: "Ilyas saadaoui | Digital Infrastructure",
        logo: "Ilyas saadaoui",
        nav_home: "Home", nav_about: "About", nav_skills: "Skills",
        nav_exp: "Experience", nav_projects: "Projects", nav_contact: "Contact",
        hero_greeting: "Hello, I'm",
        hero_name: "Ilyas El Oujdi",
        hero_title: "Digital Infrastructure - Systems & Networks Track",
        hero_subtitle: "CCNA Certified | Network & Security Enthusiast",
        btn_contact: "Contact Me", btn_cv: "📄 Download CV",
        about_title: "About Me",
        about_desc: "I'm Ilyas El Oujdi, specialized in digital infrastructure with a focus on systems and networking. CCNA certified, I aim to leverage my technical skills in a dynamic professional environment, while deepening my expertise in cybersecurity and contributing to innovative projects that protect digital infrastructure and support digital transformation.",
        stat_security: "Cybersecurity", stat_networks: "Enterprise Networks", stat_automation: "Automation",
        skills_title: "Technical Skills",
        skill_cat_simulation: "Simulation & Analysis", skill_cat_virtualization: "Virtualization", skill_cat_office: "Office Tools",
        skill_desc_analysis: "Network packet analysis", skill_desc_vm: "Creating & managing virtual machines",
        certified: "✓ Certified",
        exp_title: "Education & Certifications",
        edu_ista_title: "ISTA OUJDA", edu_ista_desc: "Specialized Technician in Systems & Networks",
        edu_pie: "✓ PIE Certificate - Entrepreneurial Innovation Track",
        edu_soft: "✓ Soft skills development: project management, communication, leadership",
        cert_ccna_title: "Cisco CCNA Certifications",
        internship_title: "Professional Internship - ISTA OUJDA",
        internship_desc: "End-of-training internship - ISTA Declarant",
        edu_lycee_title: "LYCÉE ABDELMOUMEN", edu_bac_desc: "Baccalaureate",
        projects_title: "Projects",
        projects_subtitle: "Coming Soon: My projects in network design & cybersecurity",
        proj_placeholder_1: "Enterprise Network Project", proj_placeholder_2: "Network Security Project",
        proj_title_1: "Project Title 1", proj_desc_1: "Project description and technologies used will be added soon.",
        proj_title_2: "Project Title 2", proj_desc_2: "Project description and technologies used will be added soon.",
        btn_coming_soon: "Coming Soon 🔜",
        add_project_hint: "💡 To add a new project: copy .project-card code and edit the content!",
        contact_title: "Contact",
        contact_desc: "I'm available for collaboration on networking, cybersecurity, and technical consulting projects. Feel free to reach out!",
        social_email: "Email",
        footer_text: "© 2026 Ilyas El Oujdi. All rights reserved.",
        footer_sub: "Built with ❤️ & modern web technologies"
    }
};

// عناصر التحكم
const langButtons = document.querySelectorAll('.lang-switch button');
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const langSwitch = document.querySelector('.lang-switch');

// تبديل اللغة
function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('preferredLang', lang);
    
    // تحديث النصوص
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // تحديث زر اللغة النشط
    langButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-lang="${lang}"]`)?.classList.add('active');
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// الوضع الليلي/النهاري
function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('preferredTheme', theme);
    themeToggle.innerHTML = theme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    const current = localStorage.getItem('preferredTheme') || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
});

// القائمة المتنقلة
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    langSwitch.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        langSwitch.classList.remove('active');
    });
});

// تمييز الرابط النشط عند التمرير
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        if (pageYOffset >= top) current = sec.getAttribute('id');
    });
    navItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href')?.includes(current)) a.classList.add('active');
    });
});

// تحميل التفضيلات المحفوظة عند البدء
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    const savedTheme = localStorage.getItem('preferredTheme') || 'light';
    setLanguage(savedLang);
    setTheme(savedTheme);
    
    // إعادة تهيئة AOS بعد تحميل المحتوى
    AOS.refresh();
    // ===== نظام الإعدادات الاحترافي =====
const settingsPanel = document.getElementById('settingsPanel');
const settingsOverlay = document.getElementById('settingsOverlay');
const settingsToggle = document.querySelector('.settings-toggle');
const settingsClose = document.getElementById('settingsClose');
const darkModeSwitch = document.getElementById('darkModeSwitch');
const reduceMotionSwitch = document.getElementById('reduceMotion');
const fontIncrease = document.getElementById('fontIncrease');
const fontDecrease = document.getElementById('fontDecrease');
const fontSizeValue = document.getElementById('fontSizeValue');
const resetSettings = document.getElementById('resetSettings');
const langOptions = document.querySelectorAll('.lang-opt');

// فتح/إغلاق نافذة الإعدادات
function openSettings() {
    settingsPanel.classList.add('open');
    settingsOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSettings() {
    settingsPanel.classList.remove('open');
    settingsOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

settingsToggle.addEventListener('click', openSettings);
settingsClose.addEventListener('click', closeSettings);
settingsOverlay.addEventListener('click', closeSettings);

// تبديل الوضع الليلي من الإعدادات
darkModeSwitch.addEventListener('change', () => {
    const theme = darkModeSwitch.checked ? 'dark' : 'light';
    setTheme(theme);
});

// تقليل الحركات
reduceMotionSwitch.addEventListener('change', () => {
    document.body.classList.toggle('reduce-motion', reduceMotionSwitch.checked);
    localStorage.setItem('reduceMotion', reduceMotionSwitch.checked);
});

// التحكم بحجم الخط
let currentFontSize = parseInt(localStorage.getItem('fontSize') || '100');
fontSizeValue.textContent = currentFontSize + '%';

fontIncrease.addEventListener('click', () => {
    if (currentFontSize < 130) {
        currentFontSize += 10;
        applyFontSize();
    }
});

fontDecrease.addEventListener('click', () => {
    if (currentFontSize > 80) {
        currentFontSize -= 10;
        applyFontSize();
    }
});

function applyFontSize() {
    document.documentElement.style.fontSize = currentFontSize + '%';
    fontSizeValue.textContent = currentFontSize + '%';
    localStorage.setItem('fontSize', currentFontSize);
}

// خيارات اللغة في الإعدادات
langOptions.forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
        langOptions.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// إعادة تعيين الإعدادات
resetSettings.addEventListener('click', () => {
    if (confirm('هل أنت متأكد من إعادة تعيين جميع الإعدادات؟')) {
        localStorage.clear();
        location.reload();
    }
});

// تحميل الإعدادات المحفوظة
document.addEventListener('DOMContentLoaded', () => {
    // تحميل حالة الوضع الليلي
    const savedTheme = localStorage.getItem('preferredTheme') || 'light';
    darkModeSwitch.checked = savedTheme === 'dark';
    setTheme(savedTheme);
    
    // تحميل تقليل الحركات
    const reduceMotion = localStorage.getItem('reduceMotion') === 'true';
    reduceMotionSwitch.checked = reduceMotion;
    if (reduceMotion) document.body.classList.add('reduce-motion');
    
    // تحميل حجم الخط
    const savedFontSize = parseInt(localStorage.getItem('fontSize') || '100');
    currentFontSize = savedFontSize;
    applyFontSize();
    
    // تحميل اللغة
    const savedLang = localStorage.getItem('preferredLang') || 'ar';
    setLanguage(savedLang);
    langOptions.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === savedLang);
    });
    
    // تهيئة AOS
    AOS.refresh();
});
});
