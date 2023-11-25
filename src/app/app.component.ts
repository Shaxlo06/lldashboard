import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LLdashboard';
  languages = ['eng', 'uz', 'ru']

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.languages)
    translateService.setDefaultLang('eng')
    this.translateService.use('eng')
  }

  selectLang(lang: any) {
    this.translateService.use(lang)
    const selectedLang = lang.target.value
    alert(selectedLang)
    console.log("hi");
    
  }
}
