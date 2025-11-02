import SimpleLightbox from 'simplelightbox';
import { collection } from './js/pixabay-api';
import { createImgCard } from './js/render-functions';
import iziToast from 'izitoast';

const refs = {
  form: document.querySelector('.form'),
  imgWrap: document.querySelector('.gallery'),
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
  collection.incrementPage();
  console.log(collection.queryField);
  try {
    const { hits, total, totalHits } = await collection.getPhotoByQuery(
      collection.queryField
    );

    if (hits.length === 0) {
      messageForUser(
        'Sorry, there are no images matching your search query. Please try again!',
        'error'
      );
      return;
    }

    const createGallery = hits.map(item => createImgCard(item)).join('');
    refs.imgWrap.insertAdjacentHTML('beforeend', createGallery);
    new SimpleLightbox('.gallery-link', {
      captionsData: 'alt',
      captionDelay: 250,
      overlayOpacity: 0.9,
    });
  } catch (error) {}
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

  try {
    const { hits, total, totalHits } = await collection.getPhotoByQuery(
      searchField
    );

    if (hits.length === 0) {
      messageForUser(
        'Sorry, there are no images matching your search query. Please try again!',
        'error'
      );
      return;
    }

    const createGallery = hits.map(item => createImgCard(item)).join('');

    refs.imgWrap.innerHTML = createGallery;
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
