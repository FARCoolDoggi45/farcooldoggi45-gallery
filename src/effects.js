import {EFFECTS} from "./const.js";

const effectLevelElement = document.querySelector('.effect-level');
const effectLevelSliderElement = document.querySelector('.effect-level__slider');
const previewImgElement = document.querySelector('.img-upload__preview img');

if (noUiSlider) {
    noUiSlider.create(effectLevelSliderElement, { 
        range: { 
            min: 0, 
            max: 100 
        }, 
        start: 100, 
        step: 1, 
        connect: 'lower',
        format: { 
            to: function (value) { 
                if (Number.isInteger(value)) { 
                    return value.toFixed(0); 
                } 
                return value.toFixed(1); 
            }, 
            from: function (value) { 
                return parseFloat(value); 
            } 
        } 
    }); 
}

const onSliderUpdate = (_, handle, unencoded) => {
    const effectName = document.querySelector('[name=effect_id]:checked').id.split('-')[1];
    if (effectName !== 'none') {
        const effect = EFFECTS.find((effect) => {
            return effect.name === effectName;
        });
        const filterValue = `${effect.css_filter}(${unencoded[handle] + (effect.unit ?? '')})`;
        previewImgElement.style.filter = filterValue;
    }
};

const onEffectsRadioChange = (evt) => {
    const effectName = evt.target.getAttribute('id').split('-')[1];
    previewImgElement.className = '';
    previewImgElement.classList.add(`effects__preview--${effectName}`);

    if (effectName !== 'none') {
        const effect = EFFECTS.find((effect) => {
            return effect.name === effectName;
        });

        const options = {
            range: {
                min: effect.range_min,
                max: effect.range_max
            },
            step: effect.step
        };

        effectLevelElement.classList.remove('hidden');
        effectLevelSliderElement.noUiSlider.updateOptions(options);
        effectLevelSliderElement.noUiSlider.set(effect.start);
    } else {
        effectLevelElement.classList.add('hidden');
        previewImgElement.style.filter = 'unset';
    }
};

export {
    onSliderUpdate,
    onEffectsRadioChange
};
