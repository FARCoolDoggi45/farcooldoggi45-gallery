/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/comment-list.js":
/*!*****************************!*\
  !*** ./src/comment-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCommentList: () => (/* binding */ renderCommentList)
/* harmony export */ });
const showMoreButtonElement = document.querySelector('.comments-loader');
const totalCommentCountElement = document.querySelector('.comments-count');
const renderedCommentCountElement = document.querySelector('.comments-count--rendered');
const commentListElement = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment')
    .content
    .querySelector('.social__comment');
const commentsLoaderTemplate = document.querySelector('#comments-loader')
    .content
    .querySelector('.comments-loader--active');

const COMMENT_COUNT_PER_STEP = 5;

const blockButton = () => {
    showMoreButtonElement.disabled = true;
    showMoreButtonElement.style.cursor = 'not-allowed';
    showMoreButtonElement.textContent = 'Загружаю...';

    const loaderElement = commentsLoaderTemplate.cloneNode(true);
    showMoreButtonElement.append(loaderElement);
};

const unBlockButton = () => {
    showMoreButtonElement.disabled = false;
    showMoreButtonElement.style.cursor = 'pointer';
    showMoreButtonElement.innerHTML = 'Загрузить ещё...';
};

const setLoaderClick = function (comments) {
    if (this.onLoaderClick !== undefined) {
        showMoreButtonElement.removeEventListener('click', this.onLoaderClick);
    }

    this.onLoaderClick = () => {
        blockButton();
        setTimeout(() => {
            renderComments(comments, this.renderedCommentCount, this.renderedCommentCount + COMMENT_COUNT_PER_STEP);
            this.renderedCommentCount += COMMENT_COUNT_PER_STEP;
            unBlockButton();

            if (this.renderedCommentCount >= comments.length) {
                showMoreButtonElement.classList.add('hidden');
            }
        }, 2000);
    };

    this.renderedCommentCount = 5;
    showMoreButtonElement.addEventListener('click', this.onLoaderClick);
};

const renderComments = (comments, from, to) => {
    for (const comment of comments.slice(from, to)) {
        const commentElement = commentTemplate.cloneNode(true);
        commentElement.querySelector('.social__text').textContent = comment.message;
        commentElement.querySelector('.social__picture').setAttribute('src', './avatars/1.jpeg');
        commentListElement.append(commentElement);
        renderedCommentCountElement.textContent = Number(renderedCommentCountElement.textContent) + 1;
    }
}

const renderCommentList = (comments) => {
    commentListElement.innerHTML = '';
    renderedCommentCountElement.textContent = '0';

    const to = Math.min(comments.length, COMMENT_COUNT_PER_STEP);
    renderComments(comments, 0, to);
    totalCommentCountElement.textContent = comments.length;

    if (comments.length > COMMENT_COUNT_PER_STEP) {
        showMoreButtonElement.classList.remove('hidden');
    } else {
        showMoreButtonElement.classList.add('hidden');
    }

    setLoaderClick.call(renderCommentList, comments);
}




/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMMENT_MESSAGES: () => (/* binding */ COMMENT_MESSAGES),
/* harmony export */   EFFECTS: () => (/* binding */ EFFECTS),
/* harmony export */   PICTURE_DESCRIPTIONS: () => (/* binding */ PICTURE_DESCRIPTIONS),
/* harmony export */   USER_NAMES: () => (/* binding */ USER_NAMES)
/* harmony export */ });
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




/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatePictures: () => (/* binding */ generatePictures)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/util.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ "./src/const.js");



const MAX_COMMENT_COUNT = 40;

function generateUser() {
    return {
        avatar: `./img/avatars/${(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 40)}.jpg`,
        name: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(_const_js__WEBPACK_IMPORTED_MODULE_1__.USER_NAMES)
    };
}

const usedPictureIds = [];
const usedCommentIds = [];

