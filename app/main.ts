import {bootstrap}    from 'angular2/platform/browser'
import {SensorViewComponent} from './sensor.component'
import {AppComponent} from './app.component'
import {SensorDataService} from './sensordata.service'
import {Http,HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AppComponent,[SensorDataService,HTTP_PROVIDERS,ROUTER_PROVIDERS]);
