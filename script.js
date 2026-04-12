// نصوص الترجمات
const translations = {
    ar: {
        page_title: "الموقع الشخصي", logo: "اسمك هنا",
        nav_home: "الرئيسية", nav_about: "نبذة عني", nav_skills: "المهارات",
        nav_exp: "الخبرات", nav_projects: "المشاريع", nav_contact: "التواصل",
        hero_greeting: "مرحباً، أنا", hero_name: "[الاسم الكامل]",
        hero_title: "[المسمى الوظيفي / التخصص]",
        btn_contact: "تواصل معي", btn_cv: "📄 تحميل السيرة الذاتية",
        about_title: "نبذة عني",
        about_desc: "[اكتب هنا نبذة مختصرة عن خلفيتك، شغفك، وما تسعى لتحقيقه.]",
        skills_title: "المهارات", skill_1: "مهارة 1", skill_2: "مهارة 2", skill_3: "مهارة 3", skill_4: "مهارة 4",
        exp_title: "الخبرات والتعليم",
        exp_1_title: "[المسمى الوظيفي]", exp_1_date: "2020 - 2023", exp_1_desc: "[وصف مختصر للدور والمهام]",
        edu_1_title: "[اسم الشهادة]", edu_1_date: "2016 - 2020", edu_1_desc: "[اسم الجامعة أو المؤسسة]",
        projects_title: "المشاريع",
        proj_1_title: "عنوان المشروع 1", proj_1_desc: "وصف مختصر للمشروع والتقنيات المستخدمة.",
        proj_2_title: "عنوان المشروع 2", proj_2_desc: "وصف مختصر للمشروع والتقنيات المستخدمة.",
        btn_preview: "معاينة",
        contact_title: "تواصل معي", contact_desc: "يمكنك الوصول إلي عبر القنوات التالية:",
        footer_text: "© 2026 [اسمك]. جميع الحقوق محفوظة."
    },
    fr: {
        page_title: "Portfolio Personnel", logo: "Votre Nom",
        nav_home: "Accueil", nav_about: "À propos", nav_skills: "Compétences",
        nav_exp: "Expérience", nav_projects: "Projets", nav_contact: "Contact",
        hero_greeting: "Bonjour, je suis", hero_name: "[Nom Complet]",
        hero_title: "[Titre Professionnel / Spécialité]",
        btn_contact: "Contactez-moi", btn_cv: "📄 Télécharger CV",
        about_title: "À propos",
        about_desc: "[Ajoutez ici un bref résumé de votre parcours et de vos objectifs.]",
        skills_title: "Compétences", skill_1: "Compétence 1", skill_2: "Compétence 2", skill_3: "Compétence 3", skill_4: "Compétence 4",
        exp_title: "Expérience & Formation",
        exp_1_title: "[Poste]", exp_1_date: "2020 - 2023", exp_1_desc: "[Description du rôle]",
        edu_1_title: "[Diplôme]", edu_1_date: "2016 - 2020", edu_1_desc: "[Université/Institut]",
        projects_title: "Projets",
        proj_1_title: "Projet 1", proj_1_desc: "Description courte et technologies utilisées.",
        proj_2_title: "Projet 2", proj_2_desc: "Description courte et technologies utilisées.",
        btn_preview: "Aperçu",
        contact_title: "Contact", contact_desc: "Vous pouvez me joindre via :",
        footer_text: "© 2026 [Votre Nom]. Tous droits réservés."
    },
    en: {
        page_title: "Personal Portfolio", logo: "Your Name",
        nav_home: "Home", nav_about: "About", nav_skills: "Skills",
        nav_exp: "Experience", nav_projects: "Projects", nav_contact: "Contact",
        hero_greeting: "Hello, I'm", hero_name: "[Full Name]",
        hero_title: "[Job Title / Specialty]",
        btn_contact: "Contact Me", btn_cv: "📄 Download CV",
        about_title: "About Me",
        about_desc: "[Write a short summary of your background, passion, and goals.]",
        skills_title: "Skills", skill_1: "Skill 1", skill_2: "Skill 2", skill_3: "Skill 3", skill_4: "Skill 4",
        exp_title: "Experience & Education",
        exp_1_title: "[Job Title]", exp_1_date: "2020 - 2023", exp_1_desc: "[Brief role description]",
        edu_1_title: "[Degree]", edu_1_date: "2016 - 2020", edu_1_desc: "[University/Institute]",
        projects_title: "Projects",
        proj_1_title: "Project 1", proj_1_desc: "Short description and tech stack.",
        proj_2_title: "Project 2", proj_2_desc: "Short description and tech stack.",
        btn_preview: "View",
        contact_title: "Contact", contact_desc: "You can reach me through:",
        footer_text: "© 2026 [Your Name]. All rights reserved."
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