function generateComment(maxId) {
    let commentId = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, maxId);
    while (usedCommentIds.includes(commentId)) {
        commentId = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, maxId);
    }
    usedCommentIds.push(commentId);

    return {
        id: commentId,
        message: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(_const_js__WEBPACK_IMPORTED_MODULE_1__.COMMENT_MESSAGES),
        user: generateUser()
    };
}

function generatePicture(maxId) {
    let pictureId = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, maxId);
    while (usedPictureIds.includes(pictureId)) {
        pictureId = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, maxId);
    }
    usedPictureIds.push(pictureId);

    const comments = [];
    for (let i = 0; i < (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, MAX_COMMENT_COUNT); i++) {
        comments.push(generateComment(maxId * MAX_COMMENT_COUNT));
    }

    return {
        id: pictureId,
        url: `./photos/${(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 70)}.jpg`,
        description: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(_const_js__WEBPACK_IMPORTED_MODULE_1__.PICTURE_DESCRIPTIONS),
        likes: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 2000),
        comments: comments 
    };
}

function generatePictures(count) {
    const pictures = [];

    for (let i = 0; i < count; i++) {
        pictures.push(generatePicture(count));
    }

    return pictures;
}




/***/ }),

/***/ "./src/effect-list.js":
/*!****************************!*\
  !*** ./src/effect-list.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderEffectList: () => (/* binding */ renderEffectList)
/* harmony export */ });
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




/***/ }),

/***/ "./src/effects.js":
/*!************************!*\
  !*** ./src/effects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onEffectsRadioChange: () => (/* binding */ onEffectsRadioChange),
/* harmony export */   onSliderUpdate: () => (/* binding */ onSliderUpdate)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./src/const.js");


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
        const effect = _const_js__WEBPACK_IMPORTED_MODULE_0__.EFFECTS.find((effect) => {
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
        const effect = _const_js__WEBPACK_IMPORTED_MODULE_0__.EFFECTS.find((effect) => {
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




/***/ }),

/***/ "./src/picture-list.js":
/*!*****************************!*\
  !*** ./src/picture-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderPictureList: () => (/* binding */ renderPictureList)
/* harmony export */ });
/* harmony import */ var _preview_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview-modal.js */ "./src/preview-modal.js");


const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

// function renderPictureList2(pictures) {
//     for (const picture of pictures) {
//         const pictureElement = pictureTemplate.cloneNode(true);
//         // pictureElement.dataset.id = picture.id;
//         pictureElement.querySelector('.picture__img').setAttribute('src', picture.url);
//         pictureElement.querySelector('.picture__likes').textContent = picture.likes;
//         pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
//         pictureListElement.append(pictureElement);

//         pictureElement.addEventListener('click', function () {
//             // const pictureId = Number(pictureElement.dataset.id);
//             // const picture = pictures.find(function (picture) {
//                 // return picture.id === pictureId;
//             // });
//             openPreviewModal(picture);
//         });
//     }
// }

// Переписать с помощью цикла while
function renderPictureList(pictures) {
    let i = 0;
    while (i < pictures.length) {
        const picture = pictures[i];
        const pictureElement = pictureTemplate.cloneNode(true);
        pictureElement.querySelector('.picture__img').setAttribute('src', picture.url);
        pictureElement.querySelector('.picture__likes').textContent = picture.likes;
        pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
        pictureListElement.append(pictureElement);
        i++;
    }
}

// // Переписать с помощью цикла for
// function renderPictureList3(pictures) {
//     for (const picture of pictures) {
//         const pictureElement = pictureTemplate.cloneNode(true);
//         pictureElement.querySelector('.picture__img').setAttribute('src', picture.url);
//         pictureElement.querySelector('.picture__likes').textContent = picture.likes;
//         pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
//         pictureListElement.append(pictureElement);
//     }
// }




/***/ }),

/***/ "./src/preview-modal.js":
/*!******************************!*\
  !*** ./src/preview-modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openPreviewModal: () => (/* binding */ openPreviewModal)
/* harmony export */ });
/* harmony import */ var _comment_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment-list.js */ "./src/comment-list.js");


