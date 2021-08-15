import * as types from 'redux/actions/types';

const initialState = {
  photoList: undefined,
  page: 0,
  hasNextPage: true,
};

const photoGalleryReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    //Save gallery images
    case types.SAVE_GALLERY_IMAGES:
      const photos = state.photoList;
      const updatedPhotoList = photos
        ? [...state.photoList, ...payload.data]
        : payload.data;
      return {
        ...state,
        page: payload.page,
        photoList: updatedPhotoList,
        hasNextPage: payload.hasNextPage,
      };

    default:
      return state;
  }
};

export default photoGalleryReducer;
