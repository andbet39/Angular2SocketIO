System.register(['angular2/core', '../models/Sensor', 'rxjs/Observable', 'rxjs/add/operator/share', 'rxjs/add/operator/map', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Sensor_1, Observable_1, http_1;
    var SensorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sensor_1_1) {
                Sensor_1 = Sensor_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            SensorService = (function () {
                function SensorService(http) {
                    var _this = this;
                    this.http = http;
                    this.sensors$ = new Observable_1.Observable(function (observer) {
                        return _this._sensorsObserver = observer;
                    }).share();
                    this.sensor$ = new Observable_1.Observable(function (observer) {
                        return _this._sensorObserver = observer;
                    }).share();
                    this._dataStore = { sensors: [], currentSensor: null };
                    this._dataStore = { sensors: [], currentSensor: null };
                }
                SensorService.prototype.createSensor = function (sensor) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json ; charset=utf-8');
                    console.log(JSON.stringify(sensor));
                    this.http.post('http://10.0.0.1:3000/api/sensors', JSON.stringify(sensor), { headers: headers })
                        .subscribe(function (data) {
                        _this._dataStore.sensors.push(sensor);
                        if (_this._sensorsObserver)
                            _this._sensorsObserver.next(_this._dataStore.sensors);
                    }, function (err) { return console.error(err); });
                };
                SensorService.prototype.getSensor = function (id) {
                    var _this = this;
                    console.log("SensorService getSensor id:" + id);
                    this.http.get('http://10.0.0.1:3000/api/sensors/' + id)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        console.log(data);
                        _this._dataStore.currentSensor = new Sensor_1.Sensor(data.sens_id, data.name, data.description, data.type, data.min_value, data.max_value, data.id);
                        if (_this._sensorObserver)
                            _this._sensorObserver.next(_this._dataStore.currentSensor);
                    }, function (err) { console.log(err); });
                };
                SensorService.prototype.loadSensors = function () {
                    var _this = this;
                    this.http.get('http://10.0.0.1:3000/api/sensors')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        console.log(data);
                        _this._dataStore.sensors = [];
                        data.forEach(function (sensor) {
                            _this._dataStore.sensors.push(new Sensor_1.Sensor(sensor.sens_id, sensor.name, sensor.description, sensor.type, sensor.min_value, sensor.max_value, sensor.id));
                        });
                        _this._sensorsObserver.next(_this._dataStore.sensors);
                    }, function (err) { console.log(err); });
                };
                SensorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SensorService);
                return SensorService;
            })();
            exports_1("SensorService", SensorService);
        }
    }
});
//# sourceMappingURL=sensor.service.js.map