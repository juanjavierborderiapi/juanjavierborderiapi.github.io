// =============================================
// VIDEO DATA — All projects from Enlaces.txt
// =============================================
const projects = [
    // === PRODUCCIÓN PROPIA (Grabé + Edité + Produje) ===
    { id: 'ILr6aVEausI', title: 'Producción Audiovisual Completa', role: 'Grabación, edición y producción', category: 'produccion', platform: 'youtube' },
    { id: 'N5Byr2mOn-g', title: 'Pieza Audiovisual RC', role: 'Grabación, edición y producción', category: 'produccion', platform: 'youtube' },
    { id: 'lZiSt-EwxYI', title: 'Vídeo Institucional RC', role: 'Grabación, edición y producción', category: 'produccion', platform: 'youtube' },
    { id: 'D3cMDm1j9wY', title: 'Proyecto Audiovisual Propio', role: 'Creación completa del vídeo', category: 'produccion', platform: 'youtube' },
    { id: 'mtowqpWHopw', title: 'Proyecto Audiovisual Propio', role: 'Creación completa del vídeo', category: 'produccion', platform: 'youtube' },

    // === EDICIÓN ===
    { id: 'gxQ6BIMZY9U', title: 'Vídeo Corporativo RC', role: 'Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: 'eugu_8fjzeY', title: 'Vídeo Corporativo RC', role: 'Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: '0DjWuAS02aY', title: 'Pieza Audiovisual RC', role: 'Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: 'DvOGafQY0W4', title: 'Contenido Institucional RC', role: 'Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: '5onfCbZ80Yc', title: 'Vídeo Institucional RC', role: 'Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: '_NbB1N3U9bQ', title: 'Pieza Audiovisual RC', role: 'Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: 'bhpokneN90E', title: 'Contenido Digital RC', role: 'Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: 'BU3GOcBMoT0', title: 'Vídeo Corporativo RC', role: 'Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: 'NlhGJHQ6JOU', title: 'Pieza Institucional RC', role: 'Edición y postproducción', category: 'edicion', platform: 'youtube' },
    { id: '3cz9E_F6Lko', title: 'Vídeo con Locución Propia', role: 'Edición y locución', category: 'edicion', platform: 'youtube' },

    // === LOCUCIÓN ===
    { id: 'mV0vAHHyeuA', title: 'Pieza Informativa RC', role: 'Locución y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'MyoT6U6FsG4', title: 'Contenido Institucional RC', role: 'Locución y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'codr3tqjFfM', title: 'Vídeo Informativo RC', role: 'Locución y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'nReNGofoTRw', title: 'Pieza Corporativa RC', role: 'Locución y voz en off', category: 'locucion', platform: 'youtube' },
    { id: '5LKUW_xVyEw', title: 'Contenido Digital RC', role: 'Locución y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'vMPbj9NqJ4k', title: 'Vídeo Institucional RC', role: 'Locución y voz en off', category: 'locucion', platform: 'youtube' },

    // === INSTAGRAM / RRSS ===
    { url: 'https://www.instagram.com/p/DXwwzqcoBd5/', id: 'DXwwzqcoBd5', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DV5lGVZiHgW/', id: 'DV5lGVZiHgW', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DWCDF24iN9v/', id: 'DWCDF24iN9v', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DWEK4PoCMMD/', id: 'DWEK4PoCMMD', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DVDaXBBCCZM/', id: 'DVDaXBBCCZM', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DU5IPfUiF59/', id: 'DU5IPfUiF59', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DUndxKsCGaF/', id: 'DUndxKsCGaF', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DUS9IsmiMfx/', id: 'DUS9IsmiMfx', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { url: 'https://www.instagram.com/p/DRXynKYiEXt/', id: 'DRXynKYiEXt', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' }
];

// =============================================
// DOM READY
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    renderVideoGrid();
    initFilters();
    initModal();
    initNavbar();
});

// =============================================
// RENDER VIDEO GRID
// =============================================
function renderVideoGrid() {
    const grid = document.getElementById('video-grid');
    if (!grid) return;

    grid.innerHTML = projects.map(project => {
        let thumbContent;
        if (project.platform === 'youtube') {
            thumbContent = `<img src="https://img.youtube.com/vi/${project.id}/hqdefault.jpg" alt="${project.title}" loading="lazy">`;
        } else {
            thumbContent = `<div class="instagram-thumb">
                <img src="assets/img/ig/ig_${project.id}.jpg" alt="${project.title}" loading="lazy">
            </div>`;
        }

        const playSvg = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;

        return `
            <article class="video-card" data-category="${project.category}" data-id="${project.id}" data-platform="${project.platform}">
                <div class="video-thumb">
                    ${thumbContent}
                    <div class="play-icon">${playSvg}</div>
                </div>
                <div class="video-info">
                    <div class="video-title">${project.title}</div>
                    <div class="video-role">${project.role}</div>
                </div>
            </article>
        `;
    }).join('');
}

// =============================================
// FILTER SYSTEM
// =============================================
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = () => document.querySelectorAll('.video-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards().forEach(card => {
                if (filter === 'todos' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// =============================================
// VIDEO MODAL (Lightbox)
// =============================================
function initModal() {
    const overlay = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close');

    if (!overlay) return;

    // Open modal on card click
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.video-card');
        if (!card) return;

        const id = card.dataset.id;
        const platform = card.dataset.platform;

        if (platform === 'youtube') {
            content.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" allowfullscreen allow="autoplay; encrypted-media"></iframe>`;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else if (platform === 'instagram') {
            const project = projects.find(p => p.id === id);
            const igUrl = project ? project.url : `https://www.instagram.com/p/${id}/`;
            window.open(igUrl, '_blank');
        }
    });

    // Close modal
    function closeModal() {
        overlay.classList.remove('active');
        content.innerHTML = '';
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// =============================================
// NAVBAR SCROLL EFFECT & MOBILE MENU
// =============================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    // Scroll effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu toggle
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('open');
        });

        // Close mobile menu on link click
        links.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('open');
            });
        });
    }
}
