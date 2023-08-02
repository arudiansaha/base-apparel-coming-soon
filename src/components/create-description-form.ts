function createDescriptionForm(title: string, message: string) {
  const pathname = '/base-apparel-coming-soon';

  if (typeof document === 'undefined') return;

  const descriptionElement = document.createElement('div');
  descriptionElement.setAttribute('class', 'app__description');
  descriptionElement.innerHTML = `
    <h1 class="app__title">${title}</h1>
    <p class="app__message">${message}</p>
    <form class="app__form" id="emailForm">
      <fieldset class="app__field">
        <input
          class="app__input"
          id="emailInput"
          name="emailInput"
          type="email"
          placeholder="Email Address"
          required
        >
        <img
          class="app__error-sign"
          src="${pathname}/images/icons/icon-error.svg"
          alt=""
        >
        <button
          class="app__button"
          type="submit"
          form="emailForm"
          aria-label="submit email"
        >
          <img
            class="app__submit-sign"
            class="app__icon"
            src="${pathname}/images/icons/icon-arrow.svg"
            alt=""
          >
        </button>
      </fieldset>
      <p class="app__error-message" id="errorMessage"></p>
    </form>
  `;

  return descriptionElement;
}

export default createDescriptionForm;
