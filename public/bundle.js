/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMMENT_MESSAGES: () => (/* binding */ COMMENT_MESSAGES),
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
    'Что ты предпочитаешь: путешествия на море или горы?',
    'Какой твой самый любимый вид спорта?',
    'Что бы ты выбрал: быть богатым и несчастливым или бедным и счастливым?',
    'Какой твой самый незабываемый момент из детства?',
    'Если бы ты мог поговорить с любым историческим персонажем, кто бы это был и о чем бы ты с ним говорил?',
    'Какого рода книги ты любишь читать?',
    'Какую страну ты бы хотел посетить в своем следующем отпуске?',
    'Какой самый смешной подарок ты когда-либо получал?',
    'Если бы ты мог стать профессиональным в чем-то, что бы это было?',
    'Какую музыку ты предпочитаешь слушать?',
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




/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatePictures: () => (/* binding */ generatePictures)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/util.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ "./src/const.js");



const MAX_COMMENTS = 10

function generateUser() {
    return {
        avatar: `./img/avatars/${(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 10)}.jpg`,
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
    for (let i = 0; i < (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(MAX_COMMENTS); i++) {
        comments.push(generateComment(maxId * MAX_COMMENTS));
    }

    return {
        id: pictureId,
        url: `./img/pictures/${(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 10)}.jpg`,
        description: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(_const_js__WEBPACK_IMPORTED_MODULE_1__.PICTURE_DESCRIPTIONS),
        likes: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 200000),
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

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");


const pictures = (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.generatePictures)(30);
console.log(pictures);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map