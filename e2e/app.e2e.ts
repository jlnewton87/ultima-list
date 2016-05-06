import { UltimaListPage } from './app.po';

describe('ultima-list App', function() {
  let page: UltimaListPage;

  beforeEach(() => {
    page = new UltimaListPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ultima-list works!');
  });
});
