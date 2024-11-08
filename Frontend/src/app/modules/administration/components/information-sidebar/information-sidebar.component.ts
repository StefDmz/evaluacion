import { Component, OnInit } from '@angular/core';
import { GeneralInformation } from '../../../../core/interfaces/general-information.interface';
import { GeneralInformationService } from '../../../../core/services/general-information/general-information.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SidebarService } from '../../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'admin-information-sidebar',
  templateUrl: './information-sidebar.component.html',
  styles: ``
})
export class InformationSidebarComponent implements OnInit {
  public loading: boolean = false;
  public imageError: boolean = false;

  public infoForm = new FormGroup({
    id: new FormControl<number>(0),
    ownerName: new FormControl<string>('', [Validators.required, Validators.maxLength(150)]),
    clabe: new FormControl<string>('', [Validators.required, Validators.pattern('^[0-9]{18}$')]),
    bankName: new FormControl<string>('', [Validators.required, Validators.maxLength(50)])
  });

  private _logoFile: File | null = null;

  constructor(
    private readonly _sidebarService: SidebarService,
    private readonly _generalInfoService: GeneralInformationService
  ){}

  ngOnInit(): void {
    this._generalInfoService.getInformation()
      .subscribe(item => {
        this.infoForm.reset(item);
      });
  }

  public get isOpen(): boolean {
    return this._sidebarService.isOpen;
  }

  public get currentInfo(): GeneralInformation {
    return this.infoForm.value as GeneralInformation;
  }

  public fileSelected(event: any): void {
    this._logoFile = event.target.files[0];
    if(this._logoFile?.type != "image/png"){
        this.imageError = true;
    } else {
      this.imageError = false;
    }
  }

  public submit(): void {
    if (this.infoForm.invalid) return;
  
    if (this._logoFile && this._logoFile.type !== 'image/png') return;
  
    this.loading = true;
  
    if (this._logoFile) {
      const formData = new FormData();
      formData.append('logoFile', this._logoFile);
  
      this._generalInfoService.uploadLogo(formData)
        .subscribe(() => {
          this.updateInformation();
        });
    } else {
      this.updateInformation();
    }
  }
  
  private updateInformation(): void {
    this._generalInfoService.updateInformation(this.currentInfo)
      .subscribe(() => {
        location.reload();
      });
  }  

  public closeSidebar(): void {
    this._sidebarService.closeSidebar();
  }
}
