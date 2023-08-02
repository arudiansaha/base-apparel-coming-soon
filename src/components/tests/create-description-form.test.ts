import { describe, expect, test } from 'vitest';
import createDescriptionForm from '../create-description-form';

describe('Creating description and form element', () => {
  test('should render description element', () => {
    const description = {
      title: 'foo',
      message: 'bar',
    };

    if (typeof document === 'undefined') return;

    createDescriptionForm(description.title, description.message);

    const descriptionElement = document
      .querySelector<HTMLDivElement>('.app__description')!;

    expect(descriptionElement).toBeTruthy();
  });

  test('should render form element', () => {
    const description = {
      title: 'foo',
      message: 'bar',
    };

    if (typeof document === 'undefined') return;

    createDescriptionForm(description.title, description.message);

    const formElement = document.querySelector<HTMLFormElement>('#emailForm')!;

    expect(formElement).toBeTruthy();
  });
});
