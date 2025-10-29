class Pixabay {
  #API_KEY = '22579303-973b9b71134c76d3c38c0933d';
  #URL_API = ' https://pixabay.com/api';

  #getSearchParams(query) {
    return new URLSearchParams({
      key: this.#API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    }).toString();
  }

  getPhotoByQuery(query) {
    return fetch(`${this.#URL_API}/?${this.#getSearchParams(query)}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }
    );
  }
}

export const collection = new Pixabay();
