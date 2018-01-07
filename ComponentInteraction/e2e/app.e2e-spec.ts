import {AppPage} from './app.po';
import {by, element} from 'protractor';

describe('component-interaction App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should display trimmed, non-empty names', () => {
    const _nonEmptyNameIndex = 0;
    const _nonEmptyName = '"Mr. IQ123"';
    const parent = element.all(by.tagName('app-name-parent')).get(0);
    const hero = parent.all(by.tagName('app-name-child')).get(_nonEmptyNameIndex);

    const displayName = hero.element(by.tagName('h3')).getText();

    expect(displayName).toEqual(_nonEmptyName);
  });
});
