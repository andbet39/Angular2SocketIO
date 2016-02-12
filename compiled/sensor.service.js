System.register(['angular2/core', 'rxjs/Observable', 'rxjs/add/operator/share', './models/sensorData'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, sensorData_1;
    var SensorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (sensorData_1_1) {
                sensorData_1 = sensorData_1_1;
            }],
        execute: function() {
            //import { io } from 'socket.io';
            SensorService = (function () {
                function SensorService() {
                    var _this = this;
                    console.log('Socket service constructor');
                    this.sensorDatas$ = new Observable_1.Observable(function (observer) {
                        return _this._sensorDataObserver = observer;
                    }).share();
                    this.latestData$ = new Observable_1.Observable(function (observer) {
                        return _this._latestDataObserver = observer;
                    }).share();
                    this._dataStore = { sensorDatas: [], latestData: null };
                    this.socket = io('http://10.0.0.1:3000');
                    this.socket.on('senordata_created', this.onSensorData.bind(this));
                }
                SensorService.prototype.onSensorData = function (data) {
                    this._dataStore.sensorDatas.push(new sensorData_1.SensorData(data.sens_id, data.val, data.type, data.received));
                    this._dataStore.latestData = new sensorData_1.SensorData(data.sens_id, data.val, data.type, data.received);
                    if (this._latestDataObserver) {
                        this._latestDataObserver.next(this._dataStore.latestData);
                    }
                    this._sensorDataObserver.next(this._dataStore.sensorDatas);
                };
                SensorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SensorService);
                return SensorService;
            }());
            exports_1("SensorService", SensorService);
        }
    }
});
//# sourceMappingURL=sensor.service.js.map