// Все названия, описания, иконки и адреса гайдов для WoW 7.3.5 Legion собраны здесь.
const guides = [
    {
        name: 'Армс Воин',
        className: 'Воин',
        icon: 'classicon_warrior',
        role: 'АДД',
        description: 'Ближний бой с двуручным оружием и мощными ударами под Ударом колосса. Силён против одной цели и хорошо раскрывается на добивании.',
        url: 'https://web.archive.org/web/20250913072951/https://www.allmmorpg.ru/wow/arms-war-pve-guide-legion/',
    },
    {
        name: 'Фури Воин',
        className: 'Воин',
        icon: 'classicon_warrior',
        role: 'АДД',
        description: 'Ближний бой с двумя оружиями и постоянной генерацией ярости. Даёт высокий урон в режиме исступления и отлично чистит группы противников.',
        url: 'https://web.archive.org/web/20250615013218/https://www.allmmorpg.ru/wow/fury-war-pve-gajd-legion/',
    },
    {
        name: 'Прот Воин',
        className: 'Воин',
        icon: 'classicon_warrior',
        role: 'Танк',
        description: 'Танк со щитом, который снижает урон блоком и Непроницаемым щитом. Надёжен в рейдах и хорошо держит большие группы врагов.',
        url: 'https://web.archive.org/web/20250710195901/https://www.allmmorpg.ru/wow/woin-tank-pve-gajd-legion/',
    },
    {
        name: 'БМ Охотник',
        className: 'Охотник',
        icon: 'classicon_hunter',
        role: 'РДД',
        description: 'Дальний бой вместе с питомцами, которые наносят большую часть урона. Можно стрелять на ходу, поэтому билд очень мобильный.',
        url: 'https://web.archive.org/web/20250616164602/https://www.allmmorpg.ru/wow/bm-hant-pve-gajd-legion/',
    },
    {
        name: 'ММ Охотник',
        className: 'Охотник',
        icon: 'classicon_hunter',
        role: 'РДД',
        description: 'Дальний физический урон с упором на точные Прицельные выстрелы. Подходит для стабильного нанесения урона на дистанции.',
        url: 'https://web.archive.org/web/20250914214623/https://www.allmmorpg.ru/wow/mm-hant-pve-gajd-legion/',
    },
    {
        name: 'Сурв Охотник',
        className: 'Охотник',
        icon: 'classicon_hunter',
        role: 'АДД',
        description: 'В Легионе — охотник ближнего боя с копьём, ловушками и питомцем. Наносит периодический урон и легко переключается между целями.',
        url: 'https://web.archive.org/web/20250618182115/https://www.allmmorpg.ru/wow/surv-xant-pve-guide-legion/',
    },
    {
        name: 'Баланс Друид',
        className: 'Друид',
        icon: 'classicon_druid',
        role: 'РДД',
        description: 'Заклинатель дальнего боя, сочетающий лунные и солнечные заклинания с периодическим уроном. Особенно силён в боях с несколькими целями.',
        url: 'https://web.archive.org/web/20250424030748/https://www.allmmorpg.ru/wow/balans-druid-pve-guide-legion/',
    },
    {
        name: 'Ферал Друид',
        className: 'Друид',
        icon: 'classicon_druid',
        role: 'АДД',
        description: 'Ближний бой в облике кошки с кровотечениями и завершающими приёмами. Требует внимания к таймингам, но вознаграждает высоким уроном.',
        url: 'https://web.archive.org/web/20250914060817/https://www.allmmorpg.ru/wow/feral-druid-pve-gajd-legion/',
    },
    {
        name: 'Страж Друид',
        className: 'Друид',
        icon: 'classicon_druid',
        role: 'Танк',
        description: 'Танк в облике медведя с огромным запасом здоровья и сильным самолечением. Устойчив к магическому урону и прост в освоении.',
        url: 'https://web.archive.org/web/20250916225650/https://www.allmmorpg.ru/wow/strazh-druid-tank-pve-gajd-legion/',
    },
    {
        name: 'Рестор Друид',
        className: 'Друид',
        icon: 'classicon_druid',
        role: 'Саппорт',
        description: 'Целитель, который поддерживает группу периодическим лечением. Хорошо справляется с постепенным входящим уроном.',
        url: 'https://web.archive.org/web/20250911032440/https://www.allmmorpg.ru/wow/restor-druid-pve-guide-legion/',
    },
    {
        name: 'Холи Паладин',
        className: 'Паладин',
        icon: 'classicon_paladin',
        role: 'Саппорт',
        description: 'Целитель с мощным прямым лечением и Частицей Света на основной цели. Отлично держит танков и вкладывается во всплески урона.',
        url: 'https://web.archive.org/web/20250905153454/https://www.allmmorpg.ru/wow/holi-paladin-pve-gajd-legion/',
    },
    {
        name: 'Защитный Паладин',
        className: 'Паладин',
        icon: 'classicon_paladin',
        role: 'Танк',
        description: 'Танк со щитом и священной магией, который лечит себя Светом Защитника. Хорошо собирает группы противников Щитом мстителя.',
        url: 'https://web.archive.org/web/20250910020906/https://www.allmmorpg.ru/wow/paladin-tank-pve-gajd-legion/',
    },
    {
        name: 'Ретро Паладин',
        className: 'Паладин',
        icon: 'classicon_paladin',
        role: 'АДД',
        description: 'Ближний бой со священным уроном и мощными завершающими атаками за Силу Света. Универсальный урон и полезная поддержка группы.',
        url: 'https://web.archive.org/web/20250913055644/https://www.allmmorpg.ru/wow/retri-paladin-pve-gajd-legion/',
    },
    {
        name: 'Мути Разбойник',
        className: 'Разбойник',
        icon: 'classicon_rogue',
        role: 'АДД',
        description: 'Ближний бой с ядами и кровотечениями, которые наносят урон со временем. Особенно силён в затяжных боях с боссами.',
        url: 'https://web.archive.org/web/20251009074746/https://www.allmmorpg.ru/wow/muti-roga-pve-gajd-legion/',
    },
    {
        name: 'Аутлоу Разбойник',
        className: 'Разбойник',
        icon: 'classicon_rogue',
        role: 'АДД',
        description: 'Ближний бой с пистолетом и абордажным крюком, усиленный случайными бонусами Броска костей. Стабильный урон и высокая подвижность.',
        url: 'https://web.archive.org/web/20250516164532/https://www.allmmorpg.ru/wow/golovorez-roga-pve-gajd-legion/',
    },
    {
        name: 'ШД Разбойник',
        className: 'Разбойник',
        icon: 'classicon_rogue',
        role: 'АДД',
        description: 'Ближний бой из теней с Танцем теней и Теневыми клинками. Наносит сильный урон короткими всплесками.',
        url: 'https://web.archive.org/web/20250615031600/https://www.allmmorpg.ru/wow/shd-roga-pve-gajd-legion/',
    },
    {
        name: 'Аркан Маг',
        className: 'Маг',
        icon: 'classicon_mage',
        role: 'РДД',
        description: 'Заклинатель тайной магии, который копит и тратит заряды и ману. Даёт мощный взрывной урон во время Мощи тайной магии.',
        url: 'https://web.archive.org/web/20250914062842/https://www.allmmorpg.ru/wow/klassy/mag/arkan-mag-pve-gajd-legion/',
    },
    {
        name: 'Фаер Маг',
        className: 'Маг',
        icon: 'classicon_mage',
        role: 'РДД',
        description: 'Заклинатель огня, построенный на критических ударах и Огненной глыбе. Отлично раскрывается во время Возгорания.',
        url: 'https://web.archive.org/web/20250906132321/https://www.allmmorpg.ru/wow/klassy/mag/faer-mag-pve-gajd-legion/',
    },
    {
        name: 'Фрост Маг',
        className: 'Маг',
        icon: 'classicon_mage',
        role: 'РДД',
        description: 'Заклинатель льда с Ледяными копьями и Ледяными пальцами. Стабильный урон, хороший контроль и урон по нескольким целям.',
        url: 'https://web.archive.org/web/20250913082823/https://www.allmmorpg.ru/wow/klassy/mag/frost-mag-pve-gajd-legion/',
    },
    {
        name: 'Афли Чернокнижник',
        className: 'Чернокнижник',
        icon: 'classicon_warlock',
        role: 'РДД',
        description: 'Мастер проклятий и периодического урона, который тратит осколки душ на Нестабильное колдовство. Силён против нескольких целей.',
        url: 'https://web.archive.org/web/20250710194758/https://www.allmmorpg.ru/wow/afli-lok-pve-gajd-legion/',
    },
    {
        name: 'Демон Чернокнижник',
        className: 'Чернокнижник',
        icon: 'classicon_warlock',
        role: 'РДД',
        description: 'Призыватель, который сражается вместе с армией демонов. Урон растёт вместе с числом призванных помощников.',
        url: 'https://web.archive.org/web/20250914051017/https://www.allmmorpg.ru/wow/demonolog-pve-guide-legion/',
    },
    {
        name: 'Дестро Чернокнижник',
        className: 'Чернокнижник',
        icon: 'classicon_warlock',
        role: 'РДД',
        description: 'Заклинатель огня Скверны с мощными Стрелами Хаоса. Наносит взрывной урон по одной и двум целям.',
        url: 'https://web.archive.org/web/20250917234050/https://www.allmmorpg.ru/wow/destro-lok-pve-gajd-legion/',
    },
    {
        name: 'ДЦ Жрец',
        className: 'Жрец',
        icon: 'classicon_priest',
        role: 'Саппорт',
        description: 'Целитель, который лечит союзников через Искупление, нанося урон врагам. Отлично предотвращает урон щитами.',
        url: 'https://web.archive.org/web/20250620044857/https://www.allmmorpg.ru/wow/dc-prist-pve-gajd-legion/',
    },
    {
        name: 'ХП Жрец',
        className: 'Жрец',
        icon: 'classicon_priest',
        role: 'Саппорт',
        description: 'Целитель Света с сильным лечением по площади и Словами Света. Хорошо справляется с большим уроном по всему рейду.',
        url: 'https://web.archive.org/web/20250918001800/https://www.allmmorpg.ru/wow/holi-prist-pve-gajd-legion/',
    },
    {
        name: 'ШП Жрец',
        className: 'Жрец',
        icon: 'classicon_priest',
        role: 'РДД',
        description: 'Заклинатель тёмной магии, который накапливает Безумие в облике Бездны. Урон растёт по ходу боя, поэтому силён в затяжных схватках.',
        url: 'https://web.archive.org/web/20250906132048/https://www.allmmorpg.ru/wow/shp-pve-guide-legion/',
    },
    {
        name: 'Блад ДК',
        className: 'Рыцарь смерти',
        icon: 'spell_deathknight_classicon',
        role: 'Танк',
        description: 'Танк, который выживает за счёт самолечения Ударом смерти и Костяного щита. Надёжен в подземельях и рейдах.',
        url: 'https://web.archive.org/web/20250615030300/https://www.allmmorpg.ru/wow/blad-dk-tank-pve-guide-legion/',
    },
    {
        name: 'Фрост ДК',
        className: 'Рыцарь смерти',
        icon: 'spell_deathknight_classicon',
        role: 'АДД',
        description: 'Ближний бой с двумя оружиями и мощными ледяными ударами. Даёт высокий урон во время Ледяного столпа.',
        url: 'https://web.archive.org/web/20250807093348/https://www.allmmorpg.ru/wow/frost-dk-pve-gajd-legion/',
    },
    {
        name: 'Анхоли ДК',
        className: 'Рыцарь смерти',
        icon: 'spell_deathknight_classicon',
        role: 'АДД',
        description: 'Ближний бой с болезнями, гнойными ранами и армией нежити. Силён в затяжных боях и против нескольких целей.',
        url: 'https://web.archive.org/web/20251012083409/https://www.allmmorpg.ru/wow/unholy-dk-pve-gajd-legion/',
    },
    {
        name: 'Элем Шаман',
        className: 'Шаман',
        icon: 'classicon_shaman',
        role: 'РДД',
        description: 'Заклинатель стихий с молниями, лавой и Землетрясением. Хорошо наносит урон как по одной цели, так и по группам.',
        url: 'https://web.archive.org/web/20250615032930/https://www.allmmorpg.ru/wow/elem-shaman-pve-gajd-legion/',
    },
    {
        name: 'Энх Шаман',
        className: 'Шаман',
        icon: 'classicon_shaman',
        role: 'АДД',
        description: 'Ближний бой с двумя оружиями, усиленными силой стихий и Водоворотом. Быстрый и динамичный стиль игры.',
        url: 'https://web.archive.org/web/20250615023758/https://www.allmmorpg.ru/wow/enh-shaman-pve-gajd-legion/',
    },
    {
        name: 'Рестор Шаман',
        className: 'Шаман',
        icon: 'classicon_shaman',
        role: 'Саппорт',
        description: 'Целитель с сильным лечением по группе и полезными тотемами. Хорошо справляется с большим уроном по рейду.',
        url: 'https://web.archive.org/web/20250906141146/https://www.allmmorpg.ru/wow/restor-shaman-pve-gajd-legion/',
    },
    {
        name: 'Хмелевар Монах',
        className: 'Монах',
        icon: 'classicon_monk',
        role: 'Танк',
        description: 'Мастер хмелеварения, управляющий входящим уроном с помощью пошатывания и крепких настоев. Мобильный и надежный танк для подземелий и рейдов.',
        url: 'https://web.archive.org/web/20250913082634/https://www.allmmorpg.ru/wow/monax-xmelevar-pve-gajd-legion/',
    },
    {
        name: 'Ткач туманов Монах',
        className: 'Монах',
        icon: 'classicon_monk',
        role: 'Саппорт',
        description: 'Целитель, сочетающий целительные туманы и энергию Ци для эффективного восстановления здоровья группы и одиночных целей.',
        url: 'https://web.archive.org/web/20250905162526/https://www.allmmorpg.ru/wow/monax-tkach-tumanov-xil-pve-guide/',
    },
    {
        name: 'Танцующий с ветром Монах',
        className: 'Монах',
        icon: 'classicon_monk',
        role: 'АДД',
        description: 'Мастер рукопашного боя с высокой подвижностью и комбинациями ударов. Наносит отличный урон как по одной цели, так и по группам врагов.',
        url: 'https://web.archive.org/web/20251009172657/https://www.allmmorpg.ru/wow/monax-tancuyushhij-s-vetrom-pve-gajd-legion/',
    },
    {
        name: 'Хавок ДХ',
        className: 'Охотник на демонов',
        icon: 'classicon_demonhunter',
        role: 'АДД',
        description: 'Ближний бой с очень высокой подвижностью и мощными атаками Скверны. Отлично подходит для урона по нескольким целям.',
        url: 'https://web.archive.org/web/20250810011728/https://www.allmmorpg.ru/wow/oxotnik-na-demonov-istreblenie-legion-pve-gajd/',
    },
    {
        name: 'Вендженс ДХ',
        className: 'Охотник на демонов',
        icon: 'classicon_demonhunter',
        role: 'Танк',
        description: 'Танк, который снижает урон Демоническими шипами и лечится от фрагментов душ. Очень мобильный и простой в освоении.',
        url: 'https://web.archive.org/web/20250209152418/https://www.allmmorpg.ru/wow/oxotnik-na-demonov-mest-tank-legion-gajd/',
    },
];

