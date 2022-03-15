import {Directive, ElementRef, HostListener, Inject, Input, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appTooltip]'

})
export class TooltipDirective {
  public tooltip: HTMLElement | null = null;
  public tooltipText = this.renderer.createText('Remove this item');

  constructor( private elementRef: ElementRef,
               private renderer: Renderer2,
               @Inject(DOCUMENT) private  document: Document,
  ) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    if (!this.tooltip) {
      this.create();
    }
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    if (this.tooltip) {
      this.hide();
    }
  }

  public create(): void {
    const element = this.elementRef.nativeElement;

    this.tooltip = this.renderer.createElement('span');
    this.renderer.addClass(this.tooltip, 'info-tooltip');
    this.renderer.appendChild(this.tooltip, this.tooltipText);
    this.renderer.appendChild( this.document.body, this.tooltip);
    // console.log('enter', this.tooltip);
  }

  public hide(): void {
    if (!this.tooltip) {
      return;
    }
    this.renderer.removeClass(this.tooltip, 'info-tooltip');
    this.renderer.removeChild( this.tooltip, this.tooltipText);
    this.tooltip = null;
    // console.log('leave', this.tooltip);
  }

}
