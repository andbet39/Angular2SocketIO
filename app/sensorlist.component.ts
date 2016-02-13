/**
 * Created by andreaterzani on 13/02/16.
 */
import {Component,OnInit} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Sensor} from './models/Sensor';
import {SensorService} from './services/sensor.service';
import {NewSensorComponent} from './newsensor.component';
import {RouteConfig, ROUTER_DIRECTIVES}   from 'angular2/router';


@Component({
    selector: 'list_sensor',
    templateUrl:'app/views/sensorlist.html',
    providers:[SensorService],
    directives:[NewSensorComponent,ROUTER_DIRECTIVES]

})

export class SensorListComponent implements OnInit{

    private sensors:Array<Sensor>;

    constructor(private sensorService:SensorService){
        sensorService.sensors$.subscribe(
            data =>{
                console.log(data);
                this.sensors = data;

            },
            err =>{
                console.log(err);
            }
        );
    }

    ngOnInit(){
        this.sensorService.loadSensors();
    }



}
