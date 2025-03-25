import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  formData: any;
  constructor(private _router: Router, private readonly formDatService: FormDataService) {}
  ngOnInit() {
    this.formData = this.formDatService.getFormData();
  }
  onEdit() {
    this._router.navigate(['/signup']);
  }
}
