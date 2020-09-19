import { Tiendavirtualangular2Page } from './app.po';

describe('tiendavirtualangular2 App', function() {
  let page: Tiendavirtualangular2Page;

  beforeEach(() => {
    page = new Tiendavirtualangular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
