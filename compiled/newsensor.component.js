System.register(['angular2/core', './models/Sensor', './services/sensor.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Sensor_1, sensor_service_1;
    var NewSensorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sensor_1_1) {
                Sensor_1 = Sensor_1_1;
            },
            function (sensor_service_1_1) {
                sensor_service_1 = sensor_service_1_1;
            }],
        execute: function() {
            NewSensorComponent = (function () {
                function NewSensorComponent(sensorService) {
                    this.sensorService = sensorService;
                    this.model = new Sensor_1.Sensor();
                }
                NewSensorComponent.prototype.onSubmit = function () {
                    console.log(this.model);
                    this.sensorService.createSensor(this.model);
                };
                NewSensorComponent.prototype.ngAfterViewInit = function () {
                    console.log("NewSensorComponentV = ngAfterViewInit");
                    // page onload functions
                    altair_page_onload.init();
                    // main header
                    altair_main_header.init();
                    // main sidebar
                    altair_main_sidebar.init();
                    // secondary sidebar
                    altair_secondary_sidebar.init();
                    // top bar
                    altair_top_bar.init();
                    // page heading
                    altair_page_heading.init();
                    // material design
                    altair_md.init();
                    // forms
                    altair_forms.init();
                    // truncate text helper
                    altair_helpers.truncate_text($('.truncate-text'));
                    // full screen
                    altair_helpers.full_screen();
                };
                NewSensorComponent = __decorate([
                    core_1.Component({
                        selector: 'sensor-form',
                        templateUrl: 'app/views/sensorform.html',
                        providers: [sensor_service_1.SensorService]
                    }), 
                    __metadata('design:paramtypes', [sensor_service_1.SensorService])
                ], NewSensorComponent);
                return NewSensorComponent;
            })();
            exports_1("NewSensorComponent", NewSensorComponent);
        }
    }
});
//# sourceMappingURL=newsensor.component.js.map