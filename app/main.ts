import {bootstrap}    from 'angular2/platform/browser'
import {SensorViewComponent} from './sensor.component'
import {AppComponent} from './app.component'
import {SensorService} from './sensor.service'
import {Http,HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AppComponent,[SensorService,HTTP_PROVIDERS,ROUTER_PROVIDERS]);
