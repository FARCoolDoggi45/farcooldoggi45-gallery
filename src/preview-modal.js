import {renderCommentList} from "./comment-list.js";

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
    renderCommentList(picture.comments);
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

export {openPreviewModal};
