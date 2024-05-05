import {openPreviewModal} from "./preview-modal.js";

const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

function renderPictureList(pictures) {
    for (const picture of pictures) {
        const pictureElement = pictureTemplate.cloneNode(true);
        pictureElement.dataset.id = picture.id;
        pictureElement.querySelector('.picture__img').setAttribute('src', picture.url);
        pictureElement.querySelector('.picture__likes').textContent = picture.likes;
        pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
        pictureListElement.append(pictureElement);

        pictureElement.addEventListener('click', function () {
            const pictureId = Number(pictureElement.dataset.id);
            const picture = pictures.find(function (picture) {
                return picture.id === pictureId;
            });
            openPreviewModal(picture);
        });
    }
}

export {renderPictureList};
