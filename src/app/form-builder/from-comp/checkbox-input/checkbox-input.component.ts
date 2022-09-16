import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent implements OnInit {

  labelInput: any;
  placeholderInput: any;
  checkboxOption: any;
  CheckBoxButtons: string[] = [];
  required: any = false;

  constructor(private _snackBar: MatSnackBar,public formService:FormServiceService) { }

  ngOnInit(): void {
  }


  addtoCheckBoxButton(){
    if(this.checkboxOption != '' && this.checkboxOption != null){
      this.CheckBoxButtons.push(this.checkboxOption);
      this.checkboxOption =''

    }else{
      this._snackBar.open('Option cannot be empty', 'ok');

    }

  }

  addToArray(){
    if(this.labelInput != '' && this.labelInput != null){

      if(this.CheckBoxButtons.length >= 2){
        let obj = {
          'label': this.labelInput,
            'input': 'checkbox',
            'required':false,
            'values':[...this.CheckBoxButtons]


        }
        this.formService.getCurrentFromObject(obj);
        console.log("obj",obj);


      }else{
        this._snackBar.open('minimum 2 options are required', 'ok');


      }

    }else{
      this._snackBar.open('Lable cannot be empty', 'ok');

    }


  }

}
