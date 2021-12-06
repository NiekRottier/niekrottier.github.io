// Change language on button click
document.getElementById('lang-eng')
    .addEventListener('click', () => {
        updateLanguage('eng')
    })

document.getElementById('lang-nl')
    .addEventListener('click', () => {
        updateLanguage('nl')
    })

// Update language after loading the page
window.addEventListener('load', () => updateLanguage(localStorage.getItem('lang')))

// Update language
function updateLanguage(lang) {
    localStorage.setItem('lang', lang)

    console.log(`lang = ${lang}`);

    document.getElementById('about-title').textContent = language[lang].index["about-title"]
    document.getElementById('about-1').textContent = language[lang].index["about-1"]
    document.getElementById('about-2').textContent = language[lang].index["about-2"]
    document.getElementById('contact-title').textContent = language[lang].index["contact-title"]
    document.getElementById('contact-name').textContent = language[lang].index["contact-name"]
    document.getElementById('contact-email').textContent = language[lang].index["contact-email"]
    document.getElementById('contact-msg').textContent = language[lang].index["contact-msg"]
    document.getElementById('submit').value = language[lang].index["submit"]
}

// Translations 
const language = {
    eng: {
        index: {
            'about-title' : 'About me',
            'about-1' : 'Hi! I’m Niek, a 19 y/o Creative Media & Game Tech student at Hogeschool Rotterdam.',
            'about-2' : 'I like to design and develop the front-end of websites. My goal is to give users the easiest and smoothest experience they’ve ever had.',
            'contact-title' : 'Send me a message!',
            'contact-name' : 'Your name',
            'contact-email' : 'Your email address',
            'contact-msg' : 'Your message',
            'submit' : 'Send message'
        }
    },
    nl: {
        index: {
            'about-title' : 'Over mij',
            'about-1' : 'Hi! Ik ben Niek, een 19 jarige Creative Media & Game Tech student aan Hogeschool Rotterdam.',
            'about-2' : 'Ik houd van het ontwerpen en ontwikkelen van de front-end van websites. Ik wil de gebruikers een zo makkelijk en soepel mogelijke ervaring geven.',
            'contact-title' : 'Stuur een bericht!',
            'contact-name' : 'Jouw naam',
            'contact-email' : 'Jouw email adres',
            'contact-msg' : 'Jouw bericht',
            'submit' : 'Verstuur bericht'
        }
    }
}