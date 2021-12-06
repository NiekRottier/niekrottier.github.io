// Check which page we are on
let page = window.location.pathname

// Remove the / and .html from the string
page = page.substring(1, page.length-5)
console.log(page);

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

    // Fill the text elements with the right language
    for (const txt in language[lang][page]) {
        document.getElementById(txt).textContent = language[lang][page][txt]
    }
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