const previewModalElement = document.querySelector('.big-picture');
const previeModalCloseElement = document.querySelector('.big-picture__cancel');
const previewAvatarElement = document.querySelector('.big-picture__social img');
const previewImgElement= document.querySelector('.big-picture__img img');
const likeCountElement = document.querySelector('.likes-count');
const renderedCommentCoutElement = document.querySelector('.comments-count--rendered');
const commentAvatarElement = document.querySelector('#comment-form img');
const commentCountElement = document.querySelector('.comments-count');

const onModalEscKeydown = (evt) => {
    if (evt.code === 'Escape') {
        closePreviewModal();
    }
};

const renderPicturePreview = (picture) => {
    previewImgElement.setAttribute('src', picture.url);
    likeCountElement.textContent = picture.likes;
    commentCountElement.textContent = picture.comments.length;
    renderedCommentCoutElement.textContent = picture.comments.length;
    previewAvatarElement.setAttribute('src', './avatars/1.jpeg');
    commentAvatarElement.setAttribute('src', './avatars/1.jpeg');
    (0,_comment_list_js__WEBPACK_IMPORTED_MODULE_0__.renderCommentList)(picture.comments);
};

const openPreviewModal = (picture) => {
    renderPicturePreview(picture);
    previewModalElement.classList.remove("hidden");
    document.body.style.overflow = 'hidden';
    console.warn(1);
    previeModalCloseElement.addEventListener('click', closePreviewModal);
    document.addEventListener('keydown', onModalEscKeydown);
};

const closePreviewModal = () => {
    previewModalElement.classList.add('hidden');
    document.body.style.overflow = 'initial';
    previeModalCloseElement.removeEventListener('click', closePreviewModal);
    document.removeEventListener('keydown', onModalEscKeydown);
};




/***/ }),

/***/ "./src/upload-form.js":
/*!****************************!*\
  !*** ./src/upload-form.js ***!
  \****************************/
/***/ (() => {

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


/***/ }),

/***/ "./src/upload-modal.js":
/*!*****************************!*\
  !*** ./src/upload-modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom.js */ "./src/zoom.js");
/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects.js */ "./src/effects.js");



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
    zoomPlusBtnElement.addEventListener('click', _zoom_js__WEBPACK_IMPORTED_MODULE_0__.zoomPlus);
    zoomMinusBtnElement.addEventListener('click', _zoom_js__WEBPACK_IMPORTED_MODULE_0__.zoomMinus);
    effectListElement.addEventListener('change', _effects_js__WEBPACK_IMPORTED_MODULE_1__.onEffectsRadioChange);
    effectLevelSliderElement.noUiSlider.on('update', _effects_js__WEBPACK_IMPORTED_MODULE_1__.onSliderUpdate);
};

const closeUploadModal = () => {
    uploadModalOpenElement.value = '';
    uploadModalElement.classList.add('hidden');
    document.body.style.overflow = 'initial';

    uploadModalCloseElement.removeEventListener('click', closeUploadModal);
    document.removeEventListener('keydown', onModalEscKeydown);
    zoomPlusBtnElement.removeEventListener('click', _zoom_js__WEBPACK_IMPORTED_MODULE_0__.zoomPlus);
    zoomMinusBtnElement.removeEventListener('click', _zoom_js__WEBPACK_IMPORTED_MODULE_0__.zoomMinus);
    effectListElement.removeEventListener('change', _effects_js__WEBPACK_IMPORTED_MODULE_1__.onEffectsRadioChange);
    effectLevelSliderElement.noUiSlider.off('update');
};

if (uploadModalOpenElement) {
    uploadModalOpenElement.addEventListener('change', function () {
        const file = uploadModalOpenElement.files[0];
        openUploadModal(file);
    });
}



/***/ }),

/***/ "./src/user/login-modal.js":
/*!*********************************!*\
  !*** ./src/user/login-modal.js ***!
  \*********************************/
