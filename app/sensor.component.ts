import {Component} from 'angular2/core';
import {Component} from 'angular2/core';
import {SensorService} from './sensor.service';
import {SensorData} from './models/sensorData';
import {FlotCmp} from './flot';
import {FlotRTCmp} from './flotRT';
import {OnInit} from 'angular2/core';
import {Control,CORE_DIRECTIVES,FORM_DIRECTIVES} from 'angular2/common'

@Component({
    selector: 'my-sensor-view',
    templateUrl:'app/views/sensor-view.html' ,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES,FlotCmp,FlotRTCmp]

})

export class SensorViewComponent implements OnInit{

  sensorData:Array<SensorData>=[];
  
  private points:number=100;
  private splineOptions:any={};
  private dataset:any={};
  public newdata:any=[];
  public selected_sensor_id:number=121;
  
   constructor(private _sensorService:SensorService){
        
        this.splineOptions = {
            series: {
                lines: { show: true },
                points: {
                    radius: 1,
                    show: false
                }
            }
        };
        
        
       this.loadRandomData();
     }

    loadRandomData(){
        var newData = [];
         newData.push([0,0]);
            for(var i=1;i<this.points-1;i++){
                newData.push([i,25]);
              
            }
             newData.push([this.points,50]);
            
            this.dataset = [{label: "line1",
                        color:"red",
                        data:  newData}];
    }
    
  
  ngOnInit(){
     
     this._sensorService.latestData$.subscribe(
         data=>
         {
             this.newdata=data.val;
 
         }
     );
     
     
      this._sensorService.sensorDatas$.subscribe(
        data=>{
                  
                let points = this.points;
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
                    newData.push([points-(i+1),d.val]);
                });
                
                this.dataset = [{label: "line1",
                            color:"red",
                            data:  newData}];
                
                }
            )
   }

}
