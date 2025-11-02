import SimpleLightbox from 'simplelightbox';
import { API } from './js/pixabay-api';
import { createImgCard } from './js/render-functions';
import iziToast from 'izitoast';

const refs = {
  form: document.querySelector('.form'),
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
};

const messageForUser = (ms, type) => {
  if (type === 'error') {
    iziToast.error({
      message: ms,
      position: 'topRight',
    });
  } else if (type === 'warning') {
    iziToast.warning({
      message: ms,
      position: 'topRight',
    });
  } else {
    iziToast.show({
      message: ms,
      position: 'topRight',
    });
  }
};

const onClickLoadMoreBtn = async e => {
  API.incrementPage();
  const quantityEl = refs.galleryList.children.length;
  try {
    const { hits, totalHits } = await API.getPhotoByQuery(API.queryField);

    if (totalHits === quantityEl) {
      messageForUser(
        `We're sorry, but you've reached the end of search results.`,
        'error'
      );
      refs.loadMoreBtn.classList.add('inactive');
      refs.loadMoreBtn.removeEventListener('click', onClickLoadMoreBtn);
      return;
    }

    if (hits.length === 0) {
      messageForUser(
        'Sorry, there are no images matching your search query. Please try again!',
        'error'
      );
      return;
    }

    const createGallery = hits.map(item => createImgCard(item)).join('');
    refs.galleryList.insertAdjacentHTML('beforeend', createGallery);
    new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
      captionDelay: 250,
      overlayOpacity: 0.9,
    });
  } catch (error) {
    console.log(error);
  }
};

const onSubmitBtn = async e => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const searchField = formData.get('search-field').trim();

  if (!searchField) {
    messageForUser(
      'The search field is empty. Please enter text to search.',
      'warning'
    );
    return;
  }

  refs.loader.classList.add('is-loaded');
  API.resetPage();

  try {
    const { hits } = await API.getPhotoByQuery(searchField);

    if (hits.length === 0) {
      messageForUser(
        'Sorry, there are no images matching your search query. Please try again!',
        'error'
      );
      return;
    }

    const createGallery = hits.map(item => createImgCard(item)).join('');

    refs.galleryList.innerHTML = createGallery;
    refs.loadMoreBtn.classList.remove('inactive');
    refs.loadMoreBtn.addEventListener('click', onClickLoadMoreBtn);

    new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
      captionDelay: 250,
      overlayOpacity: 0.9,
    });
  } catch (error) {
    console.log(error);
  } finally {
    refs.loader.classList.remove('is-loaded');
  }
};

refs.form.addEventListener('submit', onSubmitBtn);
