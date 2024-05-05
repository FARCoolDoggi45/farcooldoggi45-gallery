function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArrayElement(array) {
    return array[getRandomInt(0, array.length - 1)];
}

export {getRandomInt, getRandomArrayElement};
