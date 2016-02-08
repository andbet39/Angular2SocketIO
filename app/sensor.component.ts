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
        
        
        this.dataset = [{label: "line1",
                      color:"blue",
                      data:  [[1, 0], [2, 50], [3, 0], [4, 0], [5, 50], [6, 50], [7, 50], [8, 50], [9, 50], [10, 0]]}];

     }

  ngOnInit(){
      this._sensorService.sensorDatas$.subscribe(
        data=>{
          
          if(data.length >11){
              this.sensorData=[];
              for(var i=data.length-1; i > data.length-11 ;i --){
                  this.sensorData.push(data[i]);
              }
          }else{
              this.sensorData=data;
          }
          
 
          
          
          var newData = [];
          this.sensorData.forEach(function(d,i){
              newData.push([i,d.val]);
          });
          

          
          this.dataset = [{label: "line1",
                      color:"red",
                      data:  newData}];
          
        }
      )
   }

}
