import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent implements OnInit {


  labelInput: any;
  placeholderInput: any;
  radioOption: any;
  radioButtons: string[] = [];
  required: any = false;

  constructor(private _snackBar: MatSnackBar,public formService:FormServiceService) { }

  ngOnInit(): void {
  }

  requiredoption(e: any) {
    console.log('e', e);
    if (e.value == 'Yes') {
      console.log('tes');

      this.required = true;
    }
    if (e.value == 'No') {
      console.log('bus');
      this.required = false;
    }
  }

  addtoRadioButton(){
    if(this.radioOption != '' && this.radioOption != null){
      this.radioButtons.push(this.radioOption);
      this.radioOption =''

    }else{
      this._snackBar.open('Option cannot be empty', 'ok');

    }

  }

  addToArray(){
    if(this.labelInput != '' && this.labelInput != null){

      if(this.radioButtons.length >= 2){
        let obj = {
          'label': this.labelInput,
            'input': 'radio',
            'required':false,
            'values':[...this.radioButtons]


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
