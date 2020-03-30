import { AppPage } from './app.po';
import { browser, by, element, ElementArrayFinder, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Tour of Heroes');
  });

  it('navigates to details after clicking on first top hero', async () => {
    await page.navigateTo();
    // const attr = await element.all(by.css('app-dashboard a')).get(1).getAttribute('href'); // .then(y => console.log(y));
    // console.log(attr);
    // const x = await page.getTopHeroPanels() as unknown as ElementArrayFinder;
    // console.log(x.count());

    // Does not work anymore since Node 8:
    // browser.pause();

    await page.clickTopHeroPanel(14);
    // debugger;
    // expect(x).toEqual([]);
    expect(page.getHeroDetailTitleText()).toEqual('CELERITAS Details');

    // To debug:
    // 1. Add a `debugger;` statement somewhere in the code
    // 2. do not start with `ng e2e` but with `ng serve` and in other terminal `npm run e2e:debug`
    // 3. In Chrome, open the console and click the green "NodeJS" icon
    // 4. A new Chrome window will open. Click the blue `continue` arrow.
    // 5. The tests will start running. The next breakpoint will be at the `debugger;` statement.
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
