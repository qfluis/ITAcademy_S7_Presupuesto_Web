import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-numerico',
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.scss']
})
export class SelectorNumericoComponent implements OnInit {

  webForm: FormGroup;
  @Input () valorInicial:number = 1;

  @Output() onValueChange = new EventEmitter<number>();
  
  @ViewChild('inputControl') inputControl!: ElementRef<HTMLInputElement>;


  constructor(private _builder:FormBuilder) {
    // En constructor no puedo acceder al valorInicial.
    this.webForm = this._builder.group({
      input:[this.valorInicial,Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)])]    
    });
    
  }
  ngOnInit(): void {
    this.webForm = this._builder.group({
      input:[this.valorInicial,Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)])]    
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
