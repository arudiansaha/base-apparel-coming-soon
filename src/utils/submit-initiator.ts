type TProps = {
  input: HTMLInputElement;
  form: HTMLFormElement;
  message: HTMLParagraphElement;
};

class SubmitInitiator {
  input: HTMLInputElement;

  form: HTMLFormElement;

  message: HTMLParagraphElement;

  constructor({ input, form, message }: TProps) {
    this.input = input;
    this.form = form;
    this.message = message;

    this.setup();
  }

  setup() {
    this.input.addEventListener('input', (event: Event) => {
      event.preventDefault();
      this.validateEmailInput(event);
    });

    this.input.addEventListener('invalid', (event: Event) => {
      event.preventDefault();
      this.validateEmailInput(event);
    });

    this.form.addEventListener('submit', (event: Event) => {
      this.validateEmailInput(event);
    });
  }

  private validateEmailInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const validityState = target.validity;
    const fieldSetElement = document
      .querySelector<HTMLFieldSetElement>('.app__field')!;
    const errorSignElement = document
      .querySelector<HTMLImageElement>('.app__error-sign')!;

    if (validityState.typeMismatch) {
      target.classList?.add('invalid');
      fieldSetElement.classList?.add('invalid');
      errorSignElement.style.display = 'block';
      this.message.innerText = 'Please provide a valid email';
    } else {
      target.classList?.add('invalid');
      fieldSetElement.classList?.add('invalid');
      errorSignElement.style.display = 'block';
      this.message.innerText = target.validationMessage;
    }

    if (validityState.valid) {
      target.classList?.remove('invalid');
      fieldSetElement.classList?.remove('invalid');
      errorSignElement.style.display = 'none';
      this.message.innerText = '';
    }
  }
}

export default SubmitInitiator;
