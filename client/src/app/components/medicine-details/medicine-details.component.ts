import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine.model';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})

export class MedicineDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentMedicine: Medicine = {
    name: '',
    quantity: 0,
    price: 0,
    description: '',
    category: ''
  };
  message = '';
  constructor(
    private medicineService: MedicineService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getMedicine(this.route.snapshot.params["id"]);
    }
  }
  getMedicine(id: string): void {
    this.medicineService.get(id)
      .subscribe({
        next: (data) => {
          this.currentMedicine = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  updateMedicine(): void {
    this.message = '';
    this.medicineService.update(this.currentMedicine.id, this.currentMedicine)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This medicine was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteMedicine(): void {
    this.medicineService.delete(this.currentMedicine.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/medicine']);
        },
        error: (e) => console.error(e)
      });
  }
}