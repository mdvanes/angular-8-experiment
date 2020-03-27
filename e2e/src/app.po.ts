import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getTopHeroPanels(): ElementArrayFinder {
    element.all(by.css('app-dashboard a')).get(1).getAttribute('href').then(y => console.log(y));
    return element.all(by.css('app-root app-dashboard a')) as ElementArrayFinder;
  }

  async clickTopHeroPanel(heroId: number) {
    // const attr = await element.all(by.css('app-dashboard a')).get(1).getAttribute('href'); // .then(y => console.log(y));
    // console.log('ATTR', attr);

    const panels = element.all(by.css('app-dashboard a'));
    const selectedPanel = panels.filter(async panel => {
      const attr = await panel.getAttribute('href');
      // console.log('ATTR2', attr);
      return attr === `http://localhost:4200/detail/${heroId}`;
    });
    // TODO test that there is exactly one result or else throw error
    console.log('Selected Panel:', await selectedPanel.first().getAttribute('href'));
    await selectedPanel.first().click();
    return;
  }

  getHeroDetailTitleText(): Promise<string> {
    return element(by.css('app-hero-detail h2')).getText() as Promise<string>;
  }
}
