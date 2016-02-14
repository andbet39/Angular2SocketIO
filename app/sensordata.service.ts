import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Inject } from 'angular2/core';
import {SensorData} from './models/sensorData';
//import { io } from 'socket.io';

@Injectable()
export class SensorDataService  {
  sensorDatas$: Observable<Array<SensorData>>;
  latestData$ :Observable<SensorData>;

      private _sensorDataObserver: any;
      private _latestDataObserver: any;
      
      private socket:any;

      private currentSensId:number;

      private _dataStore: {
          sensorDatas: Array<SensorData>,
          latestData:SensorData;
      };

      constructor() {
         console.log('Socket service constructor');
    
         this.sensorDatas$ = new Observable(observer =>
              this._sensorDataObserver = observer).share();
         
         this.latestData$ = new Observable(observer =>
                this._latestDataObserver = observer).share();

          this._dataStore = { sensorDatas: [],latestData: null};

          this.socket= io('http://10.0.0.1:3000');
          this.socket.on('senordata_created',this.onSensorData.bind(this));
          
      }

      subscribeSensorData(sens_id:number){
          this.socket.emit('leave',this.currentSensId);
          this.currentSensId=sens_id;
          this.socket.emit('subscribe',this.currentSensId);
      }
    
      onSensorData(data){
        this._dataStore.sensorDatas.push(new SensorData(data.sens_id,data.val,data.type,data.received));
        this._dataStore.latestData = new SensorData(data.sens_id,data.val,data.type,data.received);
        if(this._latestDataObserver)
            this._latestDataObserver.next(this._dataStore.latestData);

          if(this._sensorDataObserver)
        this._sensorDataObserver.next(this._dataStore.sensorDatas);
      }



}
