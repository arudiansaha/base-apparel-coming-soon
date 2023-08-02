function createAppBar(imgSrc: string) {
  if (typeof document === 'undefined') return;

  const barElement = document.createElement('div');
  barElement.setAttribute('class', 'app__bar');
  barElement.innerHTML = `
    <img
      class="app__logo"
      src="${imgSrc}"
      alt="base apparel's logo"
      loading="lazy"
    />
  `;

  return barElement;
}

export default createAppBar;
