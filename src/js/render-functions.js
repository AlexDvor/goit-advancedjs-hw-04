export const createImgCard = ({
  downloads = 0,
  comments = 0,
  likes = 0,
  views = 0,
  webformatURL,
  largeImageURL,
  tags,
}) => {
  return `<li class="gallery-item">
      <a class="gallery-link" href=${largeImageURL}>
        <div class='gallery-thumb-image'>
          <img class="gallery-image" src=${webformatURL} data-source=${largeImageURL} alt=${tags} />
        </div>
        <div class='wrapper-info'>
          <div class='info'>
            <p>Likes</p>
            <p>${likes}</p>
          </div>
          <div class='info'>
            <p>Views</p>
            <p>${views}</p>
          </div>
          <div class='info'>
            <p>Coments</p>
            <p>${comments}</p>
          </div>
          <div class='info'>
            <p>Downloads</p>
            <p>${downloads}</p>
          </div>
        </div>
      </a>
    </li>
`;
};
