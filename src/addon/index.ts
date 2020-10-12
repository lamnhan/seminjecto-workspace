export class Addon {
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAddon(e: unknown) {
    return SpreadsheetApp.getUi()
      .createMenu('Addon')
      .addItem('Help', 'helpSidebar')
      .addToUi();
  }
}
