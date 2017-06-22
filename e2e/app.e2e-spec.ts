import { EndAppPage } from './app.po';

describe('end-app App', () => {
  let page: EndAppPage;

  beforeEach(() => {
    page = new EndAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('vehbi works!');
  });
});