const guideList = document.querySelector('#guide-list');
const classNav = document.querySelector('#class-nav');
const iconBaseUrl = 'https://wow.zamimg.com/images/wow/icons/large/';
// Цвета классов WoW в спокойных, аутентичных тонах без неона для светлой темы
const classColors = {
    classicon_warrior: '#8c6239',
    classicon_paladin: '#a63a6a',
    classicon_hunter: '#4a7318',
    classicon_rogue: '#8a7312',
    classicon_priest: '#4a5b6d',
    spell_deathknight_classicon: '#a81e32',
    classicon_shaman: '#155da1',
    classicon_mage: '#1a759c',
    classicon_warlock: '#5c488a',
    classicon_monk: '#0b7a48',
    classicon_druid: '#b85400',
    classicon_demonhunter: '#7c259c',
};
const classAnchors = new Map();

for (const guide of guides) {
    const link = document.createElement('a');
    link.className = 'guide-card';
    const classColor = classColors[guide.icon];
    if (classColor) link.style.setProperty('--class-color', classColor);
    if (!classAnchors.has(guide.className)) {
        const anchor = `class-${classAnchors.size}`;
        classAnchors.set(guide.className, anchor);
        link.id = anchor;

        const navLink = document.createElement('a');
        navLink.className = 'class-nav-link';
        if (classColor) navLink.style.setProperty('--class-color', classColor);
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

// --- Переключение версии игры через выпадающий список ---
const versionSelect = document.querySelector('#version-select');
if (versionSelect) {
    versionSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            window.location.href = e.target.value;
        }
    });
}

// Восстановление корректного значения при возврате по истории (BFCache)
window.addEventListener('pageshow', () => {
    if (versionSelect) {
        const path = window.location.pathname;
        const isLegion = path.endsWith('legion.html');
        versionSelect.value = isLegion ? 'legion.html' : 'index.html';
    }
});
