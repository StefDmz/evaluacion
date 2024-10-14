import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {
  @Input() public tooltipText: string = '';
}
