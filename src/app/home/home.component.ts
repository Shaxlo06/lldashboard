import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  languages = ['eng', 'uz', 'ru']

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.languages)
    translateService.setDefaultLang('eng')
    this.translateService.use('eng')
  }

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

    selectLang(lang: string) {
      this.translateService.use(lang)
    }
}
