import { MyRecipesAppPage } from './app.po';

describe('my-recipes-app App', () => {
  let page: MyRecipesAppPage;

  beforeEach(() => {
    page = new MyRecipesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
