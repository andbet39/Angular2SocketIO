import {Component} from 'angular2/core';
import {SensorDataService} from './sensordata.service';
import {SensorData} from './models/sensorData';
import {FlotCmp} from './flot';
import {FlotRTCmp} from './flotRT';
import {OnInit} from 'angular2/core';
import {Control,CORE_DIRECTIVES,FORM_DIRECTIVES} from 'angular2/common'
import {Router, RouteParams}   from 'angular2/router';
import {SensorData} from "./models/sensorData";
import {Sensor} from "./models/sensor";
import {SensorService} from "./services/sensor.service";

@Component({
    selector: 'my-sensor-view',
    templateUrl:'app/views/sensor-view.html' ,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES,FlotCmp,FlotRTCmp],
    providers:[SensorService]

})

export class SensorViewComponent implements OnInit{

  sensorData:Array<SensorData>=[];
  
  private points:number=100;
  private splineOptions:any={};
    public newdata:any=[];
    private currentSensor:Sensor = new Sensor();
  
   constructor(private _sensorDataService:SensorDataService,
               private _sensorService:SensorService,
               private _router:Router,
               private _routeParams:RouteParams){
        
        this.splineOptions = {
            series: {
                lines: { show: true },
                points: {
                    radius: 1,
                    show: false
                }
            }
        };
     }


  
  ngOnInit(){
     let sens_id:number = this._routeParams.get('id');


     this._sensorDataService.latestData$.subscribe(
         data=>
         {
             this.newdata=data.val;
         }
     );
      this._sensorService.sensor$.subscribe(
          data => {
               console.log("SensorCompoent -> Subscribe ");
              console.log(data);
              this.currentSensor = data;
              this._sensorDataService.subscribeSensorData(this.currentSensor.sens_id);
          }
      );

      this._sensorService.getSensor(sens_id);


   }

}
