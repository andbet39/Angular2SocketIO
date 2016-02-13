import {Injectable} from 'angular2/core';
import {Sensor} from '../models/Sensor';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

import {Http,HTTP_PROVIDERS,Headers} from 'angular2/http'


@Injectable()
export class SensorService  {
    sensors$: Observable<Array<Sensor>>;

    private _sensorsObserver: any;
    private _dataStore: {
        sensors: Array<Sensor>
    };

    constructor(public http:Http) {
        this.sensors$ = new Observable(observer =>
            this._sensorsObserver = observer).share();
        this._dataStore = { sensors: [] };
    }



    createSensor(sensor:Sensor){

        var headers = new Headers();
        headers.append('Content-Type', 'application/json ; charset=utf-8');

        console.log(JSON.stringify(sensor));

        this.http.post('http://10.0.0.1:3000/api/sensors',JSON.stringify(sensor),{headers:headers})
            .subscribe(
                data => {
                    this._dataStore.sensors.push(sensor);
                    this._sensorsObserver.next(this._dataStore.sensors);

                },
                err => console.error(err)
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
                        this._dataStore.sensors.push(new Sensor(sensor.sens_id,sensor.name,sensor.description,sensor.type));
                    });
                    this._sensorsObserver.next(this._dataStore.sensors);
                },
                err => {console.log (err)}
            );
    }



}
