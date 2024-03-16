import { Component, OnInit } from '@angular/core';
import { ModelComponent } from '../shared/ui/model/model.component';
import { PhieuFormComponent } from '../phieu-form/phieu-form.component';
import { ToastrService } from 'ngx-toastr';
import { PhieuService } from '../../services/phieu.service';
import { IPhieu } from '../shared/models/Phieu';

@Component({
  selector: 'app-phieu',
  standalone: true,
  imports: [ModelComponent, PhieuFormComponent],
  templateUrl: './phieu.component.html',
  styleUrl: './phieu.component.scss',
})
export class PhieuComponent implements OnInit {
  isModelOpen = false;
  isModelOpenDetail = false;
  phieus: any = [];
  phieu!: any;

  constructor(
    private phieuService: PhieuService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllPhieu();
  }

  getAllPhieu() {
    this.phieuService.getAllPhieu().subscribe({
      next: (response) => {
        if (response) {
          this.phieus = response;
        }
      },
    });
  }

  deltaiPhieu(id: string) {
    this.phieuService.getPhieu(id).subscribe({
      next: (response) => {
        if (response) {
          this.phieu = response;
          console.log()
        }
      },
    });
    this.openModel();
  }

  deletePhieu(id: string) {
    this.phieuService.deletePhieu(id).subscribe({
      next: (response) => {
        this.toastr.success(response.message);
        this.getAllPhieu();
      },
    });
  }

  openModel() {
    this.isModelOpen = true;
    this.isModelOpenDetail = true;
  }

  closeModel() {
    this.isModelOpen = false;
    this.isModelOpenDetail = false;
    this.getAllPhieu();
  }
}
