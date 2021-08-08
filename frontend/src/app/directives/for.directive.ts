import { OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';
import {Input} from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm')
  numbers!: number[];
  
  /*
  @Input('myForUsando')
  texto!: string;
*/
  constructor(private container:ViewContainerRef, private template: TemplateRef<any>) {
   // console.log('MyFor')
   }

   ngOnInit(): void{
     for (let number of this.numbers){
       this.container.createEmbeddedView(
         this.template, {$implicit: number});
     }
    // console.log(this.numbers)
    // console.log(this.texto)
   }

}
