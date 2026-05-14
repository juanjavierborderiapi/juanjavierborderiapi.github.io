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
    { id: 'DXwwzqcoBd5', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DWnygnsCEK1', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DV5lGVZiHgW', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DWCDF24iN9v', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DWEK4PoCMMD', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DVDaXBBCCZM', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DU5IPfUiF59', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DUndxKsCGaF', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DUS9IsmiMfx', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DRXynKYiEXt', title: 'Publicación @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
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
                <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span style="color: white; margin-top: 8px; font-weight: 500; font-size: 0.9rem;">Ver en Instagram</span>
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
            window.open(`https://www.instagram.com/p/${id}/`, '_blank');
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
