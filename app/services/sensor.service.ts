import {Injectable} from 'angular2/core';
import {Sensor} from '../models/Sensor';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

import {Http,HTTP_PROVIDERS,Headers} from 'angular2/http'
import {Observable} from "../../node_modules/rxjs/Observable";


@Injectable()
export class SensorService  {
    sensors$: Observable<Array<Sensor>>;
    sensor$:  Observable<Sensor>;

    private _sensorsObserver: any;
    private _sensorObserver: any;

    private _dataStore: {
        sensors: Array<Sensor>,
        currentSensor:Sensor
    };

    constructor(public http:Http) {
        this.sensors$ = new Observable(observer =>
            this._sensorsObserver = observer).share();

        this.sensor$ = new Observable(observer =>
            this._sensorObserver = observer).share();
        this._dataStore = { sensors: [] ,currentSensor:null};

        this._dataStore = { sensors: [] ,currentSensor:null};



    }



    createSensor(sensor:Sensor){

        var headers = new Headers();
        headers.append('Content-Type', 'application/json ; charset=utf-8');

        console.log(JSON.stringify(sensor));

        this.http.post('http://10.0.0.1:3000/api/sensors',JSON.stringify(sensor),{headers:headers})
            .subscribe(
                data => {
                    this._dataStore.sensors.push(sensor);
                    if(this._sensorsObserver)
                    this._sensorsObserver.next(this._dataStore.sensors);

                },
                err => console.error(err)
            );
    }

    getSensor(id:number){
        console.log("SensorService getSensor id:"+id);

        this.http.get('http://10.0.0.1:3000/api/sensors/'+id)
            .map(res => res.json())
            .subscribe(
                data => {
                    console.log(data);
                    this._dataStore.currentSensor=new Sensor(data.sens_id,data.name,data.description,data.type,data.min_value,data.max_value,data.id);
                    if(this._sensorObserver)
                    this._sensorObserver.next(this._dataStore.currentSensor);
                },
                err => {console.log (err)}
            );
    }

    loadSensors(){
        this.http.get('http://10.0.0.1:3000/api/sensors')
            .map(res => res.json())
            .subscribe(
                data => {
                    console.log(data);
                    this._dataStore.sensors=[];
                    data.forEach(sensor =>{
                        this._dataStore.sensors.push(new Sensor(sensor.sens_id,
                                                                sensor.name,
                                                                sensor.description,
                                                                sensor.type,
                                                                sensor.min_value,sensor.max_value,sensor.id));
                    });
                    this._sensorsObserver.next(this._dataStore.sensors);
                },
                err => {console.log (err)}
            );
    }



}
