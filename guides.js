// Все названия, описания, иконки и адреса гайдов собраны здесь.
const guides = [
    {
        name: 'Фури Воин',
        className: 'Воин',
        icon: 'classicon_warrior',
        description: 'Ближний бой с двумя оружиями и частыми мощными атаками. Билд раскрывается в затяжных боях с боссами.',
        url: 'https://wow-sirus.com/gaydy/wotlk/voin/furi-var-335-pve-gayd-neistovstvo.html?ysclid=ml0k2j1r8c525571503',
    },
    {
        name: 'ММ Охотник',
        className: 'Охотник',
        icon: 'classicon_hunter',
        description: 'Дальний физический урон с упором на точные выстрелы. Подходит для стабильного нанесения урона на дистанции.',
        url: 'https://wow-sirus.com/gaydy/wotlk/ohotnik/mm-hant-3-3-5-pve-gayd-strelba.html?ysclid=ml0ka2x2qg407795558',
    },
    {
        name: 'РДД Друид',
        className: 'Друид',
        icon: 'classicon_druid',
        description: 'Заклинатель дальнего боя с периодическим уроном и сильными звёздными заклинаниями. Эффективен в длительных боях.',
        url: 'https://wow-sirus.com/gaydy/wotlk/druid-tank-335-gayd-pve-sila-zverya.html?ysclid=ml0kcv4vzt809280975',
    },
    {
        name: 'Рестор Друид',
        className: 'Друид',
        icon: 'classicon_druid',
        description: 'Целитель, который поддерживает группу периодическим лечением. Хорошо справляется с постепенным входящим уроном.',
        url: 'https://forum.wowcircle.com/showthread.php?t=370&ysclid=ml0kunwjmu893373453',
    },
    {
        name: 'Ретро Паладин',
        className: 'Паладин',
        icon: 'classicon_paladin',
        description: 'Ближний бой со священным уроном и мощными завершающими атаками. Универсальный урон и полезная поддержка группы.',
        url: 'https://wow-sirus.com/gaydy/wotlk/paladin/retri-pal-335-pve-gayd-vozdayanie.html?ysclid=ml0l0tpezk404035842',
    },
    {
        name: 'Защитный Паладин',
        className: 'Паладин',
        icon: 'classicon_paladin',
        description: 'Танк с сильной защитой и набором инструментов для контроля противников. Подходит для подземелий и рейдов.',
        url: 'https://forum.wowcircle.com/showthread.php?t=304041&ysclid=ml0l1tyk7u403367607',
    },
    {
        name: 'Комбат Разбойник',
        className: 'Разбойник',
        icon: 'classicon_rogue',
        description: 'Быстрый ближний бой с упором на непрерывные атаки. Особенно силён при стабильном контакте с целью.',
        url: 'https://wow-sirus.com/gaydy/wotlk/razboynik/kombat-roga-3-3-5-pve-gayd-boy.html?ysclid=ml0l77y23p882917521',
    },
    {
        name: 'Мути Разбойник',
        className: 'Разбойник',
        icon: 'classicon_rogue',
        description: 'Билд с кинжалами, ядами и мощными атаками по уязвимым целям. Награждает за грамотное поддержание эффектов.',
        url: 'https://forum.wowcircle.com/showthread.php?t=126874&ysclid=ml0l883e36321033836',
    },
    {
        name: 'Аркан Маг',
        className: 'Маг',
        icon: 'classicon_mage',
        description: 'Взрывной магический урон с управлением запасом маны. Позволяет быстро усиливать урон в нужный момент.',
        url: 'https://wow-sirus.com/gaydy/wotlk/mag/arkan-mag-335-pve-gayd-taynaya-magiya.html?ysclid=ml0lfg8pqc671476380',
    },
    {
        name: 'Фаер Маг',
        className: 'Маг',
        icon: 'classicon_mage',
        description: 'Огненные заклинания с высоким уроном и частыми критическими ударами. Силен в боях с подходящими условиями.',
        url: 'https://www.allmmorpg.ru/wow/wotlk/64095-faer-mag-pve-guide-wotlk/?ysclid=ml0lgz22m133830538',
    },
    {
        name: 'Фрост Маг',
        className: 'Маг',
        icon: 'classicon_mage',
        description: 'Ледяные заклинания сочетают урон и контроль противников. Гайд описывает применение специализации в ПВЕ.',
        url: 'https://ezwow.org/topic/87715-gajd-frost-pve-mag-frost-pve-mage-wotlk-335/?ysclid=ml0lhnu9dr706647920',
    },
    {
        name: 'Демон Чернокнижник',
        className: 'Чернокнижник',
        icon: 'classicon_warlock',
        description: 'Урон тьмой и огнём при поддержке демонического спутника. Билд усиливает группу и стабильно атакует цель.',
        url: 'https://wow-sirus.com/gaydy/wotlk/demon-lok-335-pve-gayd-chernoknizhnik.html?ysclid=ml0lpx5vfh634454683',
    },
    {
        name: 'Дестро Чернокнижник',
        className: 'Чернокнижник',
        icon: 'classicon_warlock',
        description: 'Прямой магический урон с сильными огненными заклинаниями. Хороший выбор для активной ротации и урона по боссу.',
        url: 'https://wow-sirus.com/gaydy/wotlk/lok/destro-lok-335-pve-gayd-razrushenie.html?ysclid=ml0m1pcms3520457210',
    },
    {
        name: 'ШП Жрец',
        className: 'Жрец',
        icon: 'classicon_priest',
        description: 'Тёмная магия и периодический урон с дополнительной поддержкой группы. Поддерживает стабильное давление на цели.',
        url: 'https://wow-sirus.com/gaydy/wotlk/prist/shp-prist-335-pve-gayd-tma.html?ysclid=ml0m9abvk9594794101',
    },
    {
        name: 'ДЦ Жрец',
        className: 'Жрец',
        icon: 'classicon_priest',
        description: 'Защитное лечение через щиты и предотвращение урона. Помогает группе переживать опасные механики.',
        url: 'https://wow-sirus.com/gaydy/wotlk/dc-prist-335-gayd-pve-poslushanie.html?ysclid=ml0m9h1vo7883638528',
    },
    {
        name: 'ХП Жрец',
        className: 'Жрец',
        icon: 'classicon_priest',
        description: 'Гибкий целитель с быстрым лечением отдельных игроков и восстановлением здоровья группы. Подходит для разных ситуаций.',
        url: 'https://forum.wowcircle.com/showthread.php?t=350169&ysclid=ml0mbdg2up89830357',
    },
    {
        name: 'Анхоли ДК',
        className: 'Рыцарь смерти',
        icon: 'spell_deathknight_classicon',
        description: 'Болезни, прислужник и периодический урон создают сильное давление на цель. Билд раскрывается в продолжительном бою.',
        url: 'https://forum.wowcircle.com/showthread.php?t=655891&ysclid=ml0mcldw85132819833',
    },
    {
        name: 'Блад ДК',
        className: 'Рыцарь смерти',
        icon: 'spell_deathknight_classicon',
        description: 'Танкование через рунические способности и мощное самоисцеление. Помогает выдерживать большой входящий урон.',
        url: 'https://wow-sirus.com/gaydy/wotlk/dk/blad-dk-335-pve-gayd-krov.html?ysclid=ml0mh2iy6i254828285',
    },
    {
        name: 'Фрост ДК',
        className: 'Рыцарь смерти',
        icon: 'spell_deathknight_classicon',
        description: 'Ледяной ближний бой с мощными ударами и сильным уроном по нескольким противникам. Использует одну или две руки.',
        url: 'https://forum.wowcircle.com/showthread.php?t=307438&ysclid=ml0miq6jad598312678',
    },
    {
        name: 'Элем Шаман',
        className: 'Шаман',
        icon: 'classicon_shaman',
        description: 'Дальние атаки молнией и огнём с поддержкой тотемов. Сочетает урон с полезными групповыми усилениями.',
        url: 'https://wow-sirus.com/gaydy/wotlk/shaman/yelem-shaman-335-pve-gayd-stihii.html?ysclid=ml0mnbihl5639279282',
    },
    {
        name: 'Энх Шаман',
        className: 'Шаман',
        icon: 'classicon_shaman',
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

    link.append(icon, textWrap);
    guideList.append(link);
}
