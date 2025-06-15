import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { botForm, BotConfig} from '../../Interface/interface'

@Component({
  selector: 'dashboard-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {

  BotConfig!:BotConfig;
  bForm!:botForm;


  constructor(private router: Router, private dashboard: DashboardService) {
    this.router.events.subscribe((event: Event) => {
      this.dashboard.setCurrentRoute(this.router.url);
      if (event instanceof NavigationEnd) {
        if (this.dashboard.sidebarOpen && window.innerWidth < 1024) {
          this.dashboard.closeSidebar();
        }
      }
    });
  }

  ngOnInit() {
    document.documentElement.style.overflow = 'hidden';
    const storedBotConfig = localStorage.getItem('botConfig');
    const storedBForm = localStorage.getItem('bForm');

    if (storedBotConfig) this.BotConfig = JSON.parse(storedBotConfig);
    if (storedBForm) this.bForm = JSON.parse(storedBForm);
    // set the html tag attribute overflow to hidden when component is mounted
  }
}
