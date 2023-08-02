import createAppBar from '../../components/create-app-bar';
import createHero from '../../components/create-hero';
import createDescriptionForm from '../../components/create-description-form';

class App {
  content: HTMLDivElement;

  constructor(content: HTMLDivElement) {
    this.content = content;
    this.renderPage();
  }

  private renderPage() {
    const pathname = '/base-apparel-coming-soon'
    const description = {
      title: `<span>we're</span> coming soon`,
      message: `Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our lunch deals`,
    };

    const barElement = createAppBar(`${pathname}/images/icons/logo.svg`);
    const heroElement = createHero(
      `${pathname}/images/heros/hero-mobile.jpg`,
      `${pathname}/images/heros/hero-desktop.jpg`,
    );
    const descriptionElement = createDescriptionForm(
      description.title, description.message,
    );

    this.content.setAttribute('class', 'app');
    this.content.appendChild(barElement!);
    this.content.appendChild(heroElement!);
    this.content.appendChild(descriptionElement!);
  }
}

export default App;
