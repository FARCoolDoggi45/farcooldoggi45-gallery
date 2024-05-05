const hashtagsInput = document.querySelector('.text__hashtags');
const descreptionTextArea = document.querySelector('.text__description');

const MAX_DESCREPTION_LENGTH = 140;
const MAX_HASHTAG_LENGTH = 20;

if (hashtagsInput) {
    hashtagsInput.addEventListener('input', function () {
        const hashtags = hashtagsInput.value.split(' ');
        const errors = new Set();
        const uniqueHashtags = new Set();

        for (const hashtag of hashtags) {
            if (hashtag === '') {
                continue;
            }

            if (uniqueHashtags.has(hashtag.toLowerCase()) ) {
                errors.add('Один и тот же хэштег, не может быть использован дважды')
            } else {
                uniqueHashtags.add(hashtag);
            }

            if (hashtag[0] !== '#') {
                errors.add('Хэштег должен начинаться с символа "#"');
            }
            if (hashtag === '#') {
                errors.add('Хэштег не может состоять только из одной решётки');
            }
            if (hashtag.length > MAX_HASHTAG_LENGTH) {
                errors.add('Максимальная длина хэштега - 20 символов (включая решётку)');
            }
            if (hashtag.length > 1 && !/^#[A-Za-zА-Яа-я0-9]{1,19}$/.test(hashtag)) {
                errors.add('Строка после решётки, должна состоять только из букв и чисел');
            }
            if (uniqueHashtags.size > 5) {
                errors.add(' Нельзя указать больше пяти хэштегов');
            }
        }

        const error = Array.from(errors).join('\n');

        hashtagsInput.setCustomValidity(error);
        hashtagsInput.reportValidity();
    });
}

if (descreptionTextArea) {
    descreptionTextArea.addEventListener('input', function () {
        const valueLength = descreptionTextArea.value.length;

        let error = '';
        if (valueLength > MAX_DESCREPTION_LENGTH) {
            error = `Удалите лишние ${valueLength - MAX_DESCREPTION_LENGTH} симв.`;
        }

        descreptionTextArea.setCustomValidity(error);
        descreptionTextArea.reportValidity();
    });
}
