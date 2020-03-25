import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService) { }

  role:any;
  ngOnInit() {
    this.role = this.localStorageService.getRole()
  }

}
