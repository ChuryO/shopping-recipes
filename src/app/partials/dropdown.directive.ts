import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appDropdown]',
    exportAs: 'appDropdown'
})
export class DropdownDirective {
    isOpen: boolean = false;

    constructor(private elementRef: ElementRef) {
    }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event): void {
        this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
}
