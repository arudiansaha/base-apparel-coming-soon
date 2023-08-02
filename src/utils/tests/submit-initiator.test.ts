import { beforeEach, describe, expect, test } from 'vitest';
import SubmitInitiator from '../submit-initiator';

describe('Submit validation', () => {
  beforeEach(() => {
    if (typeof document === 'undefined') return;

    const containerElement = document.createElement('div');
    const messageElement = document.createElement('p');

    const formElement = document.createElement('form');
    formElement.setAttribute('id', 'emailForm');
    formElement.innerHTML = `
      <input type="email" required>
      <button type="submit" form="emailForm">Submit</button>
    `;

    containerElement.appendChild(formElement);
    containerElement.appendChild(messageElement);

    const submitInitiator = new SubmitInitiator({
      input: document.querySelector<HTMLInputElement>('input')!,
      form: document.querySelector<HTMLFormElement>('#emailForm')!,
      message: document.querySelector<HTMLParagraphElement>('p')!,
    });

    submitInitiator.setup();
  });

  test('should has invalid class when invalid', () => {
    if (typeof document === 'undefined') return;

    const formElement = document.querySelector<HTMLFormElement>('#emailForm')!;

    formElement.get('button').trigger('click');

    const inputHasInvalidClass = document
      .querySelector<HTMLInputElement>('input[class="invalid"]')!;

    expect(inputHasInvalidClass).toBeTruthy();
  });

  test('should not has invalid class when valid', () => {
    if (typeof document === 'undefined') return;

    const formElement = document.querySelector<HTMLFormElement>('#emailForm')!;

    formElement.get('input').setValue('email@me.com');
    formElement.get('button').trigger('click');

    const inputHasInvalidClass = document
      .querySelector<HTMLInputElement>('input[class="invalid"]')!;

    expect(inputHasInvalidClass).toBeFalsy();
  });

  test('should not empty message when invalid', () => {
    if (typeof document === 'undefined') return;

    const formElement = document.querySelector<HTMLFormElement>('#emailForm')!;
    const messageElement = document.querySelector<HTMLParagraphElement>('p')!;

    formElement.get('button').trigger('click');

    expect(messageElement).not.toEqual('');
  });

  test('should empty message when valid', () => {
    if (typeof document === 'undefined') return;

    const formElement = document.querySelector<HTMLFormElement>('#emailForm')!;
    const messageElement = document.querySelector<HTMLParagraphElement>('p')!;

    formElement.get('input').setValue('email@me.com');
    formElement.get('button').trigger('click');

    expect(messageElement).toEqual('');
  });
});
