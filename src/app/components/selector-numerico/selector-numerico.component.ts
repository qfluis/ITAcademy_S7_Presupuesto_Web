import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-numerico',
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.scss']
})
export class SelectorNumericoComponent implements OnInit, AfterViewInit {

  webForm: FormGroup;
  @Input() nombreCampo:string = "";
  inputValue:number=1;
  @ViewChild('inputControl') inputControl!: ElementRef<HTMLInputElement>;


  constructor(private _builder:FormBuilder) {
    this.webForm = this._builder.group({
      input:['',Validators.compose([Validators.required, Validators.min(0), Validators.max(99999)])]    
    });

  }

  inputChange(){
    this.inputValue = parseInt(this.inputControl.nativeElement.value);
    if (!(this.inputValue>0)) {
      this.inputControl.nativeElement.value = "1";
    } 
  }

  add(num:number){
    this.inputControl.nativeElement.value = (parseInt(this.inputControl.nativeElement.value) + num).toString();
    this.inputChange();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit():void {
    this.inputControl.nativeElement.value = "1";
  }


    

  


}
