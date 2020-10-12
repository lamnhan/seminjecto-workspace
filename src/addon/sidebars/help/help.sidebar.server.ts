export function helpSidebar() {
  return SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile('HelpSidebar').setTitle('Help')
  );
}

export function todo() {
  return 'Add server logic.';
}
