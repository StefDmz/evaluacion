import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-pagination',
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent {
  @Input() canPrev!: boolean;
  @Input() currentPage!: number;
  @Input() pages!: number;
  @Input() canNext!: boolean;

  @Output() onChangePage: EventEmitter<number> = new EventEmitter();

  public changePage(page: number): void {
    this.onChangePage.emit(page);
  }
}
