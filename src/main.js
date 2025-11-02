import SimpleLightbox from 'simplelightbox';
import { API } from './js/pixabay-api';
import { createImgCard } from './js/render-functions';
import iziToast from 'izitoast';

const refs = {
  form: document.querySelector('.form'),
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
  card: document.querySelector('.gallery-item'),
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

const removeLoadMoreBtn = () => {
  refs.loadMoreBtn.classList.add('inactive');
  refs.loadMoreBtn.removeEventListener('click', onClickLoadMoreBtn);
};
const addLoadMoreBtn = () => {
  refs.loadMoreBtn.classList.remove('inactive');
  refs.loadMoreBtn.addEventListener('click', onClickLoadMoreBtn);
};

const getHeightEl = () => {
  const htmlEl = refs.galleryList.children[0];
  const { height } = htmlEl.getBoundingClientRect();

  return height;
};

const onClickLoadMoreBtn = async e => {
  API.incrementPage();

  try {
    const { hits, totalHits } = await API.getPhotoByQuery(API.queryField);

    if (hits.length === 0 && totalHits === 0) {
      messageForUser(
        'Sorry, there are no images matching your search query. Please try again!',
        'error'
      );
      return;
    }

    const createGallery = hits.map(item => createImgCard(item)).join('');
    refs.galleryList.insertAdjacentHTML('beforeend', createGallery);

    const quantityEl = refs.galleryList.children.length;

    window.scrollBy({
      top: getHeightEl() * 2,
      left: 0,
      behavior: 'smooth',
    });

    new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
      captionDelay: 250,
      overlayOpacity: 0.9,
    });

    if (totalHits === quantityEl) {
      messageForUser(
        `We're sorry, but you've reached the end of search results.`,
        'warning'
      );
      removeLoadMoreBtn();
    }
  } catch (error) {
    messageForUser(error.message, 'error');
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

  API.resetPage();
  refs.loader.classList.add('is-loaded');

  try {
    const { hits, totalHits } = await API.getPhotoByQuery(searchField);

    if (hits.length === 0) {
      messageForUser(
        'Sorry, there are no images matching your search query. Please try again!',
        'error'
      );
      return;
    }

    const createGallery = hits.map(item => createImgCard(item)).join('');

    refs.galleryList.innerHTML = createGallery;
    const quantityEl = refs.galleryList.children.length;

    if (totalHits === quantityEl) {
      removeLoadMoreBtn();
    } else {
      addLoadMoreBtn();
    }

    new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
      captionDelay: 250,
      overlayOpacity: 0.9,
    });
  } catch (error) {
    messageForUser(error.message, 'error');
    refs.galleryList.innerHTML = '';
    removeLoadMoreBtn();
    console.log(error);
  } finally {
    refs.loader.classList.remove('is-loaded');
  }
};

refs.form.addEventListener('submit', onSubmitBtn);
