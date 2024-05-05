const effectElementList = document.querySelector('.effects__list');
const effectTemplate = document.querySelector('#effect-item')
    .content
    .querySelector('.effects__item');

const renderEffectList = (effects) => {
    for (const effect of effects) {
        const effectElement = effectTemplate.cloneNode(true);
        effectElement.querySelector('input').setAttribute('id', `effect-${effect.name}`);

        if (effect.name === 'none') {
            effectElement.querySelector('input').setAttribute('checked', '');
        }

        effectElement.querySelector('label').setAttribute('for', `effect-${effect.name}`);
        effectElement.querySelector('span').classList.add(`effects__preview--${effect.name}`);
        effectElementList.append(effectElement);
    }
}

export {renderEffectList};
