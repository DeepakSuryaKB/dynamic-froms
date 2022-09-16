import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  id: any;
  fromStrucute:any[] = [];
  formname: any;


  public myform :FormGroup = this.fb.group({});
  constructor(private route: ActivatedRoute, private formservice:FormServiceService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('name');
    console.log("id is",this.id);
    this.getFormStrucutre();

  }

  getFormStrucutre(){
    this.formservice.getParticulatForm(this.id).subscribe((data:any)=>{

      this.formname = data.data?.form_name
      this.fromStrucute = JSON.parse(data.data?.form_structure);
      console.log("this.fromStrucute",this.fromStrucute);

      for(let i=0;i<this.fromStrucute.length;i++){
        var validators:any[] = [];
        if(this.fromStrucute[i].label && this.fromStrucute[i].required){
          validators.push(Validators.required)
          this.myform.addControl(this.fromStrucute[i].label, this.fb.control('',validators));

        }else if(this.fromStrucute[i].label){
          this.myform.addControl(this.fromStrucute[i].label, this.fb.control(''));
        }
        validators = [];


      }

      console.log("form is",this.myform);



      if(data.data ==  null){
        this.router.navigateByUrl('/');
      }


    },(error)=>{
      console.log("error",error);

    })

  }

  submitForm(){
    console.log("from submit",this.myform.value);
    let obj ={
      form_name:this.formname,
      data:JSON.stringify(this.myform.value)
    }
    this.formservice.addDatatoFrom(obj).subscribe((data:any)=>{
      console.log("data",data);
      this.router.navigateByUrl('/');
      this.myform.reset();



    },(error:any)=>{
      console.log("error",error);

    })

  }

  radiobutton(formcontrol:any,e:any){
    console.log("evenet is",e.value);
    console.log("formcontrol is",formcontrol);
    this.myform.patchValue({
      [formcontrol]:e.value

    });


  }

  checkbox(formcontrol:any,e:any){
    console.log("evenet is",e.source.value);
    console.log("formcontrol is",formcontrol);
    this.myform.patchValue({
      [formcontrol]:e.source.value

    });

  }

}
