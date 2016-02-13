System.register(['angular2/core', 'angular2/router', './sensor.component', './simple.component', './topbar.component', './mysidebar.component', './newsensor.component', './sensorlist.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, sensor_component_1, simple_component_1, topbar_component_1, mysidebar_component_1, newsensor_component_1, sensorlist_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sensor_component_1_1) {
                sensor_component_1 = sensor_component_1_1;
            },
            function (simple_component_1_1) {
                simple_component_1 = simple_component_1_1;
            },
            function (topbar_component_1_1) {
                topbar_component_1 = topbar_component_1_1;
            },
            function (mysidebar_component_1_1) {
                mysidebar_component_1 = mysidebar_component_1_1;
            },
            function (newsensor_component_1_1) {
                newsensor_component_1 = newsensor_component_1_1;
            },
            function (sensorlist_component_1_1) {
                sensorlist_component_1 = sensorlist_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/views/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES, topbar_component_1.TopBarComponent, mysidebar_component_1.MySideBarComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/sensor', name: 'SensorView', component: sensor_component_1.SensorViewComponent },
                        { path: '/listsensor', name: 'ListSensor', component: sensorlist_component_1.SensorListComponent },
                        { path: '/newsensor', name: 'NewSensor', component: newsensor_component_1.NewSensorComponent },
                        { path: '/', name: 'Simple', component: simple_component_1.SimpleComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map