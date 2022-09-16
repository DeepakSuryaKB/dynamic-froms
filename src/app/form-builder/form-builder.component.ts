import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  Fromname:any;
type: any;

  constructor(public dialog:MatDialog,public formService:FormServiceService,public _snackBar:MatSnackBar,public router:Router) { }

  ngOnInit(): void {

    this.formService.FromObject.subscribe((data:any)=>{




      this.formArray.push(data);
      console.log("this.formArray",this.formArray);


    })


  }

  moveup(item:any){
    console.log("item is");
    let index:any;
    for(let i=0 ; i<this.formArray.length;i++){
      if(this.formArray[i].label == item.trim()){
        console.log("match accoured");
        index =i;




      }

    }
    if (index > 0) {
      let el = this.formArray[index];
      this.formArray[index] = this.formArray[index - 1];
      this.formArray[index - 1] = el;
    }




  }

  createFrom(){
    if(this.Fromname != '' || this.Fromname != undefined){
      let obj ={
        form_name:this.Fromname,
        form_structure: JSON.stringify(this.formArray)
      }
      this.formService.createForm(obj).subscribe((data:any)=>{
        console.log("data is ",data);
        this._snackBar.open('Form Created', 'ok');
        this.router.navigateByUrl('/');



      },(err)=>{
        this._snackBar.open('Error Creating Form', 'ok');
        console.log("err is ",err);

      })

    }else{
      this._snackBar.open('Form name cannot be empty', 'ok');

    }

    console.log("create from");

  }
  movedown(item:any){
    let index :any;
    console.log("indexx ba us",index);


    for(let i=0 ; i<this.formArray.length;i++){
      console.log("log of i", i);

      if(this.formArray[i].label == item.trim()){
        console.log("log of i inside if", i);
        console.log("match accoured");
        index= i;






      }

    }

    if(index != null || index != undefined){
      let el = this.formArray[index];
      this.formArray[index] = this.formArray[index + 1];
      this.formArray[index + 1] = el;

    }


  }
  delete(item:any){
    console.log("item is ",item);
    for(let i=0 ; i<this.formArray.length;i++){
      if(this.formArray[i].label == item.trim()){
        console.log("match accoured");
        this.formArray.splice(i, 1);

      }

    }




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
