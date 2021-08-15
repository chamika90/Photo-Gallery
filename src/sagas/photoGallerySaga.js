import { put } from 'redux-saga/effects';
import { requestImageList } from 'services/ApiService';
import { saveGalleryImages } from 'redux/actions/photoGalleryActions';

export function* getGalleryPhotos(action) {
  try {
    const response = yield requestImageList(action.payload).then(resp => {
      return resp;
    });

    yield put(saveGalleryImages(response));
  } catch (error) {}
}
