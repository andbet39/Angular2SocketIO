System.register(['angular2/core', './sensordata.service', './flot', './flotRT', 'angular2/common', 'angular2/router', "./models/sensor", "./services/sensor.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sensordata_service_1, flot_1, flotRT_1, common_1, router_1, sensor_1, sensor_service_1;
    var SensorViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sensordata_service_1_1) {
                sensordata_service_1 = sensordata_service_1_1;
            },
            function (flot_1_1) {
                flot_1 = flot_1_1;
            },
            function (flotRT_1_1) {
                flotRT_1 = flotRT_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sensor_1_1) {
                sensor_1 = sensor_1_1;
            },
            function (sensor_service_1_1) {
                sensor_service_1 = sensor_service_1_1;
            }],
        execute: function() {
            SensorViewComponent = (function () {
                function SensorViewComponent(_sensorDataService, _sensorService, _router, _routeParams) {
                    this._sensorDataService = _sensorDataService;
                    this._sensorService = _sensorService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.sensorData = [];
                    this.points = 100;
                    this.splineOptions = {};
                    this.newdata = [];
                    this.currentSensor = new sensor_1.Sensor();
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
                SensorViewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var sens_id = this._routeParams.get('id');
                    this._sensorDataService.latestData$.subscribe(function (data) {
                        _this.newdata = data.val;
                    });
                    this._sensorService.sensor$.subscribe(function (data) {
                        console.log("SensorCompoent -> Subscribe ");
                        console.log(data);
                        _this.currentSensor = data;
                        _this._sensorDataService.subscribeSensorData(_this.currentSensor.sens_id);
                    });
                    this._sensorService.getSensor(sens_id);
                };
                SensorViewComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sensor-view',
                        templateUrl: 'app/views/sensor-view.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, flot_1.FlotCmp, flotRT_1.FlotRTCmp],
                        providers: [sensor_service_1.SensorService]
                    }), 
                    __metadata('design:paramtypes', [sensordata_service_1.SensorDataService, sensor_service_1.SensorService, router_1.Router, router_1.RouteParams])
                ], SensorViewComponent);
                return SensorViewComponent;
            })();
            exports_1("SensorViewComponent", SensorViewComponent);
        }
    }
});
//# sourceMappingURL=sensor.component.js.map