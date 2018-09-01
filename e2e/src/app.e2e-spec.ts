import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should create page container', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toBeTruthy();
  });
});
