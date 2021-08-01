/*
 * combines all th existing reducers
 */
import {combineReducers} from 'redux';
import photoGalleryReducer from './photoGalleryReducer';

const rootReducers = combineReducers({
  galleryReducer: photoGalleryReducer,
});

export default rootReducers;
