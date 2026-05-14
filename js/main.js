const projects = [
    { id: 'ILr6aVEausI', title: 'Producci\u00f3n Audiovisual Completa', role: 'Grabaci\u00f3n, edici\u00f3n y producci\u00f3n', category: 'produccion', platform: 'youtube' },
    { id: 'N5Byr2mOn-g', title: 'Pieza Audiovisual RC', role: 'Grabaci\u00f3n, edici\u00f3n y producci\u00f3n', category: 'produccion', platform: 'youtube' },
    { id: 'lZiSt-EwxYI', title: 'V\u00eddeo Institucional RC', role: 'Grabaci\u00f3n, edici\u00f3n y producci\u00f3n', category: 'produccion', platform: 'youtube' },
    { id: 'D3cMDm1j9wY', title: 'Proyecto Audiovisual Propio', role: 'Creaci\u00f3n completa del v\u00eddeo', category: 'produccion', platform: 'youtube' },
    { id: 'mtowqpWHopw', title: 'Proyecto Audiovisual Propio', role: 'Creaci\u00f3n completa del v\u00eddeo', category: 'produccion', platform: 'youtube' },
    { id: 'gxQ6BIMZY9U', title: 'V\u00eddeo Corporativo RC', role: 'Edici\u00f3n y postproducci\u00f3n', category: 'edicion', platform: 'youtube' },
    { id: 'eugu_8fjzeY', title: 'V\u00eddeo Corporativo RC', role: 'Edici\u00f3n y postproducci\u00f3n', category: 'edicion', platform: 'youtube' },
    { id: '0DjWuAS02aY', title: 'Pieza Audiovisual RC', role: 'Edici\u00f3n y postproducci\u00f3n', category: 'edicion', platform: 'youtube' },
    { id: 'DvOGafQY0W4', title: 'Contenido Institucional RC', role: 'Edici\u00f3n y postproducci\u00f3n', category: 'edicion', platform: 'youtube' },
    { id: '5onfCbZ80Yc', title: 'V\u00eddeo Institucional RC', role: 'Edici\u00f3n y postproducci\u00f3n', category: 'edicion', platform: 'youtube' },
    { id: '_NbB1N3U9bQ', title: 'Pieza Audiovisual RC', role: 'Edici\u00f3n y postproducci\u00f3n', category: 'edicion', platform: 'youtube' },
    { id: 'bhpokneN90E', title: 'Contenido Digital RC', role: 'Edici\u00f3n y postproducci\u00f3n', category: 'edicion', platform: 'youtube' },
    { id: 'BU3GOcBMoT0', title: 'V\u00eddeo Corporativo RC', role: 'Edici\u00f3n y postproducci\u00f3n', category: 'edicion', platform: 'youtube' },
    { id: 'NlhGJHQ6JOU', title: 'Pieza Institucional RC', role: 'Edici\u00f3n y postproducci\u00f3n', category: 'edicion', platform: 'youtube' },
    { id: '3cz9E_F6Lko', title: 'V\u00eddeo con Locuci\u00f3n Propia', role: 'Edici\u00f3n y locuci\u00f3n', category: 'edicion', platform: 'youtube' },
    { id: 'mV0vAHHyeuA', title: 'Pieza Informativa RC', role: 'Locuci\u00f3n y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'MyoT6U6FsG4', title: 'Contenido Institucional RC', role: 'Locuci\u00f3n y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'codr3tqjFfM', title: 'V\u00eddeo Informativo RC', role: 'Locuci\u00f3n y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'nReNGofoTRw', title: 'Pieza Corporativa RC', role: 'Locuci\u00f3n y voz en off', category: 'locucion', platform: 'youtube' },
    { id: '5LKUW_xVyEw', title: 'Contenido Digital RC', role: 'Locuci\u00f3n y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'vMPbj9NqJ4k', title: 'V\u00eddeo Institucional RC', role: 'Locuci\u00f3n y voz en off', category: 'locucion', platform: 'youtube' },
    { id: 'DXwwzqcoBd5', title: 'Publicaci\u00f3n @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DWnygnsCEK1', title: 'Publicaci\u00f3n @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DV5lGVZiHgW', title: 'Publicaci\u00f3n @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DWCDF24iN9v', title: 'Publicaci\u00f3n @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DWEK4PoCMMD', title: 'Publicaci\u00f3n @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DVDaXBBCCZM', title: 'Publicaci\u00f3n @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DU5IPfUiF59', title: 'Publicaci\u00f3n @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DUndxKsCGaF', title: 'Publicaci\u00f3n @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DUS9IsmiMfx', title: 'Publicaci\u00f3n @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
    { id: 'DRXynKYiEXt', title: 'Publicaci\u00f3n @rc_espana', role: 'Contenido para RRSS', category: 'rrss', platform: 'instagram' },
];

document.addEventListener('DOMContentLoaded', () => {
    renderVideoGrid();
    initFilters();
    initModal();
    initNavbar();
});

function renderVideoGrid() {
    const grid = document.getElementById('video-grid');
    if (!grid) return;
    grid.innerHTML = projects.map(project => {
        const thumb = project.platform === 'youtube'
            ? `https://img.youtube.com/vi/${project.id}/hqdefault.jpg`
            : `https://placehold.co/640x360/1a2236/C8A96E?text=Instagram`;
        const playSvg = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
        return `
            <article class="video-card" data-category="${project.category}" data-id="${project.id}" data-platform="${project.platform}">
                <div class="video-thumb">
                    <img src="${thumb}" alt="${project.title}" loading="lazy">
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

function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = () => document.querySelectorAll('.video-card');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
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

function initModal() {
    const overlay = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-content');
    const closeBtn = document.getElementById('modal-close');
    if (!overlay) return;
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

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('open');
        });
        links.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('open');
            });
        });
    }
}