import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Control,CORE_DIRECTIVES,FORM_DIRECTIVES} from 'angular2/common'
import {RouteConfig, ROUTER_DIRECTIVES}   from 'angular2/router';
import { SensorViewComponent } from './sensor.component';
import { SimpleComponent } from './simple.component';
import { TopBarComponent } from './topbar.component';
import { MySideBarComponent } from './mysidebar.component';
import { NewSensorComponent } from './newsensor.component';
import {SensorListComponent } from './sensorlist.component';

@Component({
    selector: 'my-app',
    templateUrl:'app/views/app.html' ,

    directives: [ROUTER_DIRECTIVES,TopBarComponent,MySideBarComponent]

})

@RouteConfig([
    {path:'/sensor', name: 'SensorView', component: SensorViewComponent},
    {path:'/listsensor', name: 'ListSensor', component: SensorListComponent},
    {path:'/newsensor', name: 'NewSensor', component: NewSensorComponent},
  {path:'/',        name: 'Simple',       component: SimpleComponent}
])

export class AppComponent{


}
