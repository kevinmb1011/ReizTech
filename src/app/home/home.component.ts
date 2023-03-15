import { Component } from '@angular/core';
import { MyDataService } from '../my-data.service';
import { Data } from '../data';
import { Regions } from '../regions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myData$:any;
  myData:any;
  myData2: Regions[] = [];
  myData3:Regions[]=[];
  constructor(private myDataService:MyDataService){}

  ngOnInit():void{
  this.getData();

  }
  // this.myData$ = this.myDataService.getData();
  // this.myDataService.getData().subscribe((data)=>{
  //   this.myData = data;
  getData(){
   this.myDataService.getData().subscribe((data:any)=>{
    this.myData2 = data;
  // for(let i=0;i<this.myData.length;i++){
  //   if(this.myData[i].area<65300.0)
  //   {
  //    this.myData2.push({name:this.myData[i].name,region:this.myData[i].region,area:this.myData[i].area,independent:this.myData[i].independent});
  //    console.log(this.myData2);
  //   }
  // }
   }
   )};

   sortName(){
    this.myData2.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
   })
}
  sortName2(){
    this.myData2.sort(function(a, b){
      if(b.name < a.name) { return -1; }
      if(b.name > a.name) { return 1; }
      return 0;
   })
  }
  filter()
  {
    // this.myDataService.getData().subscribe((data:any)=>{
    //   this.myData = data;
    // for(let i=0;i<this.myData.length;i++){
    //   if(this.myData[i].area<65300.0)
    //   {
    //    this.myData2.push({name:this.myData[i].name,region:this.myData[i].region,area:this.myData[i].area,independent:this.myData[i].independent});
    //    console.log(this.myData2);
    //   }
    // }
    //  }
    //  )
    this.myData2.filter((data)=>{
      if(data.area<65300.0 && data.region =="Oceania"){
        console.log(data.name)
        this.myData3.push({name:data.name,region:data.region,area:data.area,independent:data.independent});
        this.myData2 = this.myData3;
      }
    })
  }
}
