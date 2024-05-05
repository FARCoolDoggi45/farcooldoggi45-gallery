import {getRandomInt, getRandomArrayElement} from "./util.js";
import {PICTURE_DESCRIPTIONS, COMMENT_MESSAGES, USER_NAMES} from "./const.js";

const MAX_COMMENT_COUNT = 40;

function generateUser() {
    return {
        avatar: `./img/avatars/${getRandomInt(1, 40)}.jpg`,
        name: getRandomArrayElement(USER_NAMES)
    };
}

const usedPictureIds = [];
const usedCommentIds = [];

function generateComment(maxId) {
    let commentId = getRandomInt(1, maxId);
    while (usedCommentIds.includes(commentId)) {
        commentId = getRandomInt(1, maxId);
    }
    usedCommentIds.push(commentId);

    return {
        id: commentId,
        message: getRandomArrayElement(COMMENT_MESSAGES),
        user: generateUser()
    };
}

function generatePicture(maxId) {
    let pictureId = getRandomInt(1, maxId);
    while (usedPictureIds.includes(pictureId)) {
        pictureId = getRandomInt(1, maxId);
    }
    usedPictureIds.push(pictureId);

    const comments = [];
    for (let i = 0; i < getRandomInt(0, MAX_COMMENT_COUNT); i++) {
        comments.push(generateComment(maxId * MAX_COMMENT_COUNT));
    }

    return {
        id: pictureId,
        url: `./photos/${getRandomInt(1, 70)}.jpg`,
        description: getRandomArrayElement(PICTURE_DESCRIPTIONS),
        likes: getRandomInt(1, 2000),
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

export {generatePictures};
