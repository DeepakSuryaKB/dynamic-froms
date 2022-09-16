import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar,public formService:FormServiceService) {}

  ngOnInit(): void {}

  favoriteSeason: any;
  labelInput: any;
  placeholderInput: any;
  requiredType: string[] = ['Yes', 'No'];
  required: any = false;

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

  addToArray() {
    if(this.labelInput != '' && this.labelInput != null){
      let obj:any = {
        'label': this.labelInput,
        'input': 'text-input',
        'placeholder': this.placeholderInput,
        'required':false
      };
      if(this.required){
        obj["required"]=true

      }
      this.formService.getCurrentFromObject(obj);


      console.log("obj",obj);

    }else{
      this._snackBar.open('Lable cannot be empty', 'ok');
      //console.log(" lable input cannot be null");

    }


  }
}
