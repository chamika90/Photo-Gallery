import { takeLatest } from 'redux-saga/effects';

import * as types from 'redux/actions/types';
import * as photoGallerySaga from './photoGallerySaga';

function* sagas() {
  yield takeLatest(types.GET_GALLERY_IMAGES, photoGallerySaga.getGalleryPhotos);
}

export default sagas;
