export function helpSidebar() {
  return SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile('HelpSidebar').setTitle('Help')
  );
}

export class Addon {
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onOpen(e: unknown) {
    return SpreadsheetApp.getUi()
      .createMenu('Addon')
      .addItem('Help', 'helpSidebar')
      .addToUi();
  }
}
