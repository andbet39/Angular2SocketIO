System.register(['angular2/core', './services/sensor.service', './newsensor.component', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, sensor_service_1, newsensor_component_1, router_1;
    var SensorListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sensor_service_1_1) {
                sensor_service_1 = sensor_service_1_1;
            },
            function (newsensor_component_1_1) {
                newsensor_component_1 = newsensor_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SensorListComponent = (function () {
                function SensorListComponent(sensorService) {
                    var _this = this;
                    this.sensorService = sensorService;
                    sensorService.sensors$.subscribe(function (data) {
                        console.log(data);
                        _this.sensors = data;
                    }, function (err) {
                        console.log(err);
                    });
                }
                SensorListComponent.prototype.ngOnInit = function () {
                    this.sensorService.loadSensors();
                };
                SensorListComponent = __decorate([
                    core_1.Component({
                        selector: 'list_sensor',
                        templateUrl: 'app/views/sensorlist.html',
                        providers: [sensor_service_1.SensorService],
                        directives: [newsensor_component_1.NewSensorComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [sensor_service_1.SensorService])
                ], SensorListComponent);
                return SensorListComponent;
            })();
            exports_1("SensorListComponent", SensorListComponent);
        }
    }
});
//# sourceMappingURL=sensorlist.component.js.map