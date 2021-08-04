/*
 * Reducer actions related with gallery
 */
import * as types from './types';

// Get gallery images
export function getGalleryImages(payload) {
  return {
    type: types.GET_GALLERY_IMAGES,
    payload,
  };
}

// Save gallery images
export function saveGalleryImages(payload) {
  return {
    type: types.SAVE_GALLERY_IMAGES,
    payload,
  };
}
