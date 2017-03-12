import { ScorebourdTv2Page } from './app.po';

describe('scorebourd-tv2 App', function() {
  let page: ScorebourdTv2Page;

  beforeEach(() => {
    page = new ScorebourdTv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
