// класс для реализации функционала по добавланию нотификаций на страницу
// класс в своем название имеет "UI" подстроку
// которая дает нам понять, что тут будет отрисовка в ДОМЕ нашей нотификашки
// имея примеры LoaderUI и NewsUI
// нужно реализовать set.... и remove.... для управления этим эл-том
import {
  newsContainer
} from './uiElements.config';


export class NotificationUI {
  constructor() {
    this.container = newsContainer
  }

  setNotificationUI() {
    this.container.innerHTML = NotificationUI.getTemplate()
  }

  removeNotificationUI() {
    this.container.innerHTML = ''
  }


  static getTemplate() {
    return `
        <div class="row">
          <div class="col s12 m5">
            <div class="card-panel teal">
              <span class="white-text">No rezults!
              </span>
            </div>
          </div>
        </div>
        `
  }
}