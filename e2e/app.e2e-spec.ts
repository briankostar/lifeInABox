import { LifeInABoxPage } from './app.po';

describe('life-in-abox App', () => {
  let page: LifeInABoxPage;

  beforeEach(() => {
    page = new LifeInABoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
