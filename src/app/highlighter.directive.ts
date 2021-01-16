import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlighter]',
})
export class HighlighterDirective {
  private isYellow = false;

  constructor() {}

  @HostBinding('class.has-background-warning')
  get isHighlighed() {
    return this.isYellow;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.isYellow = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.isYellow = false;
  }
}
