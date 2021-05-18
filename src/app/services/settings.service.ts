import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private link_theme = document.querySelector('#theme');
  
  constructor() {
    const theme_pre_charged = localStorage.getItem("theme") || "./assets/css/colors/default-dark.css";
    this.link_theme.setAttribute('href', theme_pre_charged);
  }

  changeTheme( theme: string ){
    const url = `./assets/css/colors/${theme}.css`
    this.link_theme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    links.forEach( element => {
      element.classList.remove('working');
      const btn_theme = element.getAttribute('data-theme');
      const bth_theme_url = `./assets/css/colors/${btn_theme}.css`
      const current_theme = this.link_theme.getAttribute('href');
      if (bth_theme_url == current_theme) {
        element.classList.add('working');
      }
    })
  }
}
