import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-numerico',
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.scss']
})
export class SelectorNumericoComponent {

  webForm: FormGroup;

  @Output() onValueChange = new EventEmitter<number>();
  
  @ViewChild('inputControl') inputControl!: ElementRef<HTMLInputElement>;


  constructor(private _builder:FormBuilder) {
    this.webForm = this._builder.group({
      input:[1,Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)])]    
    });
  }

  inputChange(){
    let inputValue = parseInt(this.inputControl.nativeElement.value);
    if (!(inputValue>0)) {
      inputValue = 1;
      this.inputControl.nativeElement.value = "1";
      this.webForm.updateValueAndValidity();
    }
    this.onValueChange.emit(inputValue);
  }

  add(num:number){
    this.inputControl.nativeElement.value = (parseInt(this.inputControl.nativeElement.value) + num).toString();
    this.inputChange();
  }

  


    

  


}
