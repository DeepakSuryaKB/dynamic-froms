import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/service/form-service.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allForms:any[] = [];

  constructor(private formservice:FormServiceService,private clipboard: Clipboard,public _snackBar:MatSnackBar,public router:Router) { }

  ngOnInit(): void {
    this.getAllforms()

  }

  getAllforms(){
    this.formservice.getAllForms().subscribe((data:any)=>{
      console.log("data",data);
      this.allForms = data.data;
      console.log("data",data.data[0].form_structure);
      console.log( JSON.parse(data.data[2].form_structure) );



    },(err)=>{
      console.log("error",err);

    })
  }

  formlink(data:any){

    console.log("data",data);
    this.clipboard.copy(`http://localhost:4200/fillfrom/${data.form_name}`);

    this._snackBar.open('Form Url copied to clipboard', 'ok');




  }

  viewdata(data:any){
    this.router.navigateByUrl(`fromdata/${data.form_name}`)

  }

  createNewForm(){
    this.router.navigateByUrl('/build/form')

  }
}
