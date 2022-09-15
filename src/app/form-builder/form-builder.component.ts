import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormServiceService } from '../service/form-service.service';
import { CheckboxInputComponent } from './from-comp/checkbox-input/checkbox-input.component';
import { RadioInputComponent } from './from-comp/radio-input/radio-input.component';
import { TextAreaInputComponent } from './from-comp/text-area-input/text-area-input.component';
import { TextInputComponent } from './from-comp/text-input/text-input.component';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  formArray:any = [];

  constructor(public dialog:MatDialog,public formService:FormServiceService) { }

  ngOnInit(): void {
    this.formService.FromObject.subscribe((data:any)=>{

      this.formArray.push(data);
      console.log("this.formArray",this.formArray);


    })
  }

  opendialog(){
    this.dialog.open(TextInputComponent);

  }
  opendialogtextArea(){
    this.dialog.open(TextAreaInputComponent);

  }
  opendialogRadio(){
    this.dialog.open(RadioInputComponent);
  }

  opendialogCheckBox(){
    this.dialog.open(CheckboxInputComponent);

  }

}
