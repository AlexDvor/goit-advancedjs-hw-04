import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

class Pixabay {
  #API_KEY = '22579303-973b9b71134c76d3c38c0933d';
  currentPage = 1;
  queryField = '';

  #getSearchParams(query) {
    return {
      key: this.#API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: this.currentPage,
      per_page: 15,
    };
  }

  incrementPage() {
    this.currentPage++;
  }

  resetPage() {
    this.currentPage = 1;
  }

  async getPhotoByQuery(query) {
    this.queryField = query;
    const response = await axios.get('', {
      params: this.#getSearchParams(query),
    });
    console.log(response);
    return response.data;
  }
}

export const API = new Pixabay();
