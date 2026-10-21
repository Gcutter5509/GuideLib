// Все названия, описания, иконки и адреса гайдов собраны здесь.
const guides = [
    {
        name: 'Фури Воин',
        className: 'Воин',
        icon: 'classicon_warrior',
        role: 'АДД',
        description: 'Ближний бой с двумя оружиями и частыми мощными атаками. Билд раскрывается в затяжных боях с боссами.',
        url: 'https://wow-sirus.com/gaydy/wotlk/voin/furi-var-335-pve-gayd-neistovstvo.html?ysclid=ml0k2j1r8c525571503',
    },
    {
        name: 'ММ Охотник',
        className: 'Охотник',
        icon: 'classicon_hunter',
        role: 'РДД',
        description: 'Дальний физический урон с упором на точные выстрелы. Подходит для стабильного нанесения урона на дистанции.',
        url: 'https://wow-sirus.com/gaydy/wotlk/ohotnik/mm-hant-3-3-5-pve-gayd-strelba.html?ysclid=ml0ka2x2qg407795558',
    },
    {
        name: 'РДД Друид',
        className: 'Друид',
        icon: 'classicon_druid',
        role: 'РДД',
        description: 'Заклинатель дальнего боя с периодическим уроном и сильными звёздными заклинаниями. Эффективен в длительных боях.',
        url: 'https://wow-sirus.com/gaydy/wotlk/druid-tank-335-gayd-pve-sila-zverya.html?ysclid=ml0kcv4vzt809280975',
    },
    {
        name: 'Рестор Друид',
        className: 'Друид',
        icon: 'classicon_druid',
        role: 'Саппорт',
        description: 'Целитель, который поддерживает группу периодическим лечением. Хорошо справляется с постепенным входящим уроном.',
        url: 'https://forum.wowcircle.com/showthread.php?t=370&ysclid=ml0kunwjmu893373453',
    },
    {
        name: 'Ретро Паладин',
        className: 'Паладин',
        icon: 'classicon_paladin',
        role: 'АДД',
        description: 'Ближний бой со священным уроном и мощными завершающими атаками. Универсальный урон и полезная поддержка группы.',
        url: 'https://wow-sirus.com/gaydy/wotlk/paladin/retri-pal-335-pve-gayd-vozdayanie.html?ysclid=ml0l0tpezk404035842',
    },
    {
        name: 'Защитный Паладин',
        className: 'Паладин',
        icon: 'classicon_paladin',
        role: 'Танк',
        description: 'Танк с сильной защитой и набором инструментов для контроля противников. Подходит для подземелий и рейдов.',
        url: 'https://forum.wowcircle.com/showthread.php?t=304041&ysclid=ml0l1tyk7u403367607',
    },
    {
        name: 'Комбат Разбойник',
        className: 'Разбойник',
        icon: 'classicon_rogue',
        role: 'АДД',
        description: 'Быстрый ближний бой с упором на непрерывные атаки. Особенно силён при стабильном контакте с целью.',
        url: 'https://wow-sirus.com/gaydy/wotlk/razboynik/kombat-roga-3-3-5-pve-gayd-boy.html?ysclid=ml0l77y23p882917521',
    },
    {
        name: 'Мути Разбойник',
        className: 'Разбойник',
        icon: 'classicon_rogue',
        role: 'АДД',
        description: 'Билд с кинжалами, ядами и мощными атаками по уязвимым целям. Награждает за грамотное поддержание эффектов.',
        url: 'https://forum.wowcircle.com/showthread.php?t=126874&ysclid=ml0l883e36321033836',
    },
    {
        name: 'Аркан Маг',
        className: 'Маг',
        icon: 'classicon_mage',
        role: 'РДД',
        description: 'Взрывной магический урон с управлением запасом маны. Позволяет быстро усиливать урон в нужный момент.',
        url: 'https://wow-sirus.com/gaydy/wotlk/mag/arkan-mag-335-pve-gayd-taynaya-magiya.html?ysclid=ml0lfg8pqc671476380',
    },
    {
        name: 'Фаер Маг',
        className: 'Маг',
        icon: 'classicon_mage',
        role: 'РДД',
        description: 'Огненные заклинания с высоким уроном и частыми критическими ударами. Силен в боях с подходящими условиями.',
        url: 'https://www.allmmorpg.ru/wow/wotlk/64095-faer-mag-pve-guide-wotlk/?ysclid=ml0lgz22m133830538',
    },
    {
        name: 'Фрост Маг',
        className: 'Маг',
        icon: 'classicon_mage',
        role: 'РДД',
        description: 'Ледяные заклинания сочетают урон и контроль противников. Гайд описывает применение специализации в ПВЕ.',
        url: 'https://ezwow.org/topic/87715-gajd-frost-pve-mag-frost-pve-mage-wotlk-335/?ysclid=ml0lhnu9dr706647920',
    },
    {
        name: 'Демон Чернокнижник',
        className: 'Чернокнижник',
        icon: 'classicon_warlock',
        role: 'РДД',
        description: 'Урон тьмой и огнём при поддержке демонического спутника. Билд усиливает группу и стабильно атакует цель.',
        url: 'https://wow-sirus.com/gaydy/wotlk/demon-lok-335-pve-gayd-chernoknizhnik.html?ysclid=ml0lpx5vfh634454683',
    },
    {
        name: 'Дестро Чернокнижник',
        className: 'Чернокнижник',
        icon: 'classicon_warlock',
        role: 'РДД',
        description: 'Прямой магический урон с сильными огненными заклинаниями. Хороший выбор для активной ротации и урона по боссу.',
        url: 'https://wow-sirus.com/gaydy/wotlk/lok/destro-lok-335-pve-gayd-razrushenie.html?ysclid=ml0m1pcms3520457210',
    },
    {
        name: 'ШП Жрец',
        className: 'Жрец',
        icon: 'classicon_priest',
        role: 'РДД',
        description: 'Тёмная магия и периодический урон с дополнительной поддержкой группы. Поддерживает стабильное давление на цели.',
        url: 'https://wow-sirus.com/gaydy/wotlk/prist/shp-prist-335-pve-gayd-tma.html?ysclid=ml0m9abvk9594794101',
    },
    {
        name: 'ДЦ Жрец',
        className: 'Жрец',
        icon: 'classicon_priest',
        role: 'Саппорт',
        description: 'Защитное лечение через щиты и предотвращение урона. Помогает группе переживать опасные механики.',
        url: 'https://wow-sirus.com/gaydy/wotlk/dc-prist-335-gayd-pve-poslushanie.html?ysclid=ml0m9h1vo7883638528',
    },
    {
        name: 'ХП Жрец',
        className: 'Жрец',
        icon: 'classicon_priest',
        role: 'Саппорт',
        description: 'Гибкий целитель с быстрым лечением отдельных игроков и восстановлением здоровья группы. Подходит для разных ситуаций.',
        url: 'https://forum.wowcircle.com/showthread.php?t=350169&ysclid=ml0mbdg2up89830357',
    },
    {
        name: 'Анхоли ДК',
        className: 'Рыцарь смерти',
        icon: 'spell_deathknight_classicon',
        role: 'АДД',
        description: 'Болезни, прислужник и периодический урон создают сильное давление на цель. Билд раскрывается в продолжительном бою.',
        url: 'https://forum.wowcircle.com/showthread.php?t=655891&ysclid=ml0mcldw85132819833',
    },
    {
        name: 'Блад ДК',
        className: 'Рыцарь смерти',
        icon: 'spell_deathknight_classicon',
        role: 'Танк',
        description: 'Танкование через рунические способности и мощное самоисцеление. Помогает выдерживать большой входящий урон.',
        url: 'https://wow-sirus.com/gaydy/wotlk/dk/blad-dk-335-pve-gayd-krov.html?ysclid=ml0mh2iy6i254828285',
    },
    {
        name: 'Фрост ДК',
        className: 'Рыцарь смерти',
        icon: 'spell_deathknight_classicon',
        role: 'АДД',
        description: 'Ледяной ближний бой с мощными ударами и сильным уроном по нескольким противникам. Использует одну или две руки.',
        url: 'https://forum.wowcircle.com/showthread.php?t=307438&ysclid=ml0miq6jad598312678',
    },
    {
        name: 'Элем Шаман',
        className: 'Шаман',
        icon: 'classicon_shaman',
        role: 'РДД',
        description: 'Дальние атаки молнией и огнём с поддержкой тотемов. Сочетает урон с полезными групповыми усилениями.',
        url: 'https://wow-sirus.com/gaydy/wotlk/shaman/yelem-shaman-335-pve-gayd-stihii.html?ysclid=ml0mnbihl5639279282',
    },
    {
        name: 'Энх Шаман',
        className: 'Шаман',
        icon: 'classicon_shaman',
        role: 'АДД',
        description: 'Ближний бой с оружием, магическими эффектами и тотемами. Наносит смешанный урон и усиливает союзников.',
        url: 'https://forum.wowcircle.com/showthread.php?t=419089&ysclid=ml0mnl0qbc375747354',
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
    for (const card of cards) {
        card.style.display = (role === 'all' || card.dataset.role === role) ? '' : 'none';
    }
});
