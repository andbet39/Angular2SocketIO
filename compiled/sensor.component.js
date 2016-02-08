System.register(['angular2/core', './sensor.service', './flot', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sensor_service_1, flot_1, common_1;
    var SensorViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sensor_service_1_1) {
                sensor_service_1 = sensor_service_1_1;
            },
            function (flot_1_1) {
                flot_1 = flot_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SensorViewComponent = (function () {
                function SensorViewComponent(_sensorService) {
                    this._sensorService = _sensorService;
                    this.sensorData = [];
                    this.splineOptions;
                    any = {
                        series: {
                            lines: { show: true },
                            points: {
                                radius: 3,
                                show: true
                            }
                        }
                    };
                    this.dataset = [{ label: "line1",
                            color: "blue",
                            data: [[1, 0], [2, 50], [3, 0], [4, 0], [5, 50], [6, 50], [7, 50], [8, 50], [9, 50], [10, 0]] }];
                }
                SensorViewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._sensorService.sensorDatas$.subscribe(function (data) {
                        if (data.length > 11) {
                            _this.sensorData = [];
                            for (var i = data.length - 1; i > data.length - 11; i--) {
                                _this.sensorData.push(data[i]);
                            }
                        }
                        else {
                            _this.sensorData = data;
                        }
                        var newData = [];
                        _this.sensorData.forEach(function (d, i) {
                            newData.push([i, d.val]);
                        });
                        _this.dataset = [{ label: "line1",
                                color: "red",
                                data: newData }];
                    });
                };
                SensorViewComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sensor-view',
                        templateUrl: 'app/sensor-view.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, flot_1.FlotCmp]
                    }), 
                    __metadata('design:paramtypes', [sensor_service_1.SensorService])
                ], SensorViewComponent);
                return SensorViewComponent;
            })();
            exports_1("SensorViewComponent", SensorViewComponent);
        }
    }
});
//# sourceMappingURL=sensor.component.js.map