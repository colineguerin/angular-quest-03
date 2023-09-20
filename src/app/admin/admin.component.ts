import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  title = 'Bonjour !';

  isAdmin: boolean = true;

  changeAdminStatus(): void {
    this.isAdmin = !this.isAdmin;
  }

}
