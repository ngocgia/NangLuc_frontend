import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { IPhieu } from '../../core/models/Phieu';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhieuService } from '../../core/services/phieu.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-phieu-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './phieu-form.component.html',
  styleUrl: './phieu-form.component.scss',
})
export class PhieuFormComponent implements OnChanges {
  // @Input() data: IPhieu | null = null;
  @Input() data: any | null = null;
  @Output() onCloseModel = new EventEmitter();
  phieuForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private phieuService: PhieuService,
    private toastr: ToastrService
  ) {
    this.phieuForm = this.fb.group({
      trangThai: new FormControl('', [Validators.required]),
      loaiDV: new FormControl('', [Validators.required]),
      // mobile: new FormControl('', [Validators.required]),
      // dob: new FormControl('', [Validators.required]),
      // doj: new FormControl('', [Validators.required]),
    });
  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  ngOnChanges(): void {
    if (this.data) {
      this.phieuForm.patchValue({
        trangThai: this.data.trangThai,
        loaiDV: this.data.loaiDV,
        thoiGianBD: formatDate(this.data.thoiGianBD, 'yyyy-MM-dd', 'en'),
        thoiGianKT: formatDate(this.data.thoiGianKT, 'yyyy-MM-dd', 'en'),
      });
    }
  }

  onSubmit() {
    if (this.phieuForm.valid) {
      if (this.data) {
        this.phieuService
          .updatePhieu(this.data._id as string, this.phieuForm.value)
          .subscribe({
            next: (response: any) => {
              this.resetPhieuForm();
              this.toastr.success(response.message);
            },
          });
      } else {
        this.phieuService.createPhieu(this.phieuForm.value).subscribe({
          next: (response: any) => {
            this.resetPhieuForm();
            this.toastr.success(response.message);
          },
        });
      }
    } else {
      this.phieuForm.markAllAsTouched();
    }
  }

  resetPhieuForm() {
    this.phieuForm.reset();
    this.onClose();
  }
}
