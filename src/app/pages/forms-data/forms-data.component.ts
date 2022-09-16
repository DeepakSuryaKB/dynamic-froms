import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-forms-data',
  templateUrl: './forms-data.component.html',
  styleUrls: ['./forms-data.component.scss']
})
export class FormsDataComponent implements OnInit {

  id:any;
  tableheads:any[]=[];
  tablebody:any[]=[];
  constructor(private route: ActivatedRoute, private formservice:FormServiceService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('name');
    console.log("id is",this.id);
    this.getFormData(this.id);


  }

  getFormData(id:any){
    this.formservice.getDataofParticulatForm(id).subscribe((data:any)=>{
      console.log("data",data);
      if(data.data.length == 0){
        this.router.navigateByUrl('/');

      }
      console.log("JSON.parse(data.data[0]))",JSON.parse(data.data[0].data));
      let headdata:any = JSON.parse(data.data[0].data)

      for (var key in headdata) {
        if (headdata.hasOwnProperty(key)) {
            console.log(key + " -> " + headdata[key]);
            this.tableheads.push(key);

        }
    }
    console.log("this.tableheads",this.tableheads);

    for(let i=0;i<data?.data?.length;i++){
      console.log("i ",data?.data[i].data);
      let bodydata=JSON.parse(data.data[i].data);
      this.tablebody.push(bodydata);



    }
    console.log("this.tablebody",this.tablebody);





    },(error:any)=>{
      console.log("error",error);


    })


  }


}
