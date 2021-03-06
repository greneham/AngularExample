import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url): Promise<unknown> {
    return browser.get(browser.baseUrl + url) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root app-title h1')).getText() as Promise<string>;
  }
}
