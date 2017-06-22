import { browser, by, element } from 'protractor';

export class EndAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vehbi-root h1')).getText();
  }
}
