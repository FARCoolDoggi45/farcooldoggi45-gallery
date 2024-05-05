const PICTURE_DESCRIPTIONS = [
    'Классное фото!',
    'Фото топ!',
    'Отличное фото!',
    'Ужас!',
    'Моя бабушка фотает лучше!!',
    'Навалил кринжа!',
    'Крутой',
    'Где фулл?',
    'Чё за Огр?',
    'Умойся что-ли!',
];

const COMMENT_MESSAGES = [
    'Анонимусы топ',
    'Анонимусы сила',
    'Обожаю анонимусов',
    'Люблю анонимусов',
    'Анонимусы класс',
    'За анонимусов!!',
    'Анонимусы гении',
    'Анонимуc stronger',
    'Анонимусы realy better',
    'Анонимус Настя',
];

const USER_NAMES = [
    'Дима',
    'Плохой Горец',
    'Хороший Горец',
    'Данил',
    'Максим',
    'Андрей',
    'Сергей',
    'Джулия',
    'Даша',
    'Оксана',
];

const EFFECTS = [ 
    { 
        name: 'none', 
        css_filter: null, 
        range_min: null, 
        range_max: null, 
        step: null, 
        start: null, 
        unit: null, 
    }, 
    { 
        name: 'chrome', 
        css_filter: 'grayscale', 
        range_min: 0, 
        range_max: 1, 
        step: 0.1, 
        start: 1, 
        unit: null, 
    }, 
    { 
        name : 'sepia', 
        css_filter: 'sepia', 
        range_min: 0, 
        range_max: 1, 
        step: 0.1, 
        start: 1, 
        unit: null, 
    }, 
    { 
        name: 'marvin', 
        css_filter: 'invert', 
        range_min: 0, 
        range_max: 100, 
        step: 1, 
        start: 100, 
        unit: '%', 
    }, 
    { 
        name: 'phobos', 
        css_filter: 'blur', 
        range_min: 0, 
        range_max: 3, 
        step: 0.1, 
        start: 3, 
        unit: 'px', 
    }, 
    { 
        name: 'heat', 
        css_filter: 'brightness', 
        range_min: 1, 
        range_max: 3, 
        step: 0.1, 
        start: 3, 
        unit: null, 
    } 
];

export {
    PICTURE_DESCRIPTIONS,
    COMMENT_MESSAGES,
    USER_NAMES,
    EFFECTS
};
