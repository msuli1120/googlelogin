import { GoogleloginPage } from './app.po';

describe('googlelogin App', () => {
  let page: GoogleloginPage;

  beforeEach(() => {
    page = new GoogleloginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
