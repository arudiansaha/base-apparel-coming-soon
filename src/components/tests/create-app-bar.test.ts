import { describe, expect, test } from 'vitest';
import createAppBar from '../create-app-bar';

describe('Creating bar element', () => {
  test('should render bar element', () => {
    if (typeof document === 'undefined') return;

    const barElement = createAppBar('/images/icons/logo.svg');

    expect(barElement).toBeTruthy();
  });

  test('should has `img` element inside', () => {
    if (typeof document === 'undefined') return;

    createAppBar('/images/icons/logo.svg');

    const logoElement = document
      .querySelector<HTMLImageElement>(`img[alt="base apparel's logo"]`)!;

    expect(logoElement).toBeTruthy();
  });
});
