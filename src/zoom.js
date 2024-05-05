const zoomValueElement = document.querySelector('.scale__control--value');
const previewImgElement = document.querySelector('.img-upload__preview img');
const zoomPlusBtnElement = document.querySelector('.scale__control--bigger');
const zoomMinusBtnElement = document.querySelector('.scale__control--smaller');

const SCALE_CONTROL_STEP = 25;
const SCALE_CONTROL_MIN_VALUE = 25;
const SCALE_CONTROL_MAX_VALUE = 100;

const updateScaleControlElements = () => {
    const value = Number(zoomValueElement.value.replace('%', ''));
    if (value === SCALE_CONTROL_MAX_VALUE) {
        zoomPlusBtnElement.style.cursor = 'not-allowed';
    } else {
        zoomPlusBtnElement.style.cursor = 'pointer';
    }

    if (value === SCALE_CONTROL_MIN_VALUE) {
        zoomMinusBtnElement.style.cursor = 'not-allowed';
    } else {
        zoomMinusBtnElement.style.cursor = 'pointer';
    }
}

const zoomPlus = () => {
    const value = Number(zoomValueElement.value.replace('%', ''));
    if (value < SCALE_CONTROL_MAX_VALUE) {
        zoomValueElement.value = (value + SCALE_CONTROL_STEP) + '%';
        previewImgElement.style.transform = `scale(${(value + SCALE_CONTROL_STEP) / 100})`;
        updateScaleControlElements();
    }
}

const zoomMinus = () => {
    const value = Number(zoomValueElement.value.replace('%', ''));
    if (value > SCALE_CONTROL_MIN_VALUE) {
        zoomValueElement.value = (value - SCALE_CONTROL_STEP) + '%';
        previewImgElement.style.transform =`scale(${(value - SCALE_CONTROL_STEP) / 100})`;
        updateScaleControlElements();
    }
}

export {zoomPlus, zoomMinus};
