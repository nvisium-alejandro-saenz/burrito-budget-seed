import { BurritoBudgetSeedPage } from './app.po';

describe('burrito-budget-seed App', () => {
  let page: BurritoBudgetSeedPage;

  beforeEach(() => {
    page = new BurritoBudgetSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
