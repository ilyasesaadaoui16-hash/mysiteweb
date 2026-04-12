// نصوص الترجمات
const translations = {
    ar: {
        page_title: "الموقع الشخصي", logo: "اسمك هنا",
        nav_home: "الرئيسية", nav_about: "نبذة عني", nav_skills: "المهارات",
        nav_exp: "الخبرات", nav_projects: "المشاريع", nav_contact: "التواصل",
        hero_greeting: "مرحباً، أنا", hero_name: "[إلياس سعداوي]",
        hero_title: "[الأنظمة والشبكات]",
        btn_contact: "تواصل معي", btn_cv: "📄 تحميل السيرة الذاتية",
        about_title: "نبذة عني",
        about_desc: "[بدافعية عالية ودقة متناهية، أرغب الآن في وضع مهاراتي التقنية وشهادة CCNA في خدمة بيئة مهنية ديناميكية، مع تعميق معرفتي في مجال الأمن السيبراني والمساهمة في مشاريع مبتكرة.]",
        skills_title: "المهارات", skill_1: "إدارة الوقت", skill_2: "المهارات التنظيمية", skill_3: "Communication", skill_4: "المراقبة المنتظمة للأخبار في الأنظمة والشبكات والأمن سيبيراني." ,
        exp_title: "الخبرات والتعليم",
        exp_1_title: "[التدريب مهني]", exp_1_date: "شهر واحد", exp_1_desc: "[تحليل بنية الشبكة وتحسينها، ونشر حلول الاستنساخ، وحل المشكلات التقنية]",
        edu_1_title: "[بكالوريا]", edu_1_date: "2022 - 2023", edu_1_desc: "[ثانوية عبد المومن]",
        edu_2_title: "[تقني متخصص]", edu_2_date: "2023 - 2025", edu_2_desc: "[أوفششور]",
        btn_preview: "معاينة",
        contact_title: "تواصل معي", contact_desc: "يمكنك الوصول إلي عبر القناة التالية:",
        footer_text: "© 2026 [إلياس سعداوي]. جميع الحقوق محفوظة."
    },
    fr: {
        page_title: "Portfolio Personnel", logo: "Votre Nom",
        nav_home: "Accueil", nav_about: "À propos", nav_skills: "Compétences",
        nav_exp: "Expérience", nav_projects: "Projets", nav_contact: "Contact",
        hero_greeting: "Bonjour, je suis", hero_name: "[ilyass saadaoui]",
        hero_title: "[Systèmes et Réseaux]",
        btn_contact: "Contactez-moi", btn_cv: "📄 Télécharger CV",
        about_title: "À propos",
        about_desc: "[Motivé et rigoureux, je souhaite aujourd’hui mettre mes compétences techniques et ma certification CCNA au service d’un environnement professionnel dynamique, tout en approfondissant mes connaissances en cybersécurité et en contribuant à des projets innovants.]",
        skills_title: "Compétences", skill_1: "Gestion du temps", skill_2: "Capacités d’organisation", skill_3: "Communication", skill_4: "Veille régulière sur l’actualitédes systèmes, des réseaux et de la cybersécurité.",
        exp_title: "Expérience & Formation",
        exp_1_title: "[stage]", exp_1_date: "1 mois", exp_1_desc: "[l’analyse et à l’optimisation de l’architecture réseau, au déploiement de solutions de clonage, ainsi qu’à la résolution d’incidents technique]",
        edu_1_title: "[Baccalauréat]", edu_1_date: "2022 - 2023", edu_1_desc: "[Lycée Abdelmoumen]",
        edu_2_title: "[Technicien spécialisé", edu_2_date: "2013 - 2025", edu_2_desc: "[offshoring]",
        btn_preview: "Aperçu",
        contact_title: "Contact", contact_desc: "Vous pouvez me joindre via :",
        footer_text: "© 2026 [ilyass saadaoui]. Tous droits réservés."
    },
    en: {
        page_title: "Personal Portfolio", logo: "Your Name",
        nav_home: "Home", nav_about: "About", nav_skills: "Skills",
        nav_exp: "Experience", nav_projects: "Projects", nav_contact: "Contact",
        hero_greeting: "Hello, I'm", hero_name: "[ilyass saadaoui]",
        hero_title: "[Systems and Networks]",
        btn_contact: "Contact Me", btn_cv: "📄 Download CV",
        about_title: "About Me",
        about_desc: "[Motivated and rigorous, I now wish to put my technical skills and CCNA certification at the service of a dynamic professional environment, while deepening my knowledge in cybersecurity and contributing to innovative projects.]",
        skills_title: "Skills", skill_1: "Time management", skill_2: "Organizational skills", skill_3: "Communication", skill_4: "Regular monitoring of newsin systems, networks and cybersecurity.",
        exp_title: "Experience & Education",
        exp_1_title: "[internship]", exp_1_date: "1 month", exp_1_desc: "[network architecture analysis and optimization, deployment of cloning solutions, and resolution of technical incidents]",
        edu_1_title: "[Baccalaureate]", edu_1_date: "2022 - 2023", edu_1_desc: "[Abdelmoumen High School]",
        edu_2_title: "[Specialized technician]", edu_2_date: "2023 - 2025", edu_2_desc: "[offshoring]",
        btn_preview: "View",
        contact_title: "Contact", contact_desc: "You can reach me through:",
        footer_text: "© 2026 [ilyass saadaoui]. All rights reserved."
    }
};

// عناصر التحكم
const langButtons = document.querySelectorAll('.lang-switch button');
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

// تبديل اللغة
function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('preferredLang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// الوضع الليلي/النهاري
function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('preferredTheme', theme);
    themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    const current = localStorage.getItem('preferredTheme') || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
});

// القائمة المتنقلة
mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));

// تحميل التفضيلات المحفوظة
const savedLang = localStorage.getItem('preferredLang') || 'ar';
const savedTheme = localStorage.getItem('preferredTheme') || 'light';
setLanguage(savedLang);
setTheme(savedTheme);

// تمييز الرابط النشط عند التمرير
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        const top = sec.offsetTop - 100;
        if (pageYOffset >= top) current = sec.getAttribute('id');
    });
    navItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) a.classList.add('active');
    });
});