/***/ (() => {

const loginModalElement = document.querySelector("#loginModal");
const loginModalOpenElement = document.querySelector("#login-btn"); // 33 кнопка входа
const loginModalCloseElement = document.querySelector("#loginModal .btn-close");
const backdropTemplate = document.querySelector("#modal-backdrop")
    .content
    .querySelector(".modal-backdrop");

const openLoginModal = () => {
    loginModalElement.style.display = "block";
    
    setTimeout(() => {
        loginModalElement.classList.add("show");
        document.body.classList.add("modal-open");
        const backdropElement = backdropTemplate.cloneNode(true);
        loginModalElement.insertAdjacentElement("afterend", backdropElement);
    }, 0);

    loginModalCloseElement.addEventListener("click", closeLoginModal);
}

const closeLoginModal = () => {
    loginModalElement.classList.remove("show");

    setTimeout(() => {
        loginModalElement.style.display = "none";
        document.querySelector(".modal-backdrop").remove();
        loginModalCloseElement.removeEventListener("click", closeLoginModal);
    }, 1000);
}

loginModalOpenElement.addEventListener("click", function (evt) {
    evt.preventDefault();
    openLoginModal();
});


/***/ }),

/***/ "./src/user/main.js":
/*!**************************!*\
  !*** ./src/user/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signup_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-modal.js */ "./src/user/signup-modal.js");
/* harmony import */ var _signup_modal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_signup_modal_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-modal.js */ "./src/user/login-modal.js");
/* harmony import */ var _login_modal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_modal_js__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ "./src/user/signup-modal.js":
/*!**********************************!*\
  !*** ./src/user/signup-modal.js ***!
  \**********************************/
/***/ (() => {

const signupModalElement = document.querySelector("#signupModal");
const signupModalOpenElement = document.querySelector("#signup-btn");
const signupModalCloseElement = document.querySelector("#signupModal .btn-close");
const backdropTemplate = document.querySelector("#modal-backdrop")
    .content
    .querySelector(".modal-backdrop");

const openSignupModal = () => {
    signupModalElement.style.display = "block";

    setTimeout(() => {
        signupModalElement.classList.add("show");
        const backdropElement = backdropTemplate.cloneNode(true);
        signupModalElement.insertAdjacentElement("afterend", backdropElement);
    }, 1000);

    signupModalCloseElement.addEventListener("click", closeSignupModal);
}

const closeSignupModal = () => {
    signupModalElement.classList.remove("show");

    setTimeout(() => {
        signupModalElement.style.display = "none";
        signupModalElement.classList.remove("show");
        document.querySelector(".modal-backdrop").remove();
        signupModalCloseElement.addEventListener("click", closeSignupModal);
    }, 1000);
}

signupModalOpenElement.addEventListener("click", function (evt) {
    evt.preventDefault();
    openSignupModal();
});


/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomArrayElement: () => (/* binding */ getRandomArrayElement),
/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt)
/* harmony export */ });
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArrayElement(array) {
    return array[getRandomInt(0, array.length - 1)];
}




/***/ }),

/***/ "./src/zoom.js":
/*!*********************!*\
  !*** ./src/zoom.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   zoomMinus: () => (/* binding */ zoomMinus),
/* harmony export */   zoomPlus: () => (/* binding */ zoomPlus)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ "./src/const.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _picture_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picture-list.js */ "./src/picture-list.js");
/* harmony import */ var _effect_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effect-list.js */ "./src/effect-list.js");
/* harmony import */ var _upload_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-modal.js */ "./src/upload-modal.js");
/* harmony import */ var _upload_form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-form.js */ "./src/upload-form.js");
/* harmony import */ var _upload_form_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_upload_form_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects.js */ "./src/effects.js");
/* harmony import */ var _user_main_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/main.js */ "./src/user/main.js");









const pictures = (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.generatePictures)(10);

(0,_picture_list_js__WEBPACK_IMPORTED_MODULE_2__.renderPictureList)(pictures);
(0,_effect_list_js__WEBPACK_IMPORTED_MODULE_3__.renderEffectList)(_const_js__WEBPACK_IMPORTED_MODULE_0__.EFFECTS);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map