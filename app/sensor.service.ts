import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Inject } from 'angular2/core';
import {SensorData} from './models/sensorData';
//import { io } from 'socket.io';

@Injectable()
export class SensorService  {
  sensorDatas$: Observable<Array<SensorData>>;

      private _sensorDataObserver: any;
      private socket:any;

      private _dataStore: {
          sensorDatas: Array<SensorData>,

      };

      constructor() {
         console.log('Socket service constructor');
    
         this.sensorDatas$ = new Observable(observer =>
              this._sensorDataObserver = observer).share();

          this._dataStore = { sensorDatas: []};

          this.socket = io('http://10.29.79.185:3000');
          this.socket.on('senordata_created',this.onSensorData.bind(this));

      }

    
      onSensorData(data){
        this._dataStore.sensorDatas.push(new SensorData(data.sens_id,data.val,data.type,data.received));
        this._sensorDataObserver.next(this._dataStore.sensorDatas);
      }



}
