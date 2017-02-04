import { AngularBasicPt2Page } from './app.po';

describe('angular-basic-pt2 App', function() {
  let page: AngularBasicPt2Page;

  beforeEach(() => {
    page = new AngularBasicPt2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
