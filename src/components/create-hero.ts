function createHero(src: string, srcSet: string) {
  if (typeof document === 'undefined') return;

  const pictureElement = document.createElement('picture');
  pictureElement.innerHTML = `
    <source srcSet="${srcSet}" media="(min-width: 1024px)">
    <img class="app__image" src="${src}" alt="hero" loading="lazy">
  `;

  return pictureElement;
}

export default createHero;
