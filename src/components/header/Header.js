import { ExcelComponent } from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  toHtml() {
    return `
    <input class="input" type="text" value="Новая таблица" />
    <div class="actions">
      <div class="button">
        <span class="material-icons">
          exit_to_app
        </span>
      </div>
      <div class="button">
        <span class="material-icons">
          delete_outline
        </span>
      </div>
    </div>
    `
  }
}