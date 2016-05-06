export class UltimaListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ultima-list-app h1')).getText();
  }
}
