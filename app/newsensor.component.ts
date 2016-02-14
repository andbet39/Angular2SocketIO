/**
 * Created by andreaterzani on 13/02/16.
 */
import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Control,CORE_DIRECTIVES,FORM_DIRECTIVES} from 'angular2/common';
import {Sensor} from './models/Sensor'
import {SensorService} from './services/sensor.service'


@Component({
    selector: 'sensor-form',
    templateUrl:'app/views/sensorform.html',
    providers:[SensorService]
})

export class NewSensorComponent {

    constructor(private sensorService:SensorService){}

     public model:Sensor = new Sensor();

    onSubmit(){
        console.log(this.model);
        this.sensorService.createSensor(this.model);
    }



    ngAfterViewInit() {

        console.log ("NewSensorComponentV = ngAfterViewInit");

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

    }

}
