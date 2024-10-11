import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _isOpen: boolean = false;
  private _isClosing: boolean = false;

  public get isOpen(): boolean {
    return this._isOpen;
  }

  public get isClosing(): boolean {
    return this._isClosing;
  }

  public openModal(): void {
    this._isOpen = true;
  }

  public closeModal(): void {
    this._isClosing = true;
    setTimeout(() => {
      this._isOpen = false;
      this._isClosing = false;
    }, 1000);
  }
}
