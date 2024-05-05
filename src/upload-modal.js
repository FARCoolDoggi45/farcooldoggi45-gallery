import {zoomPlus, zoomMinus} from "./zoom.js";
import {onSliderUpdate, onEffectsRadioChange} from "./effects.js";

const effectPreviewElements = document.getElementsByClassName('effects__preview');
const uploadModalOpenElement = document.querySelector('#upload-file');
const uploadModalElement = document.querySelector('.img-upload__overlay');
const uploadModalCloseElement = document.querySelector('#upload-cancel');
const previewImgElement = document.querySelector('.img-upload__preview img');
const zoomPlusBtnElement = uploadModalElement.querySelector('.scale__control--bigger');
const zoomMinusBtnElement = uploadModalElement.querySelector('.scale__control--smaller');
const effectListElement = document.querySelector('.effects__list');
const effectLevelSliderElement = document.querySelector('.effect-level__slider');

const onModalEscKeydown = (evt) => {
    if (evt.code === 'Escape') {
        closeUploadModal();
    };
}

const updatePreview = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
        previewImgElement.setAttribute('src', reader.result);
        for (const previewElement of effectPreviewElements) {
            previewElement.style.backgroundImage = `url(${reader.result})`;
        }
    });
    reader.readAsDataURL(file);
};

const openUploadModal = (file) => {
    updatePreview(file);
    uploadModalElement.classList.remove('hidden');
    document.body.style.overflow ='hidden';

    uploadModalCloseElement.addEventListener('click', closeUploadModal);
    document.addEventListener('keydown', onModalEscKeydown);
    zoomPlusBtnElement.addEventListener('click', zoomPlus);
    zoomMinusBtnElement.addEventListener('click', zoomMinus);
    effectListElement.addEventListener('change', onEffectsRadioChange);
    effectLevelSliderElement.noUiSlider.on('update', onSliderUpdate);
};

const closeUploadModal = () => {
    uploadModalOpenElement.value = '';
    uploadModalElement.classList.add('hidden');
    document.body.style.overflow = 'initial';

    uploadModalCloseElement.removeEventListener('click', closeUploadModal);
    document.removeEventListener('keydown', onModalEscKeydown);
    zoomPlusBtnElement.removeEventListener('click', zoomPlus);
    zoomMinusBtnElement.removeEventListener('click', zoomMinus);
    effectListElement.removeEventListener('change', onEffectsRadioChange);
    effectLevelSliderElement.noUiSlider.off('update');
};

if (uploadModalOpenElement) {
    uploadModalOpenElement.addEventListener('change', function () {
        const file = uploadModalOpenElement.files[0];
        openUploadModal(file);
    });
}

