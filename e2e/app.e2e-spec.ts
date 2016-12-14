import { PokeAngularPage } from './app.po';

describe('poke-angular App', function() {
  let page: PokeAngularPage;

  beforeEach(() => {
    page = new PokeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
