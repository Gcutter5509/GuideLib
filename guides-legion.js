// Все названия, описания, иконки и адреса гайдов для WoW 7.3.5 Legion собраны здесь.
const guides = [
    {
        name: 'Хмелевар Монах',
        className: 'Монах',
        icon: 'classicon_monk',
        role: 'Танк',
        description: 'Мастер хмелеварения, управляющий входящим уроном с помощью пошатывания и крепких настоев. Мобильный и надежный танк для подземелий и рейдов.',
        url: 'https://www.allmmorpg.ru/wow/24203-monax-xmelevar-pve-gajd-legion/',
    },
    {
        name: 'Ткач туманов Монах',
        className: 'Монах',
        icon: 'classicon_monk',
        role: 'Саппорт',
        description: 'Целитель, сочетающий целительные туманы и энергию Ци для эффективного восстановления здоровья группы и одиночных целей.',
        url: 'https://www.allmmorpg.ru/wow/24241-monax-tkach-tumanov-xil-pve-guide/',
    },
    {
        name: 'Танцующий с ветром Монах',
        className: 'Монах',
        icon: 'classicon_monk',
        role: 'АДД',
        description: 'Мастер рукопашного боя с высокой подвижностью и комбинациями ударов. Наносит отличный урон как по одной цели, так и по группам врагов.',
        url: 'https://www.allmmorpg.ru/wow/23937-monax-tancuyushhij-s-vetrom-pve-gajd-legion/',
    },
];

const guideList = document.querySelector('#guide-list');
const classNav = document.querySelector('#class-nav');
const iconBaseUrl = 'https://wow.zamimg.com/images/wow/icons/large/';
const classAnchors = new Map();

for (const guide of guides) {
    const link = document.createElement('a');
    link.className = 'guide-card';
    if (!classAnchors.has(guide.className)) {
        const anchor = `class-${classAnchors.size}`;
        classAnchors.set(guide.className, anchor);
        link.id = anchor;

        const navLink = document.createElement('a');
        navLink.className = 'class-nav-link';
        navLink.href = `#${anchor}`;
        navLink.setAttribute('aria-label', `Перейти к гайдам класса «${guide.className}»`);
        navLink.title = guide.className;

        const navIcon = document.createElement('img');
        navIcon.src = `${iconBaseUrl}${guide.icon}.jpg`;
        navIcon.alt = '';
        navIcon.loading = 'lazy';
        navLink.append(navIcon);
        classNav.append(navLink);
    }
    link.href = guide.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const roleEmojis = { 'Саппорт': '💚', 'РДД': '🏹', 'АДД': '⚔️' };
    const roleBadge = document.createElement('span');
    roleBadge.className = 'guide-role-badge';
    roleBadge.setAttribute('aria-label', guide.role);
    if (guide.role === 'Танк') {
        roleBadge.innerHTML = '<svg class="role-icon-shield" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2L4 5v6.5C4 16.5 7.5 21 12 22c4.5-1 8-5.5 8-10.5V5l-8-3z" fill="#22303c" stroke="#121b22" stroke-width="1" stroke-linejoin="round"/><path d="M12 3.6L5.5 6v5.5c0 3.8 2.7 7.2 6.5 8.1 3.8-.9 6.5-4.3 6.5-8.2V6L12 3.6z" fill="#8fa1b3"/><path d="M12 3.6v13.6c3.8-.9 6.5-4.3 6.5-8.2V6L12 3.6z" fill="#677b8f"/><path d="M12 5.4L7 7.3v4.2c0 2.9 2.1 5.6 5 6.4 2.9-.8 5-3.5 5-6.4V7.3L12 5.4z" fill="#e2edf7"/><path d="M12 5.4v10.6c2.9-.8 5-3.5 5-6.4V7.3L12 5.4z" fill="#b8c8d8"/></svg>';
    } else {
        roleBadge.textContent = roleEmojis[guide.role] || '';
    }

    const icon = document.createElement('img');
    icon.className = 'guide-icon';
    icon.src = `${iconBaseUrl}${guide.icon}.jpg`;
    icon.alt = '';
    icon.loading = 'lazy';

    const category = document.createElement('span');
    category.className = 'guide-class';
    category.textContent = guide.className;

    const title = document.createElement('span');
    title.className = 'guide-name';
    title.textContent = guide.name;

    const description = document.createElement('span');
    description.className = 'guide-description';
    description.textContent = guide.description;

    const action = document.createElement('span');
    action.className = 'guide-action';
    action.setAttribute('aria-hidden', 'true');
    action.textContent = 'Открыть гайд ↗';

    const textWrap = document.createElement('div');
    textWrap.className = 'guide-card-text';
    textWrap.append(category, title, description, action);

    link.append(roleBadge, icon, textWrap);
    link.dataset.role = guide.role;
    guideList.append(link);
}

// --- Фильтрация по роли ---
const roleFilters = document.querySelector('#role-filters');
const roleButtons = roleFilters.querySelectorAll('.role-btn');
let activeRole = 'all';

// Блок уведомления при отсутствии гайдов по фильтру
const emptyNotice = document.createElement('div');
emptyNotice.className = 'empty-role-notice';
emptyNotice.textContent = 'Гайды для этой роли пока не добавлены.';
emptyNotice.style.display = 'none';
guideList.after(emptyNotice);

roleFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.role-btn');
    if (!btn) return;

    const role = btn.dataset.role;
    if (role === activeRole) return;

    activeRole = role;
    for (const b of roleButtons) {
        b.classList.toggle('active', b === btn);
    }

    const cards = guideList.querySelectorAll('.guide-card');
    let visibleCount = 0;
    for (const card of cards) {
        const matches = role === 'all' || card.dataset.role === role;
        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount++;
    }

    emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
});

// Автоматическая подстройка положения панели фильтров под высоту шапки
function updateHeaderOffset() {
    const header = document.querySelector('.site-header');
    if (header) {
        document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    }
}
window.addEventListener('resize', updateHeaderOffset);
window.addEventListener('load', updateHeaderOffset);
updateHeaderOffset();
