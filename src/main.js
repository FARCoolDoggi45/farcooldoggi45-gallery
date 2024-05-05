import {EFFECTS} from './const.js';
import {generatePictures} from './data.js';
import {renderPictureList} from './picture-list.js';
import {renderEffectList} from './effect-list.js';
import './upload-modal.js';
import './upload-form.js';
import './effects.js';
import './user/main.js';

const pictures = generatePictures(10);

renderPictureList(pictures);
renderEffectList(EFFECTS);
