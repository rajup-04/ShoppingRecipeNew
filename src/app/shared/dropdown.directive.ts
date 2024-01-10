import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  @HostBinding('class.open') open = false;

  constructor(private elRef : ElementRef) { }

  @HostListener('click') Onclick(){
    this.open = !this.open
  }

  ngOnInit(): void {
    
  }

  

}
