import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../../../core/interfaces/order.interface';
import { MapboxResponse } from '../../../../core/interfaces/mapbox-response.interface';

@Component({
  selector: 'cart-address-details-page',
  templateUrl: './address-details-page.component.html',
  styles: ``
})
export class AddressDetailsPageComponent implements OnInit {
  @Input() public order?: Order;

  @Output() public onChangePage: EventEmitter<boolean> = new EventEmitter();
  @Output() public onContinueForm: EventEmitter<Order> = new EventEmitter();

  public showCompleteMap: Boolean = false;

  public form: FormGroup = new FormGroup({
    clientName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    clientTelephone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    deliveryType: new FormControl('', [Validators.required]),
    neighborhood: new FormControl(),
    street: new FormControl(),
    exteriorNumber: new FormControl(),
    interiorNumber: new FormControl(),
    references: new FormControl()
  });

  constructor() {
    this.form.get('deliveryType')?.valueChanges
      .subscribe(value => {
        this.deliveryTypeChange(value);
      });
  }

  ngOnInit(): void {
    if(this.order){
      this.form.get('clientName')?.setValue(this.order.clientName);
      this.form.get('clientTelephone')?.setValue(this.order.clientTelephone);
      this.form.get('deliveryType')?.setValue(this.order.deliveryType);
      if(this.order.deliveryType == 'domicilio'){
        this.form.get('neighborhood')?.setValue(this.order.neighborhood);
        this.form.get('street')?.setValue(this.order.street);
        this.form.get('exteriorNumber')?.setValue(this.order.exteriorNumber);
        this.form.get('interiorNumber')?.setValue(this.order.interiorNumber);
        this.form.get('references')?.setValue(this.order.references);
      }
    }
  }

  private deliveryTypeChange(deliveryType: string): void {
    const neighborhood = this.form.get('neighborhood');
    const street = this.form.get('street');
    const exteriorNumber = this.form.get('exteriorNumber');
    const interiorNumber = this.form.get('interiorNumber');
    const references = this.form.get('references');

    if (deliveryType == 'domicilio') {
      neighborhood?.addValidators([Validators.required, Validators.maxLength(100)]);
      street?.addValidators([Validators.required, Validators.maxLength(100)]);
      exteriorNumber?.addValidators([Validators.required, Validators.maxLength(6)]);
      interiorNumber?.addValidators([Validators.maxLength(6)]);
      references?.addValidators([Validators.maxLength(250)]);
    } else {
      neighborhood?.clearValidators();
      street?.clearValidators();
      exteriorNumber?.clearValidators();
      interiorNumber?.clearValidators();
      references?.clearValidators();
    }

    neighborhood?.updateValueAndValidity();
    street?.updateValueAndValidity();
    exteriorNumber?.updateValueAndValidity();
    interiorNumber?.updateValueAndValidity();
    references?.updateValueAndValidity();
  }

  public getAddressByMap(res: MapboxResponse): void {
    if (res.features.length <= 0) {
      alert("No se encontraron los datos de la ubicación seleccionada");
      this.form.get('neighborhood')?.setValue('');
      this.form.get('street')?.setValue('');
      this.form.get('exteriorNumber')?.setValue('');
      this.showCompleteMap = false;
      return;
    }
    const negihborhood = res.features[0].properties.context.locality ? res.features[0].properties.context.locality.name : "";
    const street = res.features[0].properties.context.address.street_name ? res.features[0].properties.context.address.street_name : "";
    const exteriorNumber = res.features[0].properties.context.address.address_number ? res.features[0].properties.context.address.address_number : "";
    this.form.get('neighborhood')?.setValue(negihborhood);
    this.form.get('street')?.setValue(street);
    this.form.get('exteriorNumber')?.setValue(exteriorNumber);
    this.showCompleteMap = false;
  }

  public changePage(nextPage: boolean): void {
    if (nextPage) {
      if (this.form.invalid) {
        return;
      }

      const order = this.form.value as Order;
      this.onContinueForm.emit(order);
    }
    this.onChangePage.emit(nextPage);
  }
}
