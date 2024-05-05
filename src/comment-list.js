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

export {renderCommentList};
