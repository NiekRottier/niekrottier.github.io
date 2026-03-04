// ---- Load project ----
const projectId = new URLSearchParams(window.location.search).get('id');
if (!projectId) window.location.href = 'index.html';

let project;

fetch('data/projects.json')
    .then(res => res.json())
    .then(projects => {
        project = projects[projectId];
        if (!project) { window.location.href = 'index.html'; return; }
        init();
    });

function init() {
    document.title = `${project.title} - Niek Rottier`;
    document.getElementById('hero-img').src = project.heroImg;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-subtitle').textContent = project.subtitle;

    renderGallery();
    setLanguage(localStorage.getItem('lang') || 'eng');
}

// ---- Render sections ----
function renderSections(lang) {
    const container = document.getElementById('summary');
    const sections = project.sections[lang] || project.sections.eng;
    container.innerHTML = '';

    sections.forEach(section => {
        const card = document.createElement('div');
        card.className = 'summary-card';

        let html = `<h2>${section.title}</h2>`;
        section.texts.forEach(t => { html += `<p>${t}</p>`; });
        if (section.links) {
            section.links.forEach(l => {
                html += `<a href="${l.url}" target="_blank" rel="noopener">${l.text} &rarr;</a>`;
            });
        }

        card.innerHTML = html;
        container.appendChild(card);
    });
}

// ---- Gallery ----
function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    const section = document.getElementById('gallery-section');

    if (!project.gallery || project.gallery.length === 0) {
        section.style.display = 'none';
        return;
    }

    project.gallery.forEach(item => {
        if (item.type === 'iframe') {
            const iframe = document.createElement('iframe');
            iframe.src = item.src;
            iframe.allowFullscreen = true;
            iframe.loading = 'lazy';
            grid.appendChild(iframe);
        } else {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt || '';
            img.loading = 'lazy';
            img.addEventListener('click', () => openLightbox(item.src));
            grid.appendChild(img);
        }
    });
}

// ---- Lightbox ----
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('open');
}

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
});

// ---- Language ----
const galleryTranslations = { eng: 'Gallery', nl: 'Galerij' };

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('lang-' + lang)?.classList.add('active');
    renderSections(lang);
    document.getElementById('gallery-title').textContent = galleryTranslations[lang] || 'Gallery';
}

document.getElementById('lang-eng')?.addEventListener('click', () => setLanguage('eng'));
document.getElementById('lang-nl')?.addEventListener('click', () => setLanguage('nl'));
