import SimpleLightbox from 'simplelightbox';
import { collection } from './js/pixabay-api';
import { createImgCard } from './js/render-functions';
import iziToast from 'izitoast';

const refs = {
  form: document.querySelector('.form'),
  imgWrap: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
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

const onSubmitBtn = e => {
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

  collection
    .getPhotoByQuery(searchField)
    .then(data => {
      if (!data.hits?.length) {
        messageForUser(
          'Sorry, there are no images matching your search query. Please try again!',
          'error'
        );
      }
      const createGallery = data.hits.map(item => createImgCard(item)).join('');

      refs.imgWrap.innerHTML = createGallery;
      new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
        captionDelay: 250,
        overlayOpacity: 0.9,
      });
    })
    .catch(e => console.log(e))
    .finally(() => {
      refs.loader.classList.remove('is-loaded');
    });
};

refs.form.addEventListener('submit', onSubmitBtn);
