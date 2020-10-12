import {UiService} from './services/ui.service';

export class Lib {
  uiService: UiService;

  constructor() {
    this.uiService = new UiService();
  }
}
