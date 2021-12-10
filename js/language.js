// Check which page we are on
let page = window.location.pathname

// Remove the / and .html from the string
page = page.substring(1, page.length-5)

// If we're on the homescreen but the URL is just the base adress without '/index.html'
if (page = "/") {
    page = "index"
}

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

    // Fill the text elements with the right language. If-statement for setting the value of the submit button
    for (const txt in language[lang][page]) {
        if (txt === 'submit') {
            document.getElementById(txt).value = language[lang][page][txt]
        } else {
            document.getElementById(txt).innerText = language[lang][page][txt]
        }
    }
        
    // Translate menu, skip menu items that can't be found
    for (let txt in language.menu[lang]) {
        if (document.getElementById(txt)) {
            document.getElementById(txt).textContent = language.menu[lang][txt]
        }
    }
}

// Translations 
const language = {
    eng: {
        index: {
            'about-title' : 'About me',
            'about-1' : 'Hi! I’m Niek, a 19 y/o Creative Media & Game Tech student at Hogeschool Rotterdam.',
            'about-2' : 'I like to design and develop the front-end of websites. My goal is to give users the easiest and smoothest experience they’ve ever had.',
            'projects-title' : 'Projects',
            'contact-title' : 'Send me a message!',
            'contact-name' : 'Your name',
            'contact-email' : 'Your email address',
            'contact-msg' : 'Your message',
            'submit' : 'Send message'
        },
        urbanJungle: {
            'about-title' : 'About',
            'about-1' : 'This application is the result of a 16 week project with the goal to make a positive impact on sustainability in Rotterdam. Urban Jungle tries to make its users reflect on and confront their current sustainability and provides help to improve it.',
            'about-2' : 'The app lets the users scan an object and makes a quiz based on that object. Afterwards the users see a 3D model of Rotterdam adjusted to their own sustainability. The app provides tips to help the users improve their sustainability.',
            'work-title' : 'My work',
            'work-1' : 'I worked on development of the quiz, 3D viewer and overall styling. I also did research on the motivations to live sustainable, set up a usability test and made a rapport of that test. Besides that I worked with my team on other project related stuff, like the Business Model Canvas, Empathy Map, Persona, Customer Journey and more.',
            'tech-title' : 'Technology',
            'tech-1' : 'We used React and Ionic to make a Progressive Web App. This means it can be build as a webapp and a native app. I worked with Three.js to load the 3D models. The models were made in Blender and the object detection uses TenserFlow.js and the model Coco SSD.',
            'gallery-title' : 'Gallery'
        },
        jsai: {
            'about-title' : 'About',
            'about-1' : 'This project consists of 6 different Artifical Intelligence applications. Working on this was a bit of an eye-opener for me. It showed me that the web has a lot more possibilities than I thought. I learned about AI and Machine Learning and that it\'s often whacky (or maybe that was just me). Of all the apps in this project I like the hand recognition app the most, because it gives you a look behind the tech, has interaction and just looks kinda cool.',
            'tech-title' : 'Technology',
            'tech-1' : 'All the applications are coded in JavaScript. They use different algoritmes, like KNN, decisiontrees and Neural Networks. I used TensorFlow.js and ML5.js to use Machine Learning in the browser. Some apps load pre-trained models, others have to be trained by the user or train themself on startup.',
            'gallery-title' : 'Gallery'
        },
        nieuwsradar: {
            'about-title' : 'About',
            'about-1' : 'NieuwsRadar is an regional news app which focuses on the proximity of regional news items. This is accomplished by showing news items on a map around the users position. When a news item is clicked a pop-up will appear with a short summary and a link to the full article. The user can set filters to see relevant articles. Users can sign in to change their location and the size of the radius.',
            'work-title' : 'My work',
            'work-1' : 'My role in the team was teamleader, designer and unofficial design lead. As teamleader I spent a lot of time making sure everyone was busy and we would reach our goals. As designer I designed the application and intergrated feedback from the users and dev team. As design lead I communicated with the dev team, recieved their feedback and anwsered their questions about the design.',
            'tech-title' : 'Technology',
            'tech-1' : 'The app is a PWA. This means it can be build as a webapp and a native app. It\'s coded using Angular and Ionic. We used Firebase to store the user accounts. The design is made in Adobe XD.',
            'gallery-title' : 'Gallery'
        },
        projectPigeon: {
            'about-title' : 'About',
            'about-1' : 'Project: Pigeon is a rogue-like webgame where you play as a professor who needs to capture and cure mutated pigeons. There are 3 levels and 2 bossfights. The game gets harder as it goes on. ',
            'about-2' : 'It is based on 3 keywords: \'narrative\', \'explore\' and \'pigeons\'. The narrative aspect of the game could\'ve gotten a bit more love, but the pigeons are definitely there.',
            'about-3' : 'The game was made in a 7 week period by a team of 5 students.',
            'work-title' : 'My work',
            'work-1' : 'I helped coming up with the concept, drew the pigeons, professor, final boss, final level backgrounds and the poster. Besides that I did a lot of the coding, such as the attack and health mechanics, pigeons movement, level lay-outs and the start- and end screens.',
            'tech-title' : 'Technology',
            'tech-1' : 'Everything is coded in TypeScript and HTML/CSS. Using regular TS wasn\'t the easiest way to build a webgame, but it worked and helped me learn TS. All art assets are made with Adobe Photoshop.',
            'gallery-title' : 'Gallery'
        },
        reactNotes: {
            'about-title' : 'About',
            'about-1' : 'With this webapplication you can create, read, update and delete notes. Since it was my first time using React I styled it so the different modules are very distinctive. Learning React wasn\'t as hard as I expected and once I got the hang of it I liked using it.',
            'tech-title' : 'Technology',
            'tech-1' : 'This application is made using React.js. I used an API made by a teacher, because my own backend API wasn\'t finished yet.',
            'gallery-title' : 'Gallery'
        },
        backendApi: {
            'about-title' : 'About',
            'about-1' : 'This API is build for storing data of animals. You add their name, age, diet and which animal they are.',
            'about-2' : 'Creating this gave me insight in the workings of API\'s and taught me about HTTP requests. The API also has a pagination for ease of use.',
            'tech-title' : 'Technology',
            'tech-1' : 'This backend API was made using Node.js, Express and Mongoose. It only accepts strings as input because that was a requirement from school, which was a bit weird, but sure.',
            'gallery-title' : 'Gallery'
        },
        laravelGallery: {
            'about-title' : 'About',
            'about-1' : 'With this web application you can login and look at and post pictures with a title, description and tag. Other functions include liking pictures, hiding, editing and deleting your own pictures, and searching based on the title or tag. At the moment there are 5 tags, but this could be expanded.',
            'tech-title' : 'Technology',
            'tech-1' : 'The Laravel Gallery is, as the name suggests, build with the PHP framework Laravel. Laravel works with the MVC pattern, so this application also makes use of this. The application has a MySQL database.',
            'gallery-title' : 'Gallery'
        }
    },
    nl: {
        index: {
            'about-title' : 'Over mij',
            'about-1' : 'Hi! Ik ben Niek, een 19 jarige Creative Media & Game Tech student aan Hogeschool Rotterdam.',
            'about-2' : 'Ik houd van het ontwerpen en ontwikkelen van de front-end van websites. Ik wil de gebruikers een zo makkelijk en soepel mogelijke ervaring geven.',
            'projects-title' : 'Projecten',
            'contact-title' : 'Stuur een bericht!',
            'contact-name' : 'Jouw naam',
            'contact-email' : 'Jouw email adres',
            'contact-msg' : 'Jouw bericht',
            'submit' : 'Verstuur bericht'
        },
        urbanJungle: {
            'about-title' : 'Over',
            'about-1' : 'Deze applicatie is het resultaat van een 16 weken durend project met het doel om een positieve impact op duurzaameheid in Rotterdam te maken. Urban Jungle probeerd zijn gebruikers te laten reflecteren op hun huidige duurzaamheid en biedt hulp om deze te verbeteren.',
            'about-2' : 'De app laat de gebruiker een object scannen en maakt een quiz gebasseerd op het object. Hierna krijgen de gebruikers een 3D model van Rotterdam te zien dat afgestemd is op hun duurzaamheid. De app biedt tips om duurzamer te leven.',
            'work-title' : 'Mijn bijdrage',
            'work-1' : 'Ik werkte aan de ontwikkeling van de quiz, 3D viewer en algemene styling. Ook heb ik onderzoek gedaan naar motivaties om duurzaam te gaan leven, een usabilitytest uitgevoerd en hier een rapport van gemaakt. Daarnaast heb ik gewerkt aan andere project gerelateerde dingen, zoals het Business Model Canvas, Empathy Map, Persona, Customer Journey en meer.',
            'tech-title' : 'Technologie',
            'tech-1' : 'We hebben React en Ionic gebruikt om een Progressive Web App te maken. Dit betekend dat het gebouwd kan worden als webapp en native app. Ik heb gewerkt met Three.js om de 3D modellen te laden. De modellen zijn gemaakt in Blender en de object herkenning door middel van TenserFlow.js en het model Coco SSD.',
            'gallery-title' : 'Gallerij'
        },
        jsai: {
            'about-title' : 'Over',
            'about-1' : 'Dit project bestaat uit 6 verschillende Artifical Intelligence applicaties. Hieraan werken was een beetje een eye-opener voor mij. Het toonde mij dat het web meer mogelijk heden heeft dan ik dacht. Ik heb over AI en Machine Learning geleerd en dat het soms apart kan doen (maar misschien lag dat aan mij). Van alle apps in dit project vind ik de hand herkennings app het leukst, omdat het je een blik achter de schermen geeft, interactie heeft en er gewoon cool uit ziet.',
            'tech-title' : 'Technologie',
            'tech-1' : 'Alle applicaties zijn in JavaScript gecodeerd. Ze gebruiken verschillende algoritmes, zoals KNN, decisiontrees en Neural Networks. Ik heb TensorFlow.js en ML5.js gebruikt om Machine Learning te gebruiken in de browser. Sommige apps laden voor-getrainde modellen, anderen worden getraind door de gebruiker of trainen zichzelf bij het opstarten.',
            'gallery-title' : 'Gallerij'
        },
        nieuwsradar: {
            'about-title' : 'Over',
            'about-1' : 'NieuwsRadar is een regionale nieuwsapp die zich focust op de nabijheid van nieuws. Dit wordt gedaan door het nieuws op een kaart rond de gebruikers locatie te tonen. Wanneer er op een artikel geklikt wordt verschijnt er een pop-up met een kleine samenvatting en een link naar het volledige artikel. De gebruiker kan filters instellen om specifiek nieuws te vinden. Er kan worden ingelogd om je locatie en de nieuwsradius te veranderen.',
            'work-title' : 'Mijn bijdrage',
            'work-1' : 'Mijn rol in dit team was teamleider, designer en onofficiële design lead. Als teamleider spendeerde ik tijd waarin ik zorgde dat iedereen werk had en onze doelen werden bereikt. Als designer hielp ik met het ontwerpen van de applicatie en intergreerde ik feedback van de doelgroep en het dev team. Als design lead communiceerde ik met het dev team, ontving ik hun feedback en beantwoorde ik hun vragen over het ontwerp.',
            'tech-title' : 'Technologie',
            'tech-1' : 'De app is een PWA. Dit betekend dat het als een webapp en als een native app gebouwd kan worden. Het is gecodeerd met Angular en Ionic. Firebase wordt gebruikt om de accounts op te slaan. Het ontwerp is gemaakt in Adobe XD.',
            'gallery-title' : 'Gallerij'
        },
        projectPigeon: {
            'about-title' : 'Over',
            'about-1' : 'Project: Pigeon is een rogue-like webgame waar je speelt als een professor die gemuteerde duiven moet vangen en helpen. Er zijn 3 levels en 2 bossfights. De game wordt moeilijker hoe verder je komt.',
            'about-2' : 'Het is gebasseerd op 3 keywords: \'narrative\', \'explore\' and \'pigeons\'. Het narrative gedeelte van de game kon iets meer liefde hebben ontvangen, maar de duiven zijn in ieder geval present.',
            'about-3' : 'De game is gedurende 7 weken gemaakt door een team van 5 studenten.',
            'work-title' : 'Mijn bijdrage',
            'work-1' : 'Ik heb geholpen met het verzinnen van het concept, de duiven, professor, laatste boss, laatste level en de poster getekend. Daarnaast heb ik veel geprogrammeerd, zoals de aanval en levensmechanieken, de beweging van de duiven, level lay-outs en het start- en eindscherm.',
            'tech-title' : 'Technologie',
            'tech-1' : 'Alles is geprogrammeerd in TypeScript en HTML/CSS. Vanilla TS gebruiken was waarschijnlijk niet de efficiëntste manier om een webgame te maken, maar het werkte en heeft mij erg geholpen bij het leren van TS. Alle art assets zijn gemaakt met Adobe Photoshop.',
            'gallery-title' : 'Gallerij'
        },
        reactNotes: {
            'about-title' : 'Over',
            'about-1' : 'Met deze webapplicatie kun je notities maken, lezen, updaten en verwijderen. Omdat ik nog niet eerder met React had gewerkt heb ik alle modules duidelijk onderscheid gegeven qua kleur. React leren was minder moeilijk dan ik had verwacht en werd naarmate ik meer wist steeds leuker.',
            'tech-title' : 'Technologie',
            'tech-1' : 'Deze applicatie is gemaakt met React.js. Ik heb de API van een leraar gebruikt, omdat mijn backend API nog niet af was.',
            'gallery-title' : 'Gallerij'
        },
        backendApi: {
            'about-title' : 'Over',
            'about-1' : 'Deze API is gebouwd om dieren in op te slaan. Je kan hun naam, leeftijd, dieet en soort toevoegen.',
            'about-2' : 'Het maken hiervan gaf mij inzicht in de werking van API\'s en HTTP requests. De API heeft ook een pagination om het compleet te maken.',
            'tech-title' : 'Technologie',
            'tech-1' : 'Deze backend API is gemaakt met Node.js, Express en Mongoose. Het accepteerd alleen Strings als input, omdat dit een eis van school was. Dat is een beetje apart, maar goed.',
            'gallery-title' : 'Gallerij'
        },
        laravelGallery: {
            'about-title' : 'Over',
            'about-1' : 'Op deze webapp kan je inloggen en afbeeldingen posten met een titel, beschrijving en een tag. Andere functies zijn het liken van afbeeldingen en het verbergen, aanpassen en verwijderen van je eigen afbeeldingen. Ook kan er gezocht worden op titel of tag. Op het moment zijn er 5 tags, maar dit kan uitgebeid worden.',
            'tech-title' : 'Technologie',
            'tech-1' : 'De Laravel Gallery is, zoals de naam suggereert, gemaakt met het PHP framework Laravel. Laravel werkt met het MCV pattern, dus deze applicatie maakt daar ook gebruik van. De applicatie heeft een MySQL database.',
            'gallery-title' : 'Gallerij'
        }
    },
    menu: {
        eng: {
            'link-aboutMe' : 'About me',
            'link-projects' : 'Projects',
            'link-summary' : 'Summary',
            'link-gallery' : 'Gallery'
        },
        nl: {
            'link-aboutMe' : 'Over mij',
            'link-projects' : 'Projecten',
            'link-summary' : 'Samenvatting',
            'link-gallery' : 'Gallerij'
        }
    }
}