import { MasterAppPage } from './app.po';

describe('master-app App', function() {
  let page: MasterAppPage;

  beforeEach(() => {
    page = new MasterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
