import { FirstAngularProjectPage } from './app.po';

describe('first-angular-project App', () => {
  let page: FirstAngularProjectPage;

  beforeEach(() => {
    page = new FirstAngularProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
