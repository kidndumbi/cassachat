import { A41Page } from './app.po';

describe('a41 App', () => {
  let page: A41Page;

  beforeEach(() => {
    page = new A41Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
