// ---- Scroll position memory ----
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollY', window.scrollY);
});

const savedScroll = sessionStorage.getItem('scrollY');
if (savedScroll) {
    window.scrollTo(0, parseInt(savedScroll));
    sessionStorage.removeItem('scrollY');
}

// ---- Navigation scroll tracking ----
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function updateActiveNav() {
    const scrollY = window.scrollY + window.innerHeight / 3;

    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.id;
        const link = document.querySelector(`.nav-link[data-section="${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < bottom);
        }
    });
}

updateActiveNav();
document.addEventListener('scroll', updateActiveNav);

// ---- Contact form ----
emailjs.init('rjy9SLX9tpgFzDZfN');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit');

if (contactForm) {
    document.getElementById('contactNumber').value = Math.random() * 100000 | 0;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Clear previous errors
        [name, email, message].forEach(f => f.classList.remove('error'));

        let valid = true;
        if (!name.value.trim()) { name.classList.add('error'); valid = false; }
        if (!email.value.trim() || !isEmail(email.value)) { email.classList.add('error'); valid = false; }
        if (!message.value.trim()) { message.classList.add('error'); valid = false; }

        if (!valid) {
            flashButton('Message failed', 'failed');
            return;
        }

        emailjs.sendForm('service_kh9i6le', 'template_k5ke0pe', contactForm, 'rjy9SLX9tpgFzDZfN')
            .then(() => flashButton('Message sent!', 'sent'))
            .then(() => clearInput(contactForm))
            .catch((err) => { console.error('EmailJS error:', err); flashButton('Message failed', 'failed'); });
    });
}

function clearInput(form){
    form.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(input => input.value = '');
}

function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function flashButton(text, className) {
    const original = submitBtn.textContent;
    submitBtn.textContent = text;
    submitBtn.classList.add(className);
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.textContent = original;
        submitBtn.classList.remove(className);
        submitBtn.disabled = false;
    }, 2000);
}

// ---- Language ----
const translations = {
    eng: {
        'about-title': 'About me',
        'about-1': "I'm a creative front-end developer who brings calm, clarity and flexibility to every project. I enjoy working with interactive web technologies like React and Next.js to turn ideas into accessible, smooth interfaces. I pay close attention to detail and always keep the end user in mind.",
        'about-2': "My goal is to use technology to create better experiences, whether that's an efficient workday, a fun evening or a seamless purchase. I'm always looking to learn new things and love collaborating with others to build something meaningful.",
        'projects-title': 'Projects',
        'contact-heading': 'Contact',
        'contact-title': 'Send me a message!',
        'contact-name': 'Your name',
        'contact-email': 'Your email address',
        'contact-msg': 'Your message',
        'skills-title': 'Skills',
        'skills-languages': 'Languages',
        'skills-frameworks': 'Frameworks',
        'submit': 'Send message'
    },
    nl: {
        'about-title': 'Over mij',
        'about-1': 'Ik ben een creatieve front-end developer die rust, helderheid en flexibiliteit meeneemt in elk project. Ik werk graag met interactieve webtechnieken zoals React en Next.js om ideeën om te zetten in toegankelijke en vloeiende interfaces. Ik heb oog voor detail en houd altijd de eindgebruiker in gedachten.',
        'about-2': 'Mijn doel is om techniek in te zetten voor betere belevenissen, of dat nu een efficiënte werkdag, een gezellige avond of een soepele aankoop betreft. Ik ben altijd op zoek om nieuwe dingen te leren en werk graag samen met anderen om iets moois neer te zetten.',
        'projects-title': 'Projecten',
        'contact-heading': 'Contact',
        'contact-title': 'Stuur een bericht!',
        'contact-name': 'Jouw naam',
        'contact-email': 'Jouw email adres',
        'contact-msg': 'Jouw bericht',
        'skills-title': 'Vaardigheden',
        'skills-languages': 'Talen',
        'skills-frameworks': 'Frameworks',
        'submit': 'Verstuur bericht'
    }
};

const navTranslations = {
    eng: { about: 'About', projects: 'Projects', contact: 'Contact' },
    nl: { about: 'Over mij', projects: 'Projecten', contact: 'Contact' }
};

function setLanguage(lang) {
    localStorage.setItem('lang', lang);

    // Update button styles
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('lang-' + lang)?.classList.add('active');

    // Update text content
    const dict = translations[lang];
    if (dict) {
        for (const [id, text] of Object.entries(dict)) {
            const el = document.getElementById(id);
            if (!el) continue;
            if (el.tagName === 'BUTTON' || el.tagName === 'INPUT') {
                el.textContent = text;
            } else {
                el.textContent = text;
            }
        }
    }

    // Update nav links
    const navDict = navTranslations[lang];
    if (navDict) {
        navLinks.forEach(link => {
            const section = link.dataset.section;
            if (section === 'hero') {
                link.textContent = 'Home';
            } else if (navDict[section]) {
                link.textContent = navDict[section];
            }
        });
    }
}

document.getElementById('lang-eng')?.addEventListener('click', () => setLanguage('eng'));
document.getElementById('lang-nl')?.addEventListener('click', () => setLanguage('nl'));

// Initialize language
setLanguage(localStorage.getItem('lang') || 'nl');
