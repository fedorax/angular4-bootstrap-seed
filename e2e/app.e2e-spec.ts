import { Angular4seedPage } from './app.po';

describe('angular4seed App', () => {
  let page: Angular4seedPage;

  beforeEach(() => {
    page = new Angular4seedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
