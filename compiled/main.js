System.register(['angular2/platform/browser', './sensor.component', './sensor.service', 'angular2/http'], function(exports_1) {
    var browser_1, sensor_component_1, sensor_service_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (sensor_component_1_1) {
                sensor_component_1 = sensor_component_1_1;
            },
            function (sensor_service_1_1) {
                sensor_service_1 = sensor_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(sensor_component_1.SensorViewComponent, [sensor_service_1.SensorService, http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map