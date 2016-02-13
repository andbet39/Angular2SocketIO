System.register(['angular2/core', './sensordata.service', './flot', './flotRT', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sensordata_service_1, flot_1, flotRT_1, common_1;
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
            }],
        execute: function() {
            SensorViewComponent = (function () {
                function SensorViewComponent(_sensorDataService) {
                    this._sensorDataService = _sensorDataService;
                    this.sensorData = [];
                    this.points = 100;
                    this.splineOptions = {};
                    this.dataset = {};
                    this.newdata = [];
                    this.selected_sensor_id = 121;
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
                SensorViewComponent.prototype.loadRandomData = function () {
                    var newData = [];
                    newData.push([0, 0]);
                    for (var i = 1; i < this.points - 1; i++) {
                        newData.push([i, 25]);
                    }
                    newData.push([this.points, 50]);
                    this.dataset = [{ label: "line1",
                            color: "red",
                            data: newData }];
                };
                SensorViewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._sensorDataService.latestData$.subscribe(function (data) {
                        _this.newdata = data.val;
                    });
                    this._sensorDataService.sensorDatas$.subscribe(function (data) {
                        var points = _this.points;
                        if (data.length > points) {
                            _this.sensorData = [];
                            for (var i = data.length - 1; i > data.length - points; i--) {
                                _this.sensorData.push(data[i]);
                            }
                        }
                        else {
                            _this.sensorData = data;
                        }
                        var newData = [];
                        _this.sensorData.forEach(function (d, i) {
                            newData.push([points - (i + 1), d.val]);
                        });
                        _this.dataset = [{ label: "line1",
                                color: "red",
                                data: newData }];
                    });
                };
                SensorViewComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sensor-view',
                        templateUrl: 'app/views/sensor-view.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, flot_1.FlotCmp, flotRT_1.FlotRTCmp]
                    }), 
                    __metadata('design:paramtypes', [sensordata_service_1.SensorDataService])
                ], SensorViewComponent);
                return SensorViewComponent;
            })();
            exports_1("SensorViewComponent", SensorViewComponent);
        }
    }
});
//# sourceMappingURL=sensor.component.js.map