import { describe, expect, test } from 'vitest';
import createHero from '../create-hero';

describe('Creating hero element', () => {
  test('should render hero element', () => {
    if (typeof document === 'undefined') return;

    const heroElement = createHero(
      '/images/heros/hero-mobile.jpg',
      '/images/heros/hero-desktop.jpg',
    );

    expect(heroElement).toBeTruthy();
  });

  test('should has `source` element inside', () => {
    if (typeof document === 'undefined') return;

    createHero(
      '/images/heros/hero-mobile.jpg',
      '/images/heros/hero-desktop.jpg',
    );

    const sourceElement = document.querySelector<HTMLSourceElement>('source')!;

    expect(sourceElement).toBeTruthy();
  });

  test('should has `img` element inside', () => {
    if (typeof document === 'undefined') return;

    createHero(
      '/images/heros/hero-mobile.jpg',
      '/images/heros/hero-desktop.jpg',
    );

    const imageElement = document.querySelector<HTMLSourceElement>('img')!;

    expect(imageElement).toBeTruthy();
  });
});
