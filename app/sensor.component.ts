import {Component} from 'angular2/core';
import {SensorService} from './sensor.service';
import {SensorData} from './models/sensorData';
import {FlotCmp} from './flot';
import {OnInit} from 'angular2/core';
import {Control,CORE_DIRECTIVES,FORM_DIRECTIVES} from 'angular2/common'

@Component({
    selector: 'my-sensor-view',
    templateUrl:'app/sensor-view.html' ,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES,FlotCmp]

})

export class SensorViewComponent implements OnInit{

  sensorData:Array<sensorData>=[];

 
   constructor(private _sensorService:SensorService){
        
        this.splineOptions: any = {
            series: {
                lines: { show: true },
                points: {
                    radius: 3,
                    show: true
                }
            }
        };
        
        
       this.loadRandomData();
     }

    loadRandomData(){
        var newData = [];
         newData.push([0,0]);
            for(var i=1;i<99;i++){
                newData.push([i,25]);
              
            }
             newData.push([100,50]);
            
            this.dataset = [{label: "line1",
                        color:"red",
                        data:  newData}];
    }
    
  
  ngOnInit(){
      this._sensorService.sensorDatas$.subscribe(
        data=>{
          let points = 100;
          
          if(data.length >points){
              this.sensorData=[];
              for(var i=data.length-1; i > data.length-points ;i --){
                  this.sensorData.push(data[i]);
              }
          }else{
              this.sensorData=data;
          }
          
 
                   
          var newData = [];
          this.sensorData.forEach(function(d,i){
              newData.push([points-i,d.val]);
          });
          

          
          this.dataset = [{label: "line1",
                      color:"red",
                      data:  newData}];
          
        }
      )
   }

}
