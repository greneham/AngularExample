import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('fetches list of users', () => {
    page.navigateTo('');
    expect(page.getTitleText()).toEqual('USERS');
  });

  it('gets details for user 1', () => {
    page.navigateTo('user-details/1');
    expect(page.getTitleText()).toEqual('GEORGE BLUTH');
  });

  it('404 page works', () => {
    page.navigateTo('someurlthatwontwork');
    expect(page.getTitleText()).toEqual('PAGE NOT FOUND');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
