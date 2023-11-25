import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-menu-sidenav',
  templateUrl: './menu-sidenav.component.html',
  styleUrls: ['./menu-sidenav.component.scss']
})
export class MenuSidenavComponent implements OnInit{
  languages = ['eng', 'uz', 'ru']
  storedTheme = localStorage.getItem('theme-color')

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('eng')
  }

  ngOnInit(): void {
    
  }

  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

    setTheme() {
      if (this.storedTheme === "theme-dark") {
        localStorage.setItem('theme-color', 'theme-light')
        this.storedTheme = localStorage.getItem('theme-color')
      } else {
        localStorage.setItem('theme-color', 'theme-dark')
        this.storedTheme = localStorage.getItem('theme-color')
      }
    }

    selectLang(lang: string) {
      console.log(lang);
      
      this.translateService.use(lang)      
    }

}

