import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../../../core/interfaces/order.interface';
import { Neighborhood } from '../../../../core/interfaces/neighborhood.interface';
import { NeighborhoodsService } from '../../../../core/services/neighborhoods/neighborhoods.service';

@Component({
  selector: 'cart-address-details-page',
  templateUrl: './address-details-page.component.html',
  styles: ``
})
export class AddressDetailsPageComponent implements OnInit {
  @Output() onChangePage: EventEmitter<boolean> = new EventEmitter();
  @Output() onContinueForm: EventEmitter<Order> = new EventEmitter();

  public neighborhoods: Neighborhood[] = [];

  public form: FormGroup = new FormGroup({
    clientName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    clientTelephone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    deliveryType: new FormControl('', [Validators.required]),
    neighborhood: new FormControl(''),
    street: new FormControl(),
    exteriorNumber: new FormControl(),
    interiorNumber: new FormControl(),
    references: new FormControl()
  });

  constructor(
    private _neighborhoodsService: NeighborhoodsService
  ){}

  ngOnInit(): void {
    this._neighborhoodsService.getNeighborhoods()
      .subscribe(items => this.neighborhoods = items);
  }

  public changePage(nextPage: boolean): void {
    if(nextPage){
      if(this.form.invalid){
        return;
      }
      
      const order = this.form.value as Order;
      this.onContinueForm.emit(order);
    }
    this.onChangePage.emit(nextPage);
  }
}
