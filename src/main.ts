import './style.css';
import App from './views/template/app';
import SubmitInitiator from './utils/submit-initiator';

const app = new App(document.querySelector<HTMLDivElement>('#app')!);

const submitInitiator = new SubmitInitiator({
  input: document.querySelector<HTMLInputElement>('#emailInput')!,
  form: document.querySelector<HTMLFormElement>('#emailForm')!,
  message: document.querySelector<HTMLParagraphElement>('#errorMessage')!,
});

window.addEventListener('DOMContentLoaded', () => {
  app;
  submitInitiator.setup();
});